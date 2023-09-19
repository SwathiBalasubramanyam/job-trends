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
        const domEle = document.createElement("div")
        domEle.setAttribute("id", this.jobId);

        const compEle = document.createElement("div");
        compEle.innerText = `${this.companyName}`
        domEle.appendChild(compEle);

        const locEle = document.createElement("div");
        locEle.innerText = `${this.location}(${this.workType})`
        domEle.appendChild(locEle);

        domEle.addEventListener("click", this.showDetails.bind(this))
        this.domEle = domEle;
    }

    showDetails(){
        const superParent = document.querySelector(".job-posts");

        const parentEle = document.querySelector(".job-desc-container");
        if (parentEle){
            superParent.removeChild(parentEle);
        }
        
        const jobDescriptionContainer = document.createElement("div")
        jobDescriptionContainer.className = "job-desc-container";

        const heading = document.createElement("h2");
        heading.innerText = this.title;
        jobDescriptionContainer.appendChild(heading);

        const compEle = document.createElement("div");
        compEle.innerText = `${this.companyName}`
        jobDescriptionContainer.appendChild(compEle);

        const locEle = document.createElement("div");
        locEle.innerText = `${this.location}(${this.workType})`
        jobDescriptionContainer.appendChild(locEle);

        const link = document.createElement("a")
        let linkText = document.createTextNode("View Post")
        link.appendChild(linkText);
        link.href = this.jobPostingUrl;
        link.target = "_blank"
        jobDescriptionContainer.appendChild(link);

        const linebreak = document.createElement("br")
        jobDescriptionContainer.appendChild(linebreak);

        const description = document.createElement("div")
        description.innerText = `${this.description}`
        jobDescriptionContainer.appendChild(description);

        superParent.appendChild(jobDescriptionContainer)
    }

}