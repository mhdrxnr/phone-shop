// glide js carousel

const slider1 = document.getElementById("glide_1")
// hero

if(slider1){
    new Glide(slider1, {
        type: "carousel",
        startAt: 0,
        autoplay: 3000,
        hoverpause: true,
        perview: 1,
        animationDuration: 800,
        animationTimingFunc: "linear",
    }).momunt();
}

// Latest product

// testimonial