import {getJobsFromLs} from "./utils";

export class jobCard{
    constructor(jobPost){
            this.jobId = jobPost["job_id"];
            this.companyName = jobPost["company_name"];
            this.description = jobPost["description"];
            this.title = jobPost["title"];
            this.workType = jobPost["formatted_work_type"];
            this.location = jobPost["location"];
            this.jobPostingUrl = jobPost["job_posting_url"];
            this.createElement();
    }

    createElement(){
        this.jobCardDomEle = document.createElement("div")
        this.jobCardDomEle.setAttribute("id", this.jobId);

        const compEle = document.createElement("div");
        compEle.innerText = `${this.companyName}`
        this.jobCardDomEle.appendChild(compEle);

        const locEle = document.createElement("div");
        locEle.innerText = `${this.location}  (${this.workType})`
        this.jobCardDomEle.appendChild(locEle);

        this.jobCardDomEle.addEventListener("click", this.showDetails.bind(this))
    }

    showDetails(){
        this.removeShown();

        this.jobCardDomEle.classList.add("card-shown");

        const superParent = document.querySelector(".job-posts");

        const parentEle = document.querySelector(".job-desc-container");
        if (parentEle){
            superParent.removeChild(parentEle);
        }
        
        const jobDescriptionContainer = document.createElement("div")
        jobDescriptionContainer.className = "job-desc-container";

        const jobDescHeadrConatiner = document.createElement("div");
        jobDescHeadrConatiner.className = "job-desc-header-container";

        
        const claEle = document.createElement("div");
        claEle.className = "job-desc-details";
        
        const heading = document.createElement("h2");
        heading.innerText = this.title;
        heading.className = "job-desc-title";
        claEle.appendChild(heading);

        const compEle = document.createElement("div");
        compEle.className = "job-desc-clw";

        const clwEle = document.createElement("div");
        clwEle.innerText = `${this.companyName}, ${this.location}(${this.workType})`
        compEle.appendChild(clwEle);

        const link = document.createElement("a")
        const img = document.createElement("img")
        img.className = "job-desc-img"
        img.src = "./imgs/linkedin.png"
        link.append(img);
        link.href = this.jobPostingUrl;
        link.target = "_blank"
        compEle.appendChild(link);

        claEle.appendChild(compEle);

        jobDescHeadrConatiner.appendChild(claEle);

        const saveBtn = document.createElement("button");
        saveBtn.className = "save-job-btn"
        const savedJobs = getJobsFromLs();
        saveBtn.innerText = savedJobs.includes(this.jobId) ? "Saved!!" : "Save";
        saveBtn.addEventListener("click", this.saveUnsaveJob.bind(this))
        jobDescHeadrConatiner.appendChild(saveBtn);

        jobDescriptionContainer.appendChild(jobDescHeadrConatiner);

        const description = document.createElement("div")
        description.className = "job-desc-desc";
        description.innerText = `${this.description}`
        jobDescriptionContainer.appendChild(description);

        superParent.appendChild(jobDescriptionContainer)
    }

    removeShown(){
        const parentConatiner = document.querySelector(".job-cards-container")
        for(let child of Array.from(parentConatiner.children)){
            child.classList.remove("card-shown");
        }
    }

    saveUnsaveJob(){
        const saveBtn = document.querySelector(".save-job-btn");
        let jobsFromLs = getJobsFromLs();
        if (jobsFromLs.includes(this.jobId)){
            jobsFromLs = jobsFromLs.filter((ele) => ele !== this.jobId)
            saveBtn.innerText = "Save";
        } else {
            jobsFromLs.push(this.jobId)
            saveBtn.innerText = "Saved!!";
        }
        localStorage.setItem("jobIds", JSON.stringify(jobsFromLs))
    }
}