import { jobCard } from "./job_card";

export class jobPosts{

    constructor(titleInput){
        this.titleInput = titleInput;
        this.jobPostsInfo = document.querySelector(".job-posts-info")
        while (this.jobPostsInfo.firstChild) {
            this.jobPostsInfo.removeChild(this.jobPostsInfo.firstChild);
        }
        this.getJobs().then(this.render.bind(this));
    }

    async getJobs(){
        const res = await fetch("../data/job_postings.json")
        this.jobPosts = await res.json();
        return;
    }

    render(){
        for (const key in this.jobPosts) {
            const jobPost = this.jobPosts[key];
            let postingsTitle = jobPost['title'].toLowerCase();
            if (postingsTitle !== this.titleInput){
                continue;
            }
            const jobCardIns = new jobCard(jobPost);
            jobCardIns.createElement();
            this.jobPostsInfo.append(jobCardIns.domEle);
        }
    }
}