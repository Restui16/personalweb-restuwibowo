const myProjects = []

function addProject(e) {
    e.preventDefault()

    const title = document.getElementById("projectName").value
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    const description = document.getElementById("description").value
    const nodejs = document.getElementById("nodeJs").checked;
    const laravel = document.getElementById("laravel").checked;
    const python = document.getElementById("python").checked;
    const reactjs = document.getElementById("reactJs").checked;
    let image = document.getElementById("image").files
    image = URL.createObjectURL(image[0])

   


    localStorage.setItem("myProject", JSON.stringify({
        title,
        startDate,
        endDate,
        description,
        technologies : {
            nodejs,
            laravel,
            python,
            reactjs,
        },
        image
    }))

    const myProject = {
        title,
        startDate,
        endDate,
        description,
        technologies : {
            nodejs,
            laravel,
            python,
            reactjs,
        },
        image
    }
    console.log(myProject)

    myProjects.unshift(myProject)
    rendermyProject()
}

function rendermyProject() {
    let contents = ''

    for(let i=0; i < myProjects.length; i++) {
        let renderTechIcons = ''

        if (myProjects[i].technologies.nodejs) {
            renderTechIcons += `<i class="fa-brands fa-node-js"></i>`
        }

        if (myProjects[i].technologies.laravel) {
            renderTechIcons += `<i class="fa-brands fa-laravel"></i>`
        }
        if (myProjects[i].technologies.python) {
            renderTechIcons += `<i class="fa-brands fa-python"></i>`
        }
        if (myProjects[i].technologies.reactjs) {
            renderTechIcons += `<i class="fa-brands fa-react"></i>`
        }
        
        contents += `
            <a href="myProject-detail.html" onclick="" style="text-decoration: none; color: black;">
                    <div class="card" style="cursor: pointer; max-width: 300px; flex: auto; height: 470px; overflow: hidden; padding: 20px;">
                    <img src="${myProjects[i].image}" style="width: 100%; height: 45%; border-radius: 10px;">
                    <h1 style="text-transform: capitalize;">${myProjects[i].title}</h1>
                    <h6 style="font-weight: 300;">durasi : 3 bulan</h6>
                    <p style="text-align: justify;">${myProjects[i].description.substring(0, 120)}...</p>
                    <div class="icon-brand" style="display: flex; gap: 20px; margin-top: 20px; font-size: 30px;">
                        ${renderTechIcons}
                    </div>
                    <div class="" style="display: flex; justify-content: space-between; gap: 10px; margin-top: 20px;">
                        <button class="btn btn-action" style="flex: 1;">Edit</button>
                        <button class="btn btn-action" style="flex: 1">Delete</button>
                    </div>
                </div> 
            </a
        `

    }

    document.getElementById("contents").innerHTML = contents
}

function formatDate(dates){ //date formater d/mm/year
    let minutes = dates.getMinutes()
    let hours = dates.getHours()
    const date = dates.getDate()
    const month = dates.getMonth();
    const year = dates.getFullYear();

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return `${date} ${months[month]} ${year}`;
}

