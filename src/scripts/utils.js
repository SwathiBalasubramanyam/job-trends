
export function hideDomEle(domEle){
    domEle.classList.add("hidden");
}

export function showDomEle(domEle){
    domEle.classList.remove("hidden");
}

export function getJobsFromLs(){
    return JSON.parse(localStorage.getItem("jobIds")) ||  [];
}