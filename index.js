class Beers {
    constructor(price, name, [rating], image){
        this.price = price;
        this.name = name;
        [this.rating] = [rating];
        this.image = image;
    }
    generateBeersInfo(){
        const block = document.createElement("div");
        block.classList.add("blockIteam");
        block.innerHTML += 
        `
        <h3>${this.price}</h3>
        <h3>${this.name}</h3>
        <h3>${[this.rating]}</h3>
        <img scr = ${this.image}>
        `;
        document.body.append(block);
    }
}
const getData = async(url) => {
    const result = await fetch(url);
    if(!result.ok){
        console.log("Something went wrong");
    }
    return result.json();
}
getData("https://api.sampleapis.com/beers/ale")
.then(data => {
    data.forEach(({price, name, rating, image}) => {
        new Beers (price, name, [rating], image).generateBeersInfo;
    })
}) 

// const baseURL = "https://api.sampleapis.com/beers/ale";

// fetch(baseURL)

//   .then(resp => resp.json())

//   .then(data => console.log(data));