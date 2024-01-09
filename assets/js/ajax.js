function getTestiDummy(){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open("GET", "https://api.npoint.io/45b8dc3c5a869cf0c3d6", true)
        xhr.onload = () => {
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText)
                resolve(response)
            } else {
                reject("Something went wrong");
            }
        }

        xhr.onerror = () => {
            reject("Connection Error!");
        }

        xhr.send()
    })
}

async function allTestimonial(){
    const testimonials = await getTestiDummy()
    let testimonialHTML = ""

    testimonials.forEach((value) => {
        testimonialHTML += `
        <div class="card" style="width: 25%; padding: 18px; display: flex; flex-direction: column; justify-content: space-between; gap: 10px;" >
            <img src="${value.image}" style="width: 100%; height: 250px; object-fit: cover; " alt="" >
            <p>${value.message}</p>
            <q style="align-self: flex-end;">${value.name}</q>
        </div>`
    })

    document.getElementById("testimonial-container").innerHTML = testimonialHTML
}

async function filterTestimonial(rating) {
    const testimonials = await getTestiDummy()


    const filteredTestimonial = testimonials.filter((value) => value.rating === rating)
    
    let filteredTestimonialHtml = "";
    
    if(!filteredTestimonial.length){
        return document.getElementById("testimonial-container").innerHTML = "<h1> Data Not Found!</h1>"
    } 

    filteredTestimonial.forEach((value) => {
        filteredTestimonialHtml += `
        <div class="card" style="width: 25%; padding: 18px; display: flex; flex-direction: column; justify-content: space-between; gap: 10px;" >
            <img src="${value.image}" style="width: 100%; height: 250px; object-fit: cover; " alt="" >
            <p>${value.message}</p>
            <q style="align-self: flex-end;">${value.name}</q>
        </div>`
    })

    document.getElementById("testimonial-container").innerHTML = filteredTestimonialHtml
}


allTestimonial()