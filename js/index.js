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

//-------------------- MESSAGE SECTION --------------------

//Helper Function to toggle messages visibility
function toggleMessagesSection() {
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

//Initially hide the messages section (we start with 0 messages)
toggleMessagesSection();

//Select the leave_message form by name
const messageForm = document.querySelector("form[name=leave_message]");

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;
  console.log(userName, userEmail, userMessage);
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto: ${userEmail}">${userName}</a><span>${userMessage}</span>`;

  //Create an edit button
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "edit-btn";
  editButton.type = "button";

  //Add click event listener to edit the message
  editButton.addEventListener("click", function () {
    //Find the message portion
    const messageSpan = newMessage.querySelector("span");
    //Prompt user for new message
    const newText = prompt("Edit your message: ", messageSpan.innerText);
    //Update the message
    if (newText !== null) {
      messageSpan.innerText = newText;
    }
  });

  //Append edit button to new message
  newMessage.appendChild(editButton);

  //Create removal button
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.className = "remove-btn";
  removeButton.type = "button";
  removeButton.addEventListener("click", function (click) {
    const entry = removeButton.parentNode;
    entry.remove();
    //Toggle if there is no more messages
    toggleMessagesSection();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  //Toggle if exists a new message
  toggleMessagesSection();

  //Clear form when submitted
  messageForm.reset();
});

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
