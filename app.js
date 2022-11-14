const sections = document.querySelectorAll('.section');
// console.log(sections.length)
const secBtns = document.querySelectorAll('.controls');
// console.log(secBtns.length)
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function TogglePages() {
    for(let i=0; i<secBtn.length; i++){
        secBtn[i].addEventListener('click', ()=>{   //function(){} works too 
            let activeBtn = document.querySelectorAll('.active-btn');
            activeBtn[0].classList.remove('active-btn');
            secBtn[i].classList.add('active-btn');  // secBtn[i] can be changed to this when using function(){}, for fat arrow function, 'this' refers to window object
        })
    } 

    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        // console.log(id);
        if(id){
            //remove active class, then add active to this id element
            sections.forEach((sec) => {
                sec.classList.remove('active')
            })
            const sec = document.getElementById(id);
            sec.classList.add('active');

        }
        

    })

    // toggle theme -add light-theme to body
    const themtbtn = document.querySelector('.theme-btn');
    themtbtn.addEventListener('click', ()=>{
        // method 1: add new class to the body
        // document.body.classList.toggle('light-theme');
        
        // method 2 : add the 'light-theme' class to root element of the document
        document.documentElement.classList.toggle('light-theme');
    })
}

TogglePages();