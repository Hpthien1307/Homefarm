export default function scrollTitle(){
    const _confObserver = {
        rootMargin: '-50px -50px -50px -50px',
        threshold: [0, 0.25, 0.75, 1]
    };
    
    const addActives = document.querySelectorAll('.add-active-js');
    
    const observerAddActives = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('active')
            } else {
                entry.target.classList.remove('active')
            }
        });
    }, _confObserver);
    
    addActives.forEach(ele => {
        observerAddActives.observe(ele);
    });
}