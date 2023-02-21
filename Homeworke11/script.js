const data = JSON.parse(dataProducts);
const top_content = document.querySelector('.top_content');


data.forEach(element => {

    const content = document.createElement("div");
    const name = document.createElement('h6');
    const img = document.createElement('img');
    const desc = document.createElement('p');
    const price = document.createElement('p');

    name.textContent = element.name;
    img.src = element.img;
    desc.textContent = element.descp;
    price.textContent = element.price;

    top_content.appendChild(content);
    content.appendChild(img);
    content.appendChild(name);
    content.appendChild(desc);
    content.appendChild(price);

});

