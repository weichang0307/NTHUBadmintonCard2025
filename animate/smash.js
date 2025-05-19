

function animate_smash(
    tl,
    duration
) {
    tl.to(".player", {
    rotation: 20,
    y: -140,
    x: 90,
    duration: duration,
    transformOrigin: "top center"
    });
    

    

    tl.to(".handr1", {
    rotation: 50,
    x: -20,
    duration: duration,
    transformOrigin: "top center"
    }, "<");

    tl.to(".handr2", {
    rotation: -10,
    duration: duration,
    transformOrigin: "top center"
    }, "<");
    tl.to(".legl1", {
    rotation: -70,
    x: 10,
    duration: duration,
    transformOrigin: "top center"
    }, "<");

    tl.to(".legl2", {
    rotation: 20,
    duration: duration,
    transformOrigin: "top center"
    }, "<");
    tl.to(".legr1", {
    rotation: 0,
    x: -10,
    duration: duration,
    transformOrigin: "top center"
    }, "<");

    tl.to(".legr2", {
    rotation: 20,
    duration: duration,
    transformOrigin: "top center"
    }, "<");

    



    tl.to(".handl1", {
    rotation: 170,
    x: 20,
    duration: duration/2,
    ease: "linear",
    transformOrigin: "top center"
    }, "<");

    tl.to(".handl2", {
    rotation: -30,
    duration: duration/2,
    ease: "linear",
    transformOrigin: "top center"
    }, "<");

    tl.to(".racket", {
    rotation: -30,
    duration: duration/2,
    ease: "linear",
    transformOrigin: "top left"
    }, "<");
    tl.to(".racket_face", {
    scaleX: 1/3,
    x: 8,
    duration: duration/2,
    ease: "linear",
    transformOrigin: "top left"
    }, "<");
    tl.to(".shuttle", {
    y: 150,
    ease: "linear",
    duration: duration/2,
    transformOrigin: "top left"
    }, "<");


    tl.to(".handl1", {
    rotation: 300,
    x: 20,
    duration: duration/2,
    ease: "power2.out",
    transformOrigin: "top center"
    }, "-=" + (duration - duration/2));

    tl.to(".handl2", {
    rotation: 10,
    duration: duration/2,
    ease: "power2.out",
    transformOrigin: "top center"
    }, "<");
    tl.to(".racket", {
    rotation: 0,
    duration: duration/2,
    ease: "power2.out",
    transformOrigin: "top left"
    }, "<");
    tl.to(".racket_face", {
    scaleX: 1,
    x: 0,
    duration: duration/2,
    ease: "linear",
    transformOrigin: "top left"
    }, "<");
    tl.to(".player", {
    x: 150,
    ease: "linear",                  // x 軸等速
    duration: duration * 2,
    transformOrigin: "top center"
    }, "<"); // 和下面的 y 同步開始

    tl.to(".player", {
    y: 0,
    ease: "power1.in",            // y 軸：上拋 → 頂點 → 下落
    duration: duration * 2,
    transformOrigin: "top center"
    }, "<"); // 同步開始（關鍵！）
    tl.to(".shuttle", {
    x: width + 100 - 20,
    rotation: -45-90,
    ease: "linear",
    duration: 0.2,
    transformOrigin: "top left"
    }, "<");
    tl.to(".shuttle", {
        x: 150 - 20,
        duration: 0.4,
        ease: "bounce.out",
        transformOrigin: "top left"
    }, "-=" + (duration * 2 - 0.2));
    tl.to(".player", {
        x: -width+50,
        duration: 0.4,
        ease: "bounce.out",
        transformOrigin: "top left"
    }, "<");
    tl.to(".card", {
        x: 50,
        duration: 0.4,
        ease: "bounce.out",
        transformOrigin: "top left"
    }, "<");













    
}