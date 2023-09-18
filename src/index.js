
import { topSkills } from "./top_skills";
import {jobPosts} from "./job_posts.js"

document.addEventListener("DOMContentLoaded", main);

function main() {
    const titleForSkillsInput = document.querySelector(".title-for-skills")
    titleForSkillsInput.addEventListener("click", showSkillsAndJobs);
}

async function showSkillsAndJobs(event) {
    const titleInput = event.target.value
    if (!titleInput){
        return;
    }
    await new topSkills(titleInput);

    await new jobPosts(titleInput);
}
