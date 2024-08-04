let imgcontainer = document.getElementById("img");
/*
 <div class="card" >
    <img class="size" src="f1.avif" alt="food">
    <p class="imgtext">Food</p>
</div>
*/
for(let i=0;i<15;i++){
    let card = document.createElement("div");
    card.classList.add("card");
    let photo = document.createElement("img");
    photo.classList.add("size");
    photo.setAttribute("src","f1.avif");
    let paragraph = document.createElement("p");
    paragraph.classList.add("imgtext");
    paragraph.innerText="Food";
    card.append(photo,paragraph);
    imgcontainer.appendChild(card);
}