import {jobPosts} from "./scripts/job_posts.js"
import { jobCard } from "./scripts/job_card.js";
import { plotGraph} from "./scripts/graph.js";
import { hideDomEle, showDomEle, getJobsFromLs } from "./scripts/utils.js";


document.addEventListener("DOMContentLoaded", main);

class jobTrends{

    constructor(){
        this.searchTerms = ['lead software engineer', 'software engineer', 'software engineer in test', 'c++ software engineer', 'java software engineer', 'embedded software architect', 'software analyst', 'software engineering manager', 'software engineer i'];
        this.getInsightsBtn = document.querySelector(".nav-user-input-btn");
        this.userTitleInput = document.querySelector("input[name='nav-user-input-text']")
        this.jobPostsSuccess = document.querySelector(".successful-results")
        this.jobPostsFaliure = document.querySelector(".unsuccessful-results")
        this.introModal = document.querySelector(".intro");

        this.savedJobsBtn = document.querySelector(".nav-bar-jobs")
        this.savedJobsBtn.addEventListener("click", this.getSavedJobs.bind(this))

        this.userTitleInput.addEventListener("click", () => {
            this.userTitleInput.value = ""
        })

        this.userTitleInput.addEventListener("keyup", this.showResults.bind(this));

        this.getInsightsBtn.addEventListener("click", this.getInsights.bind(this));

        this.navbar = document.querySelector(".header");
        this.navbar.classList.add("hidden");

        this.getStartedBtn = document.querySelector(".intro-modal-btn");
        this.getStartedBtn.addEventListener("click", () => {
            this.navbar.classList.remove("hidden");
            this.introModal.classList.add("hidden");
        })

    }

    async getInsights(event){
        event.preventDefault();
        this.currentTitle = this.userTitleInput.value
        this.removeAutocompleteResults();
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

    async getSavedJobs(event){
        event.preventDefault();
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

    autocompleteMatch(input) {
        if (input == '') {
          return [];
        }
        var reg = new RegExp(input)
        return this.searchTerms.filter(function(term) {
            if (term.match(reg)) {
              return term;
            }
        });
      }

    showResults(event) {
        let val = event.target.value.toLowerCase();
        let res = document.querySelector(".autocomplete-results");
        let ul = document.createElement("ul");
        this.removeAutocompleteResults();

        let terms = this.autocompleteMatch(val);
        for (let i=0; i<terms.length; i++) {
            let li = document.createElement("li");
            li.innerText = terms[i];
            li.addEventListener("click", this.setInput.bind(this));
            ul.appendChild(li);
        }
        res.appendChild(ul);
    }

    setInput(event){
        this.removeAutocompleteResults();
        this.userTitleInput.value = event.target.innerText
    }

    removeAutocompleteResults() {
        let res = document.querySelector(".autocomplete-results");   
        while (res.firstChild){
            res.removeChild(res.firstChild)
        } 
    }
}

function main() {
    new jobTrends();
    document.querySelector(".title").addEventListener("click", () => {
        window.location.reload();
        localStorage.removeItem("jobIds");
    });

}