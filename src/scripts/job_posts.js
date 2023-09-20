import { jobCard } from "./job_card";

export class jobPosts{

    constructor(titleInput){
        this.titleInput = titleInput;
    }

    async fetchJobs(){
        const res = await fetch("./src/data/job_postings.json")
        this.allJobPosts = await res.json();
    }

    getJobs(){
        this.jobPosts = [];
        this.skillsCnt = {};
        this.companiesCnt = {};
        this.locationsCnt = {};

        for (const [_, jobPost] of Object.entries(this.allJobPosts)) {
            let postingsTitle = jobPost['title'].toLowerCase();
            if (postingsTitle !== this.titleInput){
                continue;
            }

            this.jobPosts.push(jobPost);

            jobPost['skills_desc'].forEach(skill => {
                if(!this.skillsCnt[skill]) this.skillsCnt[skill] = 0;
                this.skillsCnt[skill] += 1;  
            });

            if(!this.companiesCnt[jobPost['company_name']]){
                this.companiesCnt[jobPost['company_name']] = 0;
            }
            this.companiesCnt[jobPost['company_name']] += 1;

            if(!this.locationsCnt[jobPost['location']]){
                this.locationsCnt[jobPost['location']] = 0;
            }
            this.locationsCnt[jobPost['location']] += 1;
        }
        
    }
}