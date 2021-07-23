const card = (item) => { 
    return `
    <div class="card" style="width: 18rem;">
        <img src="${item.src}" class="card-img-top" alt="${item.alt}">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.text}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${item.listOne}</li>
            <li class="list-group-item">${item.listTwo}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">${item.linkOne}</a>
            <a href="#" class="card-link">${item.linkTwo}</a>
        </div>
    </div>
    `;
}

cardArr = [
    {
        title: "Colaciones",
        text: "Sed ut perspiciatis unde omnis iste natus error sit",
        listOne: "Morbi leo risus",
        listTwo: "Porta ac consectetur ac",
        linkOne: "Ver más",
        linkTwo: "Comprar",
        src: "/assets/img/colaciones.jpg",
        alt: ""
    },
    {
        title: "Desayunos",
        text: "Iste natus error sit voluptatem accusantium",
        listOne: "Morbi leo risus",
        listTwo: "Porta ac consectetur ac",
        linkOne: "Ver más",
        linkTwo: "Comprar",
        src: "/assets/img/desayunos.jpg",
        alt: ""
    },
    {
        title: "Bebidas",
        text: "Doloremque laudantium, totam rem aperiam, eaque",
        listOne: "Morbi leo risus",
        listTwo: "Porta ac consectetur ac",
        linkOne: "Ver más",
        linkTwo: "Comprar",
        src: "/assets/img/bebidas.jpg",
        alt: ""
    },
    {
        title: "Verduras",
        text: "Ipsa quae ab illo inventore veritatis et quasi architecto",
        listOne: "Morbi leo risus",
        listTwo: "Porta ac consectetur ac",
        linkOne: "Ver más",
        linkTwo: "Comprar",
        src: "/assets/img/verduras.jpg",
        alt: ""
    },
    {
        title: "Dulces",
        text: "Some quick example text to build on the card title and",
        listOne: "Morbi leo risus",
        listTwo: "Porta ac consectetur ac",
        linkOne: "Ver más",
        linkTwo: "Comprar",
        src: "/assets/img/dulces.jpg",
        alt: ""
    },
    {
        title: "Empanadas",
        text: "Some quick example text to build on the card title and",
        listOne: "Morbi leo risus",
        listTwo: "Porta ac consectetur ac",
        linkOne: "Ver más",
        linkTwo: "Comprar",
        src: "/assets/img/empanadas.jpg",
        alt: ""
    }
]

for (let i = 0; i < cardArr.length; i++) {
    const element = cardArr[i];
    document.getElementById("content-container")
        .insertAdjacentHTML("beforeend", card(element));
}