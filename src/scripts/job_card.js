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
        this.jobCardDomEle.setAttribute("is-shown", "is-shown");
        this.jobCardDomEle.style.backgroundColor = "#a8d4ff";
        const superParent = document.querySelector(".job-posts");

        const parentEle = document.querySelector(".job-desc-container");
        if (parentEle){
            superParent.removeChild(parentEle);
        }
        
        const jobDescriptionContainer = document.createElement("div")
        jobDescriptionContainer.className = "job-desc-container";

        const heading = document.createElement("h2");
        heading.innerText = this.title;
        heading.className = "job-desc-title";
        jobDescriptionContainer.appendChild(heading);

        const claEle = document.createElement("div");
        claEle.className = "job-desc-details";

        const compEle = document.createElement("div");
        compEle.className = "job-desc-clw";
        compEle.innerText = `${this.companyName}, ${this.location}(${this.workType})`
        claEle.appendChild(compEle);

        const link = document.createElement("a")
        const img = document.createElement("img")
        img.className = "job-desc-img"
        img.src = "./imgs/linkedin.png"
        link.appendChild(img);
        link.href = this.jobPostingUrl;
        link.target = "_blank"

        claEle.appendChild(link);
        jobDescriptionContainer.appendChild(claEle);

        const description = document.createElement("div")
        description.className = "job-desc-desc";
        description.innerText = `${this.description}`
        jobDescriptionContainer.appendChild(description);

        superParent.appendChild(jobDescriptionContainer)
    }

    removeShown(){
        const parentConatiner = document.querySelector(".job-cards-container")
        for(let child of Array.from(parentConatiner.children)){
            child.removeAttribute("is-shown");
            child.style.backgroundColor = "white";
        }
    }
}