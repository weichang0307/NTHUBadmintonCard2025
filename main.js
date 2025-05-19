
const params = new URLSearchParams(window.location.search);

const name_ = params.get("name");
const tl_ = gsap.timeline();
const d0 = 0;
const d1 = 1;
const d2 = 0.4;
const d3 = 0.25;
const width = 400;
const height = 600;
let w = window.innerWidth;
let h = window.innerHeight;

windowResize();
window.addEventListener("resize", () => {
    windowResize();
});


animate_init(tl_, d0);
animate_prepare(tl_, d1);
animate_jump(tl_, d2);
animate_smash(tl_, d3);

document.querySelector(".to").innerHTML = "To: " + name_;
document.querySelector(".by").innerHTML = "By: " + "張博崴";

switch (name_) {
    case "王紀堯":
        document.querySelector(".card-body").innerHTML = `
            恭喜，你終於要畢業了！<br>            
            謝謝你都會找我打球<br>
            我會想念跟你的豆花局的<br>
            祝你能挺過老包的考驗在今年順利畢業！<br>
        `;
        break;
}

function windowResize() {
    w = window.innerWidth;
    h = window.innerHeight;
    console.log("目前畫面大小：", w, h);
    gsap.set(".window", {
        y: h/2 - height/2,
        scaleX: w/width,
        scaleY: w/width
    });
    gsap.set(".topbar", {
        scaleX: w/width,
        scaleY: (h/2 - height/2) / height
    });
}