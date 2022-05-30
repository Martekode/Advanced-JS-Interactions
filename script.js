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
    image.src = `./friends.jpg`;
    image.alt = "these are friends"
    image.classList.add('picture');
    image.addEventListener('click',function(){
        console.log(`jajaze ${i}`);
        this.style.position = "absolute";
        this.style.transform = "scale(1.5)";
        this.style.zIndex = "100";
        this.addEventListener('mouseout',function(){
            this.style.position = "relative";
            this.style.transform = "scale(1)";
            this.style.zIndex = "unset";
        })
    })
    imgContainer[i].appendChild(image);
}
console.log(imgContainer)
