let textContain = document.querySelector(".textContain");
let enterkey = document.querySelector(".enter");
let spaceKey = document.querySelector(".space");
let dropkey = document.querySelector(".drop");
let capslock= document.querySelector('.capslock');
let allKeys = document.querySelectorAll('.key');
let isCaps = false;

enterkey.addEventListener('click',function(){
    let content = textContain.innerText;
    let newContent = content+"\n";
    textContain.innerText = newContent;
})

spaceKey.addEventListener("click",function(){
    let content = textContain.innerText;
    let newContent = content+ '\u00A0';
    textContain.innerText = newContent;
})

dropkey.addEventListener('click',function(){
    let content = textContain.innerText;
    let newContent = content.slice(0,content.length-1);
    textContain.innerText = newContent;
})

capslock.addEventListener('click',function(){
    if(isCaps){
        capslock.classList.remove('active');
            for(let key of allKeys){
                if(key.classList.length>1){

                }
                else{
                    key.innerText = key.innerText.toLowerCase();
                }
            }    
    }
    else{
        capslock.classList.add('active');
        for(let key of allKeys){
            if(key.classList.length>1){
            }
            else{
                key.innerText = key.innerText.toUpperCase();
            }
        }
    }
    isCaps = !isCaps;
})

for(let key of allKeys){
    if(key.classList.length>1){

    }
    else{
        key.addEventListener('click',function(){
            textContain.innerText += key.innerText;
        })
    }
}