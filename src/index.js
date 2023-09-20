import {jobPosts} from "./job_posts.js"
import { jobCard } from "./job_card.js";
import { plotGraph} from "./graph.js";

document.addEventListener("DOMContentLoaded", main);

class jobTrends{

    constructor(){
        this.getInsightsBtn = document.querySelector(".user-input-btn");
        this.userTitleInput = document.querySelector("input[name='user-input-text']")
        this.jobPostsSuccess = document.querySelector(".successful-results")
        this.jobPostsFaliure = document.querySelector(".unsuccessful-results")
        this.getInsightsBtn.addEventListener("click", this.getInsights.bind(this))
    }

    async getInsights(event){
        event.preventDefault();
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
            this.handleJobPosts();
        }
    }

    handleJobPosts(){
        this.jobCardIns = [];

        const superParent = document.querySelector(".job-posts");
        this.removeChildren(superParent);
        
        const jobCardsContainer = document.createElement("div")
        jobCardsContainer.className = "job-cards-container";

        this.jobPostsIns.jobPosts.forEach((jobPost) => {
            const jobCardIns = new jobCard(jobPost);
            this.jobCardIns.push(jobCardIns);
            jobCardsContainer.appendChild(jobCardIns.domEle);
        })

        superParent.appendChild(jobCardsContainer);
        this.jobCardIns[0].showDetails();
        this.plotGraph();
    }
    
    plotGraph(){
        let num = 10;

        const skillEle = document.querySelector(".skills")
        this.removeChildren(skillEle)
        const skillGraphEle = document.createElement("canvas")
        skillGraphEle.id = "skills-graph"
        skillEle.appendChild(skillGraphEle)

        plotGraph(this.jobPostsIns.skillsCnt, "skills-graph", `${num} most listed skills for ${this.currentTitle}`, num);

        const companiesEle = document.querySelector(".companies")
        this.removeChildren(companiesEle)

        const companiesGraphEle = document.createElement("canvas")
        companiesGraphEle.id = "companies-graph"
        companiesEle.appendChild(companiesGraphEle)
        plotGraph(this.jobPostsIns.companiesCnt, "companies-graph", `Top ${num} companies hiring for ${this.currentTitle}`, num);


        const locationsEle = document.querySelector(".locations")
        this.removeChildren(locationsEle)

        const locationsGraphEle = document.createElement("canvas")
        locationsGraphEle.id = "locations-graph"
        locationsEle.appendChild(locationsGraphEle)
        plotGraph(this.jobPostsIns.locationsCnt, "locations-graph", `Top ${num} locations for ${this.currentTitle}`, num);

    }

    removeChildren(domEle){
        while(domEle.firstChild){
            domEle.removeChild(domEle.firstChild)
        }
    }
}

function main() {
    new jobTrends();
}