$(document).ready(function(){
$(window).scroll(function(){
    var positiontop = $(document).scrollTop();
    console.log(positiontop);
    if((positiontop > 300) && (positiontop < 400)) {
        $('.AboutUsImg').addClass('animate__animated animate__flipInY');
        $('.AboutCompanyH3').addClass('animate__animated animate__fadeInRight');
        $('.AboutCompanyP').addClass('animate__animated animate__fadeInRight');
    }
    else if((positiontop > 100) && (positiontop < 200)) {
        $('.SlideInOne').addClass('animate__animated animate__slideInLeft');
        $('.SlideInTwo').addClass('animate__animated animate__slideInRight');
    }
    else if((positiontop > 400) && (positiontop < 450)) {
        $('.SlideInThree').addClass('animate__animated animate__slideInLeft');
        $('.SlideInFour').addClass('animate__animated animate__slideInRight');
    }
    else if((positiontop > 950) && (positiontop < 1000)) {
        $('.SlideInFive').addClass('animate__animated animate__slideInLeft');
        $('.SlideInSix').addClass('animate__animated animate__slideInRight');
    }
    else if((positiontop >  1250) && (positiontop < 1300)) {
        $('.SlideInSeven').addClass('animate__animated animate__slideInLeft');
        $('.SlideInEight').addClass('animate__animated animate__slideInRight');
    }
    else if((positiontop > 1300) && (positiontop < 1500)) {
        $('.CardOne').addClass('animate__animated animate__slideInLeft');
        $('.CardThree').addClass('animate__animated animate__slideInRight');
    }
    else if((positiontop > 2300) && (positiontop < 2350)) {
        $('.WhyChooseUsOne').addClass('animate__animated animate__slideInUp');
        $('.WhyChooseUsTwo').addClass('animate__animated animate__slideInLeft');
        $('.WhyChooseUsThree').addClass('animate__animated animate__slideInRight');
    }
    else if((positiontop > 2730) && (positiontop < 2800)) {
        $('.ColTestimonial').addClass('animate__animated animate__slideInLeft');
        $('.TestimonialRowOne').addClass('animate__animated animate__slideInRight');
        $('.TestimonialRowTwo').addClass('animate__animated animate__slideInRight');
        $('.TestimonialRowThree').addClass('animate__animated animate__slideInRight');
    }
});
});