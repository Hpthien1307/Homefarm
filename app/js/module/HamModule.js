export default function HamModule() {
    const hamBlock = document.querySelector('.hamBlock');
    const over = document.querySelector('.overlay');
    const body = document.querySelector('body');
    const menuMb = document.querySelector('.menuMb');

    if (hamBlock) {
        const hamTarget = document.querySelector('.hamTarget');
        
        hamTarget.addEventListener('click', ()=> {
            hamTarget.classList.toggle('active');
            menuMb.classList.toggle('active');
            over.classList.toggle('active');
            body.classList.toggle('no-scroll');
        })

        over.addEventListener('click', ()=> {
            hamTarget.classList.remove('active');
            menuMb.classList.remove('active');
            over.classList.remove('active');
            body.classList.remove('no-scroll');
        })         
    }
}