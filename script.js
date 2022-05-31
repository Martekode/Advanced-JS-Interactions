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
carouselContainer.style.backgroundImage = `url("${images[0]}")`;

carouselContainer.style.backgroundAttachment= "fixed";
carouselContainer.style.backgroundPosition = "center";
carouselContainer.style.backgroundRepeat = "no-repeat";
carouselContainer.style.backgroundSize= "cover";
let isOldImg = false;
let carouselLoop = setInterval(() => { 
    if(!isOldImg){
        carouselContainer.style.backgroundImage = `url("${images[1]}")`;
        isOldImg = true;
    }else{
        carouselContainer.style.backgroundImage = `url("${images[0]}")`;
        isOldImg = false;
    }
}, 5000);

const pidgeot = document.getElementById('pidgeot');
pidgeot.addEventListener('mouseover',function() {
    const image = document.createElement('img');
    image.src = "./pidgeot.png";
    image.id = "pidgeotimg"
    image.style.position = "absolute";
    image.style.left = "50%";
    this.appendChild(image);

})
pidgeot.addEventListener('mouseout',function() {
    
    this.removeChild(document.getElementById('pidgeotimg'));

})
const magikarp = document.getElementById('magikarp');
magikarp.addEventListener('mouseover',function() {
    const image = document.createElement('img');
    image.src = "./magikarp.png";
    image.id = "magikarpimg"
    image.style.position = "absolute";
    image.style.left = "50%";
    this.appendChild(image);

})
magikarp.addEventListener('mouseout',function() {
    
    this.removeChild(document.getElementById('magikarpimg'));

})
const slowpoke = document.getElementById('slowpoke');
slowpoke.addEventListener('mouseover',function() {
    const image = document.createElement('img');
    image.src = "./slowpoke.png";
    image.id = "slowpokeimg"
    image.style.position = "absolute";
    image.style.left = "50%";
    this.appendChild(image);

})
slowpoke.addEventListener('mouseout',function() {
    
    this.removeChild(document.getElementById('slowpokeimg'));

})
const farfetched = document.getElementById('farfetched');
farfetched.addEventListener('mouseover',function() {
    const image = document.createElement('img');
    image.src = "./farfetched.png";
    image.id = "farfetchedimg"
    image.style.position = "absolute";
    image.style.left = "50%";
    this.appendChild(image);

})
farfetched.addEventListener('mouseout',function() {
    
    this.removeChild(document.getElementById('farfetchedimg'));

})