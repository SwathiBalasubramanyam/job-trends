import {jobPosts} from "./scripts/job_posts.js"
import { jobCard } from "./scripts/job_card.js";
import { plotGraph} from "./scripts/graph.js";
import { hideDomEle, showDomEle, getJobsFromLs } from "./scripts/utils.js";


document.addEventListener("DOMContentLoaded", main);

class jobTrends{

    constructor(){
        this.getInsightsBtn = document.querySelector(".nav-user-input-btn");
        this.userTitleInput = document.querySelector("input[name='nav-user-input-text']")
        this.jobPostsSuccess = document.querySelector(".successful-results")
        this.jobPostsFaliure = document.querySelector(".unsuccessful-results")

        this.savedJobsBtn = document.querySelector(".nav-bar-jobs")
        this.savedJobsBtn.addEventListener("click", this.getSavedJobs.bind(this))

        this.userTitleInput.addEventListener("click", () => {
            this.userTitleInput.value = ""
        })

        this.getInsightsBtn.addEventListener("click", this.getInsights.bind(this))

    }

    async getInsights(event){
        event.preventDefault();
        this.hideIntroModal();
        this.currentTitle = this.userTitleInput.value
        this.jobPostsIns = new jobPosts(this.currentTitle);
        await this.jobPostsIns.fetchJobs()
            .then(this.jobPostsIns.getJobs.bind(this.jobPostsIns));

        if(!this.jobPostsIns.jobPosts.length){
            this.jobPostsSuccess.setAttribute("hidden", "hidden")
            this.jobPostsFaliure.removeAttribute("hidden")
        } else {
            this.jobPostsSuccess.removeAttribute("hidden")
            this.jobPostsFaliure.setAttribute("hidden", "hidden")
            this.handleJobPosts(this.jobPostsIns);
            this.plotGraph();

        }
    }

    handleJobPosts(jobPostsIns){
        this.jobCardIns = [];

        const superParent = document.querySelector(".job-posts");
        this.removeChildren(superParent);
        
        const jobCardsContainer = document.createElement("div")
        jobCardsContainer.className = "job-cards-container";

        jobPostsIns.jobPosts.forEach((jobPost) => {
            const jobCardIns = new jobCard(jobPost);
            this.jobCardIns.push(jobCardIns);
            jobCardsContainer.appendChild(jobCardIns.jobCardDomEle);
        })

        superParent.appendChild(jobCardsContainer);
        this.jobCardIns[0].showDetails();
    }
    
    plotGraph(){
        let num = 10;
        showDomEle(document.querySelector(".graphs"));

        const skillEle = document.querySelector(".skills")
        this.removeChildren(skillEle)
        const skillGraphEle = document.createElement("canvas")
        skillGraphEle.id = "skills-graph"
        skillEle.appendChild(skillGraphEle)

        plotGraph(this.jobPostsIns.skillsCnt, "skills-graph", `Here are a few skills, from the posts..`, num);

        const companiesEle = document.querySelector(".companies")
        this.removeChildren(companiesEle)

        const companiesGraphEle = document.createElement("canvas")
        companiesGraphEle.id = "companies-graph"
        companiesEle.appendChild(companiesGraphEle)
        plotGraph(this.jobPostsIns.companiesCnt, "companies-graph", `Some of the companies hiring..`, num);


        const locationsEle = document.querySelector(".locations")
        this.removeChildren(locationsEle)

        const locationsGraphEle = document.createElement("canvas")
        locationsGraphEle.id = "locations-graph"
        locationsEle.appendChild(locationsGraphEle)
        plotGraph(this.jobPostsIns.locationsCnt, "locations-graph", `Some of the job locations..`, num);

    }

    removeChildren(domEle){
        while(domEle.firstChild){
            domEle.removeChild(domEle.firstChild)
        }
    }

    hideIntroModal(){
        this.pageContent = document.querySelector(".page-content");
        this.introModal = document.querySelector(".intro");
        if (this.introModal){
            this.pageContent.removeChild(this.introModal)
        }
    }

    async getSavedJobs(event){
        event.preventDefault();
        this.hideIntroModal();
        hideDomEle(document.querySelector(".graphs"));
        const savedJobs = getJobsFromLs();

        this.savedJobPostsIns = new jobPosts();
        await this.savedJobPostsIns.fetchJobs()
            .then(() => {
                this.savedJobPostsIns.jobPosts = [];
                for (const [_, jobPost] of Object.entries(this.savedJobPostsIns.allJobPosts)){
                    if (savedJobs.includes(jobPost["job_id"])){
                        this.savedJobPostsIns.jobPosts.push(jobPost);
                    }
                }
                if(!this.savedJobPostsIns.jobPosts.length){
                    this.jobPostsSuccess.setAttribute("hidden", "hidden")
                    this.jobPostsFaliure.removeAttribute("hidden")
                } else {
                    this.jobPostsSuccess.removeAttribute("hidden")
                    this.jobPostsFaliure.setAttribute("hidden", "hidden")
                    this.handleJobPosts(this.savedJobPostsIns);
                }
            });
    }
}

function main() {
    new jobTrends();
}