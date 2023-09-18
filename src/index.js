
document.addEventListener("DOMContentLoaded", main);

function main() {
    const titleForSkillsInput = document.querySelector(".title-for-skills")

    titleForSkillsInput.addEventListener("click", showSkills);
}

async function showSkills(event) {
    const titleInput = event.target.value
    const res = await fetch("../data/pdl_skills_for_us_software_engineers.json");
    const allSkillsByTitle = await res.json();

    if (allSkillsByTitle[titleInput]){
        console.log(allSkillsByTitle[titleInput]);
        return allSkillsByTitle[titleInput]
    }
}