import { jobCard } from "./job_card";

export class jobPosts{

    constructor(titleInput){
        this.titleInput = titleInput;
        this.jobPostsSuccess = document.querySelector(".job-posts-success")
        this.jobPostsFaliure = document.querySelector(".job-posts-failure")
        this.getJobs().then(this.render.bind(this));
    }

    async getJobs(){
        const res = await fetch("../data/job_postings.json")
        this.jobPosts = await res.json();
        return;
    }

    render(){
        this.jobs = [];
        while (this.jobPostsSuccess.firstChild) {
            this.jobPostsSuccess.removeChild(this.jobPostsSuccess.firstChild);
        }
        for (const [jobId, jobPost] of Object.entries(this.jobPosts)) {
            let postingsTitle = jobPost['title'].toLowerCase();
            if (postingsTitle === this.titleInput){
                this.jobs.push(jobPost);
            }
        }
        if (!this.jobs.length){
            this.jobPostsSuccess.setAttribute("hidden", "hidden");
            this.jobPostsFaliure.removeAttribute("hidden")
        } else {
            this.jobPostsFaliure.setAttribute("hidden", "hidden");
            this.jobPostsSuccess.removeAttribute("hidden", "hidden");

            const jobCardsContainer = document.createElement("div")
            jobCardsContainer.className = "job-cards-container";

            this.jobs = this.jobs.map((jobPost) => {
                const jobCardIns = new jobCard(jobPost);
                jobCardsContainer.appendChild(jobCardIns.domEle);
                return jobCardIns;
            })

            this.jobPostsSuccess.appendChild(jobCardsContainer);
            this.jobs[0].showDetails();
        }
    }
}