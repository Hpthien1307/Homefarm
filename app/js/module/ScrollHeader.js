export default function ScrollHeader(){
    var prevScrollpos = window.scrollY;

    var headerDiv = document.querySelector(".hd");
    var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
    
    window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        
        if (prevScrollpos > currentScrollPos  || currentScrollPos < headerBottom){  
            // headerDiv.style.top = "0";
            headerDiv.classList.remove('hide-hd');
        }
        else{
            // headerDiv.style.top = "-7.2rem";
            headerDiv.classList.add('hide-hd');
        } 
    
        prevScrollpos = currentScrollPos;
    }
}