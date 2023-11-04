function bgcoffee() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        const circle = card.querySelector(".bg-wuao");
        const name = card.querySelector(".card-name");
        const jobTitle = card.querySelector(".job-title");
        const stars = card.querySelectorAll(".fa-star");
        const rightQuote = card.querySelector(".fa-quote-right");
        const leftQuote = card.querySelector(".fa-quote-left");
        const testimonialText = card.querySelector(".testimonial-text");
        
        // Cambia los estilos de cada elemento dentro de la tarjeta
        circle.style.backgroundColor = "red";
        name.style.color = "blue";
        jobTitle.style.fontWeight = "bold";
        stars.forEach(star => star.style.color = "gold");
        rightQuote.style.color = "green";
        leftQuote.style.color = "green";
        testimonialText.style.fontSize = "18px";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "lightgray";
        card.style.border = "1px solid black";
        card.style.padding = "10px";
        card.style.margin = "10px";
        card.style.boxShadow = "3px 3px 5px gray";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = 'lightgray';
    testimonialContainer.style.padding = '20px';
}

const testimonios = [
    "Este producto cambió mi vida. ¡Lo recomiendo altamente!",
    "La calidad de este servicio es excepcional. No puedo estar más satisfecho.",
    "Nunca pensé que encontraría un producto tan increíble. ¡Estoy impresionado!",
    "El soporte al cliente es excelente. Resolvieron mi problema rápidamente.",
    "Definitivamente compraré de nuevo. Este producto vale cada centavo."
];

// Array de cargos
const jobTitles = [
    "Web Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Backend Developer",
    "Office Assistant",
    "Sales Manager",
    "Software Engineer",
    "Marketing Manager",
    "Executive Assistant",
    "Product Manager",
    "Graphic Designer",
    "Data Analyst",
    "Customer Support Specialist",
    "HR Manager",
    "Financial Analyst",
    "Content Writer",
    "Digital Marketing Specialist",
    "Network Administrator",
    "Accountant",
    "Project Manager",
    "Quality Assurance Tester",
    "UX Researcher",
    "Full Stack Developer",
    "DevOps Engineer",
    "Database Administrator",
    "System Administrator",
    "IT Consultant",
    "Network Engineer",
    "Cybersecurity Analyst",
    "Business Analyst",
    "Social Media Manager",
    "Technical Writer",
    "Sales Representative"
];

document.getElementById('generate-testimonial-btn').addEventListener('click', () => {
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.innerHTML = ''; // Limpiamos las tarjetas existentes

    for (let i = 0; i < 3; i++) {
        // Realizar una solicitud a la API para obtener un usuario aleatorio
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];

                // Seleccionar un cargo aleatorio del array
                const randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];

                // Crear una tarjeta de testimonio con la estructura HTML existente
                const card = document.createElement('div');
                card.className = 'testimonial-card';
                card.innerHTML = `
                    <div class="flex justify-center gap">
                        <div>
                            <div class="bg-wuao flex">
                                <img src="${user.picture.large}" alt="User" id="user-image-1">
                            </div>
                        </div>
                        <div class="flex col justify-center">
                            <h2 class="card-name">${user.name.first} ${user.name.last}</h2>
                            <p class="job-title">${randomJobTitle}</p>
                            <div class="stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="left-div">
                        <div>
                            <i class="gray fa-regular fa-quote-left font-big"></i> 
                        </div>
                        <p id="testimonial-text-1" class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div>
                            <i class="gray fa-regular fa-quote-right font-big"></i> 
                        </div>
                    </div>
                `;

                testimonialContainer.appendChild(card);
            });
    }
});

document.getElementById('download-all-btn').addEventListener('click', () => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const promises = [];

    testimonialCards.forEach((card, index) => {
        promises.push(
            html2canvas(card, {
                useCORS: true,
            }).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = `testimonial_${index + 1}.png`;
                link.click();
            })
        );
    });

    Promise.all(promises).then(() => {
        console.log("Todas las tarjetas han sido descargadas.");
    });
});