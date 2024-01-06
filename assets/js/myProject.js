function showImageValue() {
  let selectedFile = document.getElementById("image").files[0];
  // console.log(selectedFile);
  // Temukan elemen span dengan id "imageValue"
  let imageValueSpan = document.getElementById("imageValue");

  // Atur nilai text span sesuai dengan nama file
  imageValueSpan.innerHTML = selectedFile ? selectedFile.name : "";
}

const myProjects = [
  // {
  //   title: "App Management Asset",
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam et laborum rem deserunt distinctio neque tempore qui impedit veritatis aliquam suscipit Lorem ipsum dolor sit amet consectetur....",
  //   technologies: {
  //     nodejs: `<i class="fa-brands fa-node-js"></i>`,
  //     laravel: `<i class="fa-brands fa-laravel"></i>`,
  //     python: `<i class="fa-brands fa-python"></i>`,
  //     reactjs: `<i class="fa-brands fa-react"></i>`
  //   },
  //   image: 'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  // },
];

function addProject(e) {
  e.preventDefault();

  const title = document.getElementById("projectName").value;
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);
  const description = document.getElementById("description").value;
  const nodejs = document.getElementById("nodeJs").checked;
  const laravel = document.getElementById("laravel").checked;
  const python = document.getElementById("python").checked;
  const reactjs = document.getElementById("reactJs").checked;
  let image = document.getElementById("image").files;
  image = URL.createObjectURL(image[0]);

  // localStorage.setItem("myProject", JSON.stringify({
  //     title,
  //     startDate,
  //     endDate,
  //     description,
  //     technologies : {
  //         nodejs,
  //         laravel,
  //         python,
  //         reactjs,
  //     },
  //     image
  // }))

  const myProject = {
    title,
    startDate,
    endDate,
    description,
    technologies: {
      nodejs,
      laravel,
      python,
      reactjs,
    },
    image,
  };
  // console.log(myProject)

  myProjects.unshift(myProject);
  renderMyProject();
}

function renderMyProject() {
  let contents = "";

  for (let i = 0; i < myProjects.length; i++) {
    let renderTechIcons = "";

    if (myProjects[i].technologies.nodejs) {
      renderTechIcons += `<i class="fa-brands fa-node-js"></i>`;
    }

    if (myProjects[i].technologies.laravel) {
      renderTechIcons += `<i class="fa-brands fa-laravel"></i>`;
    }
    if (myProjects[i].technologies.python) {
      renderTechIcons += `<i class="fa-brands fa-python"></i>`;
    }
    if (myProjects[i].technologies.reactjs) {
      renderTechIcons += `<i class="fa-brands fa-react"></i>`;
    }

    contents += `
                <a href="myProject-detail.html" class="my-project-menu">
                    <div class="card my-project-item">
                        <div class="left-card-project">
                            <img src="${myProjects[i].image}">
                        </div>
                        <div class="right-card-project">
                            <h1>
                                ${myProjects[i].title}
                            </h1>
                            <h6>Duration : ${durationMonth(
                              myProjects[i].startDate,
                              myProjects[i].endDate
                            )} bulan</h6>
                            <p>${myProjects[i].description.substring(
                              0,
                              100
                            )}...</p>
                            <div class="icon-brand">
                                ${renderTechIcons}
                            </div>
                            <div class="btn-action-container">
                                <button class="btn btn-action" style="flex: 1;">Edit</button>
                                <button class="btn btn-action" style="flex: 1">Delete</button>
                            </div>
                        </div>
                    </div> 
                </a>
        `;
  }

  document.getElementById("myProjectContainer").innerHTML = contents;
}

function formatDate(dates) {
  //date formater d/mm/year
  let minutes = dates.getMinutes();
  let hours = dates.getHours();
  const date = dates.getDate();
  const month = dates.getMonth();
  const year = dates.getFullYear();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${date} ${months[month]} ${year}`;
}

function durationMonth(startDate, endDate) {
  return (
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())
  );
}

renderMyProject();
