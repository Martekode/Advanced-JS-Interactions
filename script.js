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
        //imgContainer[i].innerHTML = `<p>this is picture nr:${i} and they are friends.</p>`;
        const p = document.createElement('p');
        p.style.zIndex = "101";
        p.innerText = `this is picture nr:${i} and they are friends.`;
        p.style.color = "black";
        p.style.position = "absolute";
        //const paragrave = imgContainer[i].querySelector('p');
        //paragrave.style.zIndex = "101";
        //paragrave.style.color = "red";
        this.style.position = "absolute";
        this.style.transform = "scale(1.5)";
        this.style.zIndex = "100";
        //console.log(image[1])
        imgContainer[i].appendChild(p);
        this.addEventListener('mouseout',function(){
            this.style.position = "relative";
            this.style.transform = "scale(1)";
            this.style.zIndex = "unset";
            if(imgContainer[i].querySelector('p')){
                imgContainer[i].removeChild(p);
            }
            
        })
    })
    imgContainer[i].appendChild(image);
}
console.log(imgContainer)
