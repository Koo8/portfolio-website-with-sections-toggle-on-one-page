
const btns = document.querySelectorAll('.control');
const all_sects = document.querySelectorAll('.section');
// why select .main-content and .controls ???


for (let i=0; i<btns.length; i++) {
    btns[i].addEventListener('click', (e)=> {
        // console.log(e.target);// show <div> instead of <i> as target, bz i pointer-event:none.
        const active_btn = document.querySelector('.active-btn');
        active_btn.classList.remove('active-btn');
        btns[i].classList.add('active-btn');

        // use btns[i] to control a section
        active_sec = document.getElementsByClassName('active');
        console.log(active_sec[0]);
        active_sec[0].classList.remove('active');

        const section_id = btns[i].dataset.id;
        console.log(section_id);
        target_sec = document.getElementsByClassName(section_id);
        console.log(target_sec[0]);
        target_sec[0].classList.add('active');
        
    })
}
// how to control sections, deactivate one and activate another by clicking
// .sec1 thru .sec5 display: none??? 
// how the above classes interact with 'active' class to show one section
// why header is not shown when .sec1 has showing transform?

const main_content = document.querySelector('.main-content');
main_content.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.target.dataset.id)
})
