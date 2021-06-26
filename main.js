//user reviews data

const reviews = [ 
    {
        id: 1,
        name: "Susan Smith",
        job: "WEB DEVELOPER",
        img: "https://res.cloudinary.com/dvsfslklc/image/upload/v1624717658/365-3650059_women-png-images_oiufgj.png",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "INTERN",
        img: "https://res.cloudinary.com/dvsfslklc/image/upload/v1624717658/419-4197514_afro-wig-png_s45hvh.png",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    // {
    //     id: 3,
    //     name: "Rebecca Mary",
    //     job: "Business Executive",
    //     img: "",
    //     text: " afcsafafsaSr iracha literally flexitarian irony, vape marfa unicorn. Glossier fatattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic",
    // },
];

//Variable Declaration os Selecet items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".left-button");
const nextBtn = document.querySelector(".right-button");


// set starting of items

let currentItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded', function(){
    //console.log("testing mic testing dom testing");
    // const item = reviews[currentItem];
    // img.src = item.img;   // called images from array, item variable decalred above line
    // author.textContent = item.name;
    // job.textContent = item.job;
    // info.textContent = item.text;
    showPerson();
});

function showPerson() {
    const item = reviews [currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// the actual meaning of function //
// function showPerson() {
//     const item = reviews [currentItem];
//     document.getElementById("person-img").src = item.img;
//     document.getElementById("author").textContent = item.name;
//     document.getElementById("job").textContent = item.job;
//     document.getElementById("info").textContent = item.text;
// }


//Button calls

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();

});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
})