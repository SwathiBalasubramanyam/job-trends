
import { topSkills } from "./top_skills";
import {jobPosts} from "./job_posts.js"

document.addEventListener("DOMContentLoaded", main);

function main() {
    const getInsightsBtn = document.querySelector(".title-input-btn")
    getInsightsBtn.addEventListener("click", getInsightsAndJobPostings);
}

async function getInsightsAndJobPostings(event) {
    event.preventDefault();
    const userTitleInput = document.querySelector("input[name='title-for-skills']")
    const titleInput = userTitleInput.value
    await new topSkills(titleInput);
    await new jobPosts(titleInput);
}
