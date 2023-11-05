// Función para cargar el tema almacenado en localStorage
function loadTheme() {
    const selectedTheme = localStorage.getItem('selectedTheme');

    if (selectedTheme === 'light') {
        applyLightTheme();
    } else if (selectedTheme === 'dark') {
        applyDarkTheme();
    } else if (selectedTheme === 'cupcake') {
        applyCupCakeTheme();
    }
}

// Funciones para aplicar los temas
function applyLightTheme() {
    localStorage.setItem('selectedTheme', 'light');
    bgLight();
}

function applyDarkTheme() {
    localStorage.setItem('selectedTheme', 'dark');
    bgDark();
}

function applyCupCakeTheme() {
    localStorage.setItem('selectedTheme', 'cupcake');
    bgCupCake();
}

// Event listeners para cambiar el tema
document.getElementById('light-theme-btn').addEventListener('click', applyLightTheme);
document.getElementById('dark-theme-btn').addEventListener('click', applyDarkTheme);
document.getElementById('cupcake-theme-btn').addEventListener('click', applyCupCakeTheme);

// Llama a la función para cargar el tema al cargar la página
loadTheme();

function bgLight() {
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
        circle.style.backgroundColor = "#F000B8";
        name.style.color = "#2B3440";
        name.style.fontSize = "1.5em";
        name.style.fontWeight = "bold";
        jobTitle.style.color = "#2B3440";
        jobTitle.style.fontSize = "1em";
        stars.forEach(star => star.style.color = "#2B3440");
        rightQuote.style.color = "#1DCDBC";
        leftQuote.style.color = "#1DCDBC";
        testimonialText.style.color = "#2B3440";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "#FFFFFF";
        card.style.border = "1px solid #F9F7FD";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = '#E5E6E6';
}

function bgDark() {
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
        circle.style.backgroundColor = "#6419E6";
        name.style.color = "#A6ADBA";
        name.style.fontSize = "1.5em";
        name.style.fontWeight = "bold";
        jobTitle.style.color = "#A6ADBA";
        jobTitle.style.fontSize = "1em";
        stars.forEach(star => star.style.color = "#1FB2A6");
        rightQuote.style.color = "#D926A9";
        leftQuote.style.color = "#D926A9";
        testimonialText.style.color = "#A6ADBA";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "#1D232A";
        card.style.border = "1px solid #F9F7FD";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = '#15191E';
}

function bgCupCake() {
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
        circle.style.backgroundColor = "#EF9FBC";
        name.style.color = "#2F2327";
        name.style.fontSize = "1.5em";
        name.style.fontWeight = "bold";
        jobTitle.style.color = "#2F2327";
        jobTitle.style.fontSize = "1em";
        stars.forEach(star => star.style.color = "#EEAF3A");
        rightQuote.style.color = "#65C3C8";
        leftQuote.style.color = "#65C3C8";
        testimonialText.style.color = "#2F2327";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "#FAF7F5";
        card.style.border = "1px solid #D0CAD3";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = '#E7E2DF';
}

function bgcSynthWave() {
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
        circle.style.backgroundColor = "#E779C1";
        name.style.color = "#F9F7FD";
        name.style.fontSize = "1.5em";
        name.style.fontWeight = "bold";
        jobTitle.style.color = "#F9F7FD";
        jobTitle.style.fontSize = "1em";
        stars.forEach(star => star.style.color = "#F3CC30");
        rightQuote.style.color = "#58C7F3";
        leftQuote.style.color = "#58C7F3";
        testimonialText.style.color = "#F9F7FD";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "#1A103C";
        card.style.border = "1px solid #F9F7FD";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = '#0E0920';
}

function bgRetro() {
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
        circle.style.backgroundColor = "#A4CBB4";
        name.style.color = "#2E282A";
        name.style.fontSize = "1.5em";
        name.style.fontWeight = "bold";
        jobTitle.style.color = "#2E282A";
        jobTitle.style.fontSize = "1em";
        stars.forEach(star => star.style.color = "#DC8850");
        rightQuote.style.color = "#2E282A";
        leftQuote.style.color = "#2E282A";
        testimonialText.style.color = "#423F00";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "#E4D8B4";
        card.style.border = "1px solid #2E282A";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = '#D4BF87';
}

function bgCyberPunk() {
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
        circle.style.backgroundColor = "#75D1F0";
        name.style.color = "#302D12";
        name.style.fontSize = "1.5em";
        name.style.fontWeight = "bold";
        jobTitle.style.color = "#302D12";
        jobTitle.style.fontSize = "1em";
        stars.forEach(star => star.style.color = "#FF7598");
        rightQuote.style.color = "#C07EEC";
        leftQuote.style.color = "#C07EEC";
        testimonialText.style.color = "#423F00";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "#FFEE00";
        card.style.border = "1px solid #423F00";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = '#B8AB00';
}

function bgValentine() {
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
        circle.style.backgroundColor = "#88DCDD";
        name.style.color = "#815160";
        name.style.fontSize = "1.5em";
        name.style.fontWeight = "bold";
        jobTitle.style.color = "#815160";
        jobTitle.style.fontSize = "1em";
        stars.forEach(star => star.style.color = "#E96D7B");
        rightQuote.style.color = "#A992F7";
        leftQuote.style.color = "#A992F7";
        testimonialText.style.color = "#815160";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "#F0D6E8";
        card.style.border = "1px solid #815160";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = '#DDA2CB';
}

function bgForest() {
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
        circle.style.backgroundColor = "#1EB854";
        name.style.color = "#132522";
        name.style.fontSize = "1.5em";
        name.style.fontWeight = "bold";
        jobTitle.style.color = "#18342B";
        jobTitle.style.fontSize = "1em";
        stars.forEach(star => star.style.color = "#18342B");
        rightQuote.style.color = "#18342B";
        leftQuote.style.color = "#18342B";
        testimonialText.style.color = "#132522";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "#1DB9AC";
        card.style.border = "1px solid #CBD2CF";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = '#171212';
}

function bgAqua() {
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
        circle.style.backgroundColor = "#2B4D8C";
        name.style.color = "#DCE7F4";
        name.style.fontSize = "1.5em";
        name.style.fontWeight = "bold";
        jobTitle.style.color = "#DCE7F4";
        jobTitle.style.fontSize = "1em";
        stars.forEach(star => star.style.color = "#FFE999");
        rightQuote.style.color = "#09E9F1";
        leftQuote.style.color = "#09E9F1";
        testimonialText.style.color = "#DCE7F4";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "#345CA8";
        card.style.border = "1px solid #DCE7F4";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = '#233E71';
}

function bgCoffee() {
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
        circle.style.backgroundColor = "#11596F";
        name.style.color = "#D1DCE0";
        name.style.fontSize = "1.5em";
        name.style.fontWeight = "bold";
        jobTitle.style.color = "#746D63";
        jobTitle.style.fontSize = "1em";
        stars.forEach(star => star.style.color = "#DC944C");
        rightQuote.style.color = "#263F40";
        leftQuote.style.color = "#263F40";
        testimonialText.style.color = "#D1DCE0";

        // Cambia el fondo de la tarjeta
        card.style.backgroundColor = "#211720";
        card.style.border = "1px solid #746D63";
    });

    // También puedes cambiar los estilos del contenedor de tarjetas
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.style.backgroundColor = '#0C080C';
}

const testimonios = [
    "This product has truly changed my life. I highly recommend it to anyone looking for a solution to their needs. The quality and performance are outstanding, and I couldn't be more satisfied with the results.",
    "I've had the opportunity to experience many services, but this one stands out for its exceptional quality. From customer support to overall performance, I can't praise it enough.",
    "When I discovered this product, I was genuinely impressed. I never thought I'd find such an incredible solution. It's worth every penny, and I can't imagine my life without it now.",
    "The customer support team is not only responsive but also incredibly helpful. They resolved my issue quickly and efficiently, which made my experience even better.",
    "After my first purchase, I knew I would definitely buy again. This product consistently delivers and has become an essential part of my life.",
    "Outstanding service! From the moment I started using this service, I've been thrilled with the results. It's a game-changer that I highly recommend to everyone.",
    "This product exceeded my expectations in every way. The quality and reliability are top-notch. It has made a significant difference in my life, and I couldn't be happier.",
    "I'm genuinely impressed with this service. It has a unique edge that sets it apart from the rest. I'm a delighted customer who will continue to enjoy the benefits it offers.",
    "The support team is fantastic and always goes above and beyond. They are a big reason for my satisfaction with this product, and I appreciate their dedication.",
    "I can't express enough how this product has transformed my life. The results speak for themselves, and I'm grateful for having found it. I highly recommend it to others.",
    "The level of service offered is nothing short of exceptional. This product is a wise investment, and I'm extremely satisfied with the outstanding results it has provided.",
    "I've had a flawless experience with this product. It has exceeded my expectations in terms of quality and performance. I'm a very happy customer who will keep using it.",
    "I'm extremely satisfied with the quality and performance of this product. It has proven to be a must-have for anyone looking for a reliable solution.",
    "I have encountered many products, but this one is truly outstanding. It has made a significant impact on my life, and I can't speak highly enough about its excellence.",
    "This product is worth every penny spent. The customer service is second to none, and the results are fantastic. I'm a delighted customer and would choose it again.",
    "I've been using this product for a while, and I can confidently say that you won't regret choosing it. It's a fantastic solution that consistently delivers impressive results.",
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

    const usedTestimonios = []; // Array para rastrear los testimonios utilizados

    for (let i = 0; i < 3; i++) {
        // Realizar una solicitud a la API para obtener un usuario aleatorio
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];

                // Seleccionar un testimonio aleatorio que no se haya utilizado
                let randomTestimonial;
                do {
                    randomTestimonial = testimonios[Math.floor(Math.random() * testimonios.length)];
                } while (usedTestimonios.includes(randomTestimonial));

                usedTestimonios.push(randomTestimonial); // Marcar el testimonio como utilizado

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
                        <p id="testimonial-text-1" class="testimonial-text">${randomTestimonial}</p>
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