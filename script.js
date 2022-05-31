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
pidgeot.addEventListener('mouseenter',function() {
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
/*let mouseX;
let mouseY;
const runnerBox = document.getElementById('runnerBox');
function mousemove(event){
    onsole.log("pageX: ",event.pageX, 
    "pageY: ", event.pageY, 
    "clientX: ", event.clientX, 
    "clientY:", event.clientY)
    mouseX = event.pageX;
    mouseY = event.pageY;
}

window.addEventListener('mousemove', mousemove);
const runner = document.getElementsByClassName('runner');

runnerBox.addEventListener('mouseenter', function(){
    let ruby = setInterval(() => {
        let prey = {x : runner[0].offsetLeft, y : runner[0].offsetTop};
        console.log(prey.x,prey.y,mouseX,mouseY);
        if (mouseX+50 >= prey.x){
            prey.x += 10;
            runner[0].style.transform = 'translateX('+(prey.x)-'px)';
            console.log(prey.x);
        }
        else if(mouseX < prey.x){
            prey.x+= 10 ;
            runner[0].style.transform = 'translateX('+(prey.x)+'px)';
        }
        else if(mouseY>prey.y){
            prey.y-= 10 ;
            runner[0].style.transform = 'translateY('+(prey.y)-'px)';
        }
        else if(mouseY<prey.y){
            prey.y+=10;
            runner[0].style.transform = 'translateY('+(prey.y)+'px)';
        }
    }, 30);
    let sapphire = runnerBox.addEventListener('mouseout', function(){
        clearInterval(ruby);
    })
})*/

function updater(player , e , chaser){
    console.log('updating')
    console.log(player.x , player.y);
    console.log(chaser.x , chaser.y);
    console.log(window.scrollY)
    chaser.div.style.transform = 'translateX('+chaser.x+'px) translateY('+(chaser.y)+'px)';
}
const chaser = document.getElementsByClassName('chaser')[0];

document.getElementById('chaserBox').addEventListener('mousemove', function (e){
    const chaserBoxX = document.getElementById('chaserBox').getBoundingClientRect().left;
    const chaserBoxY = document.getElementById('chaserBox').getBoundingClientRect().top;
    const player = {
        x: e.clientX,
        y: e.clientY
    }
    let chaserX = player.x - chaserBoxX - 25;
    let chaserY = player.y - chaserBoxY - 25;
    if (chaserX <= 0){
        chaserX = 0;
    }
    else if(chaserX >= 1088){
        chaserX = 1088;
    }
    else if (chaserY >= 298){
        chaserY = 298;
    }
    else if (chaserY <= 0){
        chaserY = 0;
    }
    const chaser = {
        x: chaserX,
        y: chaserY,
        div: document.getElementsByClassName('chaser')[0]
    }
    updater(player, e , chaser);
}) 
//runner

function updater(player , e , runner){
    console.log('updating')
    console.log(player.x , player.y);
    console.log(runner.x , runner.y);
    console.log(window.scrollY)
    runner.div.style.transform = 'translateX('+runner.x+'px) translateY('+(runner.y)+'px)';
}
const runner = document.getElementsByClassName('runner')[0];

document.getElementById('runnerBox').addEventListener('mousemove', function (e){
    const runnerBoxX = document.getElementById('runnerBox').getBoundingClientRect().left;
    const runnerBoxY = document.getElementById('runnerBox').getBoundingClientRect().top;
    const player = {
        x: e.clientX,
        y: e.clientY
    }
    let runnerX = player.x - runnerBoxX - 25;
    let runnerY = player.y - runnerBoxY - 25;
    if (runnerX <= 0){
        runnerX = 0;
    }
    else if(runnerX >= 1088){
        runnerX = 1088;
    }
    else if (runnerY >= 298){
        runnerY = 298;
    }
    else if (runnerY <= 0){
        runnerY = 0;
    }
    const runner = {
        x: runnerX,
        y: runnerY,
        div: document.getElementsByClassName('runner')[0]
    }
    updater(player, e , runner);
}) 
