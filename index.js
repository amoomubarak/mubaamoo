function moveCar() {
    const carBody = document.querySelector('.car-body');
    carBody.style.transform = 'translateX(500px)';
   }
   
   setTimeout(moveCar, 1000);