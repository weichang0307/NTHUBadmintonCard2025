

function animate_init(
    tl,
    duration
) {
    tl.to(".card", {
        x: width,
        duration: duration,
        transformOrigin: "top left"
    }, "<");
    tl.to(".handl1", {
    rotation: 100,
    duration: duration,
    transformOrigin: "top center"
    });

    tl.to(".handl2", {
    rotation: 100,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);

    tl.to(".handr1", {
    rotation: -120,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);

    tl.to(".handr2", {
    rotation: -10,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);
    tl.to(".legl1", {
    rotation: -10,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);

    tl.to(".legl2", {
    rotation: 10,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);
    tl.to(".legr1", {
    rotation: -20,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);

    tl.to(".legr2", {
    rotation: 10,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);
    tl.to(".racket", {
    rotation: 0,
    duration: duration,
    transformOrigin: "top left"
    }, "-=" + duration);

    tl.to(".shuttle", {
    rotation: 0,
    scaleX: 0.5,
    scaleY: 0.5,
    rotation: -45,
    x: 180,
    y: -50,
    duration: duration,
    transformOrigin: "top left"
    }, "-=" + duration);
}