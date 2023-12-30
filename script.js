const box = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBox);


function checkBox() {
    const bottom = window.innerHeight / 5 * 6;
    box.forEach((box) => {
        const boxtop = box.getBoundingClientRect().bottom;

        console.log(boxtop)

        if (boxtop<bottom) {
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}

checkBox()