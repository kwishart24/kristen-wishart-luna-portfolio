"use strict";

//-------------------- SKILLS SECTION --------------------

const skills = ["HTML", "CSS", "JavaScript", "Git", "Vue.js", "Branding"];

const skillSection = document.getElementById("skills");

const skillsList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

//-------------------- FOOTER SECTION --------------------
const footer = document.createElement("footer");
const body = document.body;
body.appendChild(footer);

//Creation of date and year
const today = new Date();
const thisYear = today.getFullYear();

//Adding name and copyright to footer
const copyright = document.createElement("p");
const footerText = `\u00A9 Kristen Wishart ${thisYear}`;
copyright.innerHTML = footerText;
footer.appendChild(copyright);

//Footer style
footer.style.textAlign = "center";
