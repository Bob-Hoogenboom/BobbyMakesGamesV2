document.addEventListener("DOMContentLoaded", function() {

  const projects = [
    {
      name: "NeoN Origins" ,
      image: "./images/projStarFall/StarFallBanner.png" ,
      description: "Metroidvania" ,
      buttonURL: "projStarFall.html"
    },

    {
      name: "DataCenter Game" ,
      image: "./images/projDataCenter/DataCenterBanner.png" ,
      description: "RPG" ,
      buttonURL: "projDataCenter.html"
    },

    {
      name: "Voxel Racing" ,
      image: "./images/projVoxelRacing/VoxelRacingBanner.png" ,
      description: "Race" ,
      buttonURL: "projVoxelRacing.html"
    }
  ];

  const container = document.querySelector('main.project_container');

  projects.forEach(project => {
    const projectArticle = document.createElement('article');

    const header = document.createElement('header');
  
    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('align-center');
    projectTitle.innerHTML = project.name;
  
    header.appendChild(projectTitle);
    projectArticle.appendChild(header);
  
    const figure = document.createElement('figure');
    figure.classList.add('align-center');
  
    const projectImage = document.createElement('img');
    projectImage.classList.add('project_image')
    projectImage.src = project.image;
    projectImage.alt = project.name + "Banner";
  
    const projectDescription = document.createElement('p');
    projectDescription.classList.add('align-center');
    projectDescription.innerHTML = project.description;
  
    figure.appendChild(projectImage);
    figure.appendChild(projectDescription);
    projectArticle.appendChild(figure);
  
    const footer = document.createElement('footer');
  
    const projectURL = document.createElement('a');
    projectURL.classList.add('button', 'special');
    projectURL.href = project.buttonURL;
    projectURL.innerHTML = 'See Project';
  
    footer.appendChild(projectURL);
    projectArticle.appendChild(footer);
  
    // Append the project article to the container element
    const container = document.getElementById('project_container');
    container.appendChild(projectArticle);
  });
});

