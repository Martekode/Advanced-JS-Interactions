Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
document.getElementById('darkModeBtn').addEventListener('click',function(){
    if (!document.body.classList[1]){
        document.body.classList.add('darkMode');
    }else{
        document.body.classList.remove('darkMode');
    }
})
const imgContainer = document.getElementsByClassName('image');
console.log(imgContainer)
for (let i = 0; i<imgContainer.length;i++){
    const image = document.createElement('img');
    let clicked = false;
    image.src = `./friends.jpg`;
    image.alt = "these are friends"
    image.classList.add('picture');
    image.addEventListener('click',function(){
        console.log(`jajaze ${i}`);
        //imgContainer[i].innerHTML = `<p>this is picture nr:${i} and they are friends.</p>`;
        const p = document.createElement('p');
        p.style.zIndex = "101";
        p.innerText = `this is picture nr:${i} and they are friends.`;
        p.style.color = "black";
        p.style.position = "absolute";
        if (p.style.display == "none"){
            p.style.display = "block";
        }
        
        //const paragrave = imgContainer[i].querySelector('p');
        //paragrave.style.zIndex = "101";
        //paragrave.style.color = "red";
        this.style.position = "absolute";
        this.style.transform = "scale(1.5)";
        this.style.zIndex = "100";
        //console.log(image[1])
        if (!clicked){
            imgContainer[i].appendChild(p);
            this.addEventListener('mouseout',function(){
                //console.log(p)
                this.style.position = "relative";
                this.style.transform = "scale(1)";
                this.style.zIndex = "unset";
                if(p.style.display == "block"){
                    p.style.display= "none";
                }
                
            })
        
        }
        clicked = true;
        
    })
    imgContainer[i].appendChild(image);
}
const carouselContainer = document.getElementById('carouselContainer');
const images = ["./banner1.png","./banner2.jpg"];
const image = document.createElement('img');
image.src = images[0];
image.style.height = "inherit";
image.style.width = "inherit";
let isOldImg = false;
if (!carouselContainer.querySelector('img')){
    carouselContainer.appendChild(image);
}
let carouselLoop = setInterval(() => { 
    //console.log(image.src);
    //console.log(images[1]);
    if (!isOldImg){
        image.src = images[1];
        isOldImg = true;
    }else{
        image.src = images[0];
        isOldImg = false;
    }
    
    //console.log(image.src);
}, 5000);
