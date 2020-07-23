$(document).ready(function() {
    //************Creo richiamo alle funzioni per le frecce
    $('.prev').click(function() {
        prevImg();
    });

    $('.next').click(function() {
        nextImg();
    });

    //************FUNZIONI
    // *******Funzione next per freccia e cerchi
    function nextImg() {
        var activeImg = $('.images img.active'); //Imposto variabili
        var cerchio = $('.nav i.active');

        activeImg.removeClass('active'); //Rimuovo classe active
        cerchio.removeClass('active');

        if (activeImg.hasClass('last')) {  //Aggiungo active al successivo con if per l'ultimo
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImg.next().addClass('active');
            cerchio.next().addClass('active');
        }
    };
    // ********Funzione Prev per freccia e cerchi
    function prevImg() {
        var activeImg = $('.images img.active');  //Imposto variabili
        var cerchio = $('.nav i.active');

        activeImg.removeClass('active');  //Rimuovo classe active
        cerchio.removeClass('active');

        if (activeImg.hasClass('first')) {  //Aggiungo active al precedente con if per il primo
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImg.prev().addClass('active');
            cerchio.prev().addClass('active');
        }
    };
});
