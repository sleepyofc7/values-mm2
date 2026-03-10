function observeItems(){

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show")
entry.target.classList.remove("hide")

}else{

entry.target.classList.remove("show")
entry.target.classList.add("hide")

}

})

},{ threshold:0.1 })

document.querySelectorAll(".item").forEach(el=>{
observer.observe(el)
})

}

/* inicia quando a pagina carregar */

window.addEventListener("load",()=>{

observeItems()

})