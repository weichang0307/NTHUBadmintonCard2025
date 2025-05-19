

function animate_prepare(
    tl,
    duration
) {
    tl.to(".player", {
    y: 30,
    x: 45,
    rotation: 25,
    duration: duration,
    transformOrigin: "top center"
    });

    tl.to(".handl1", {
    rotation: 60,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);

    tl.to(".handl2", {
    rotation: 140,
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
    rotation: -90,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);

    tl.to(".legl2", {
    rotation: 110,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);
    tl.to(".legr1", {
    rotation: -100,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);

    tl.to(".legr2", {
    rotation: 110,
    duration: duration,
    transformOrigin: "top center"
    }, "-=" + duration);
    tl.to(".racket", {
    rotation: 0,
    duration: duration,
    transformOrigin: "top left"
    }, "-=" + duration);

}