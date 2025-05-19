

function animate_jump(
    tl,
    duration
) {
    

    tl.to(".handl1", {
    rotation: 100,
    ease: "power2.in",
    duration: duration,
    transformOrigin: "top center"
    });

    tl.to(".handl2", {
    rotation: 70,
    ease: "power2.in",
    duration: duration,
    transformOrigin: "top center"
    }, "<");

    tl.to(".handr1", {
    rotation: -120,
    duration: duration,
    transformOrigin: "top center"
    }, "<");

    tl.to(".handr2", {
    rotation: 10,
    duration: duration,
    transformOrigin: "top center"
    }, "<");
    tl.to(".legl1", {
    rotation: -20,
    duration: duration,
    transformOrigin: "top center"
    }, "<");

    tl.to(".legl2", {
    rotation: 80,
    duration: duration,
    transformOrigin: "top center"
    }, "<");
    tl.to(".legr1", {
    rotation: -20,
    duration: duration,
    transformOrigin: "top center"
    }, "<");

    tl.to(".legr2", {
    rotation: 90,
    duration: duration,
    transformOrigin: "top center"
    }, "<");
    tl.to(".racket", {
    rotation: 0,
    duration: duration,
    transformOrigin: "top left"
    }, "<");
    tl.to(".player", {
    y: -100,
    x: 40,
    rotation: -15,
    duration: duration,
    ease: "power2.out",
    transformOrigin: "top center"
    }, "<");
    tl.to(".player", {
    y: -100,
    rotation: -25,
    duration: duration,
    ease: "power1.out",
    transformOrigin: "top center"
    }, "<");
    
    tl.to(".player", {
    x: 50,
    duration: duration,
    ease: "linear",
    transformOrigin: "top center"
    }, "<");
    tl.to(".shuttle", {
    y: 100,
    ease: "linear",
    duration: duration,
    transformOrigin: "top left"
    }, "<");
}