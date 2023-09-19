export class topSkills{

    constructor(titleInput){
        this.titleInput = titleInput;
        this.topSkillsSuccessList = document.querySelector(".top-skills-success");
        this.topSkillsFailureList = document.querySelector(".top-skills-failure");
        this.removeChildren(this.topSkillsSuccessList);
        this.removeChildren(this.topSkillsFailureList);

        this.getSkills()
            .then(this.handleSkills.bind(this));
    }

    async getSkills(){
        const res = await fetch("../data/pdl_skills_for_us_software_engineers.json");
        this.allSkillsByTitle = await res.json();
        this.skills = this.allSkillsByTitle[this.titleInput];
        return;
    }

    handleSkills(){
        if (this.skills){
            this.topSkillsFailureList.setAttribute("hidden", "hidden")
            this.showSkillsSuccess(); 
        } else{
            this.topSkillsSuccessList.setAttribute("hidden", "hidden");
            this.showSkillsFailure();
        }
    }

    showSkillsSuccess(){
        this.topSkillsSuccessList.removeAttribute("hidden");
        const label = document.createElement('label')
        label.innerText = `Here are some of the skills for ${this.titleInput}`
        this.topSkillsSuccessList.append(label)
    
        this.skills['skills'].forEach(element => {
            const liItem = document.createElement("li")
            liItem.innerText = element['skill'];
            this.topSkillsSuccessList.append(liItem);
        });
    }

    removeChildren(element){
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    showSkillsFailure(){
        this.topSkillsFailureList.innerText = `Sorry we couldnt find any skills for the given title ..`
        this.topSkillsFailureList.removeAttribute("hidden");
    } 
}
