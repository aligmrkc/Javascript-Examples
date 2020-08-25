const nextBtn= document.getElementById('nextBtn');
const prevBtn= document.getElementById('prevBtn');

const container= document.getElementById('images');

let counter=0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


function nextSlide(){
    if(counter ===4){
        counter=-1;
    } 
    counter++;
    container.style.backgroundImage ='url(/img/bcg-${counter}.jpg'

}

function prevSlide(){
    if(counter === 0){
        counter=5;
        
    }  
    counter--;
    container.style.backgroundImage ='url(/img/bcg-${counter}.jpg'
  
}





