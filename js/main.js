const staff = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        img: "./img/wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        img: "./img/angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        img: "./img/walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Founder & CEO",
        img: "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        img: "./img/scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        img: "./img/barbara-ramos-graphic-designer.jpg"
    }
]



for(i = 0; i < staff.length; i++) {
    console.log(`Nome: ${staff[i].nome}, Ruolo: ${staff[i].ruolo}, srcImg: ${staff[i].img}`);
  
    // document.getElementById("container").innerHTML += `<p>Nome: ${staff[i].nome}, Ruolo: ${staff[i].ruolo}, srcImg: ${staff[i].img}</p>`;

    // genero le card
    document.getElementById("container").innerHTML += `<div class="card"></div>`;

}

// dichiaro le cards globali
let cards = document.querySelectorAll(".card");

for (i = 0; i < cards.length; i++) {
    // pusho immagini
    let immagine = document.createElement("img");
    immagine.src = staff[i].img;
    cards[i].appendChild(immagine);

    // pusho nomi e ruoli
    cards[i].innerHTML += `<h3>${staff[i].nome}</h3>`
    cards[i].innerHTML += `<p>${staff[i].ruolo}</p>`
}

