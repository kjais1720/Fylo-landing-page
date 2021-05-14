const boxes = document.querySelectorAll(".box")
const navToggle = document.querySelector(".nav-toggle")
const cards = document.querySelectorAll(".card")

navToggle.addEventListener("click", () => document.querySelector('nav').classList.toggle("active"))

window.addEventListener("scroll",checkBoxes)

function checkBoxes(){
    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        if (boxTop < window.innerHeight/5*4){
            box.classList.add("visible")
        } else {
            box.classList.remove("visible")
        }

        if(boxBottom < window.innerHeight/5) {
            box.classList.remove("visible")
        }
    })
    
}

// const boxes = $(".box")

// const navToggle = $(".nav-toggle")

// const cards = $(".card")

// navToggle.click(() => $("nav").toggleClass("active"))

// window.scroll(checkBoxes)

// function checkBoxes(){
//     boxes.forEach ((box)=>{
//         const boxTop = box.getBoundingClientRect().top
//         const boxBottom = box.getBoundingClientRect().bottom

//         if( boxTop < window.innerHeight/5*4){
//             box.addClass("visible")
//         } else {
//             box.removeClass("visible")
//         }

//         if(boxBottom < window.innerHeight/6){
//             box.removeClass('visible')
//         }


//     })
// }

