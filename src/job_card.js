export class jobCard{
    constructor(jobPost){
            this.jobId = jobPost["job_id"];
            this.companyName = jobPost["company_name"];
            this.description = jobPost["description"];
            this.title = jobPost["title"];
            this.workType = jobPost["formatted_work_type"];
            this.location = jobPost["location"];
            this.jobPostingUrl = jobPost["job_posting_url"];
    }

    createElement(){
        const domEle = document.createElement("div")
        domEle.setAttribute("id", this.jobId);

        const link = document.createElement("a")
        let linkText = document.createTextNode(`${this.companyName}, ${this.location}(${this.workType})`)
        link.appendChild(linkText);
        link.href = this.jobPostingUrl;
        link.target = "_blank"
        domEle.appendChild(link);

        const linebreak = document.createElement("br");
        domEle.appendChild(linebreak);
        
        const desc = document.createElement("textarea")
        desc.innerText = `${this.description}`
        domEle.appendChild(desc)
        this.domEle = domEle;
    }

}