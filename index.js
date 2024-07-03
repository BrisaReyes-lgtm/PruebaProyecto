const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Era obvio que tu respuesta iba ser si, sino anda despidiendote de tus huevos. Yo tambien te quiero mi amor y mucho. Quiero que sepas que para mi sos una persona hermosa en fisico y alma y que me hace muy feliz que un hombre como vos me acompañe en mis dias, segui con la persona tan linda que sos y gracias por lo que me brindas')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})