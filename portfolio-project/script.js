const projects = [
    {
        title: "Calculator",
        description: "A simple calculator website",
        technologies: "HTML, CSS, JavaScript"
    },
    {
        title:"Travel Blog",
        description: "a travel blog website build with html.",
        technologies: "HTML"
    }
];
 const projectlist = document.getElementById("project-list");
 projects.forEach(function(project) {
const projectCard = document.createElement("div");
projectCard.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>
<p>${project.technologies}</p>
`;
projectlist.appendChild(projectCard);
 });
 console.log("javascript is working");
