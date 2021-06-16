import { projects } from "./data.js";

const projectGrid = document.getElementById("project-grid");

window.onload = () => {
  projects.forEach((project) => {
    const box = document.createElement("div");
    const imgBox = document.createElement("div");
    const img = document.createElement("img");
    const boxContent = document.createElement("div");
    const boxTitle = document.createElement("h3");
    const boxParagraph = document.createElement("p");
    const boxLink = document.createElement("a");

    box.id = project.id;

    box.className = "box";
    boxContent.className = "box-content";
    boxTitle.className = "box-title";
    imgBox.className = "img-box";

    img.src = project.image.src;
    img.alt = project.image.alt;
    imgBox.appendChild(img);
    box.appendChild(imgBox);

    if (project.image.src === "") {
      img.src = "./images/default.png";
      img.alt = "Default image.";
    }

    boxTitle.innerHTML = project.name;
    boxContent.appendChild(boxTitle);

    boxParagraph.innerHTML = project.description;
    boxContent.appendChild(boxParagraph);

    boxLink.innerHTML = project.link;
    boxLink.href = project.url;
    boxContent.appendChild(boxLink);

    box.appendChild(boxContent);
    projectGrid.appendChild(box);
  });
};
