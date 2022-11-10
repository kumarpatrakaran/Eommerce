const bar=document.getElementById("bar");
const close=document.getElementById("close");
const nav=docum.getElementById("navbar");

if (bar) {
    bar.addEventListener('click' ,() => {
        nav.classList.add('active')
        
    })
    
}

if (close) {
    close.addEventListener('click' ,() => {
        nav.classList.remove('active')
        
    })
}

// var removec=document.getElementsByClassName('k')
// console.log(removec)
// for (var i=0 ;i<removec.length;i++){
//     var button=removec[i]
//     button.addEventListener('click' ,function(event){
//         var buutonclick=event.target;
//         buutonclick.parentElement.parentElement.remove() 

//     })
// }