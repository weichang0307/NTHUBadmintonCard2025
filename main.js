
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
    case "楊濟安":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            是說你到底什麼時候畢業<br>
            總之感謝你今年當隊長為球隊想了這麼多<br>
            我相信下一任隊長會延續你的改革<br>
            祝事事順心！<br>
        `;
        break;
    case "簡國盛":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            謝謝你在我打球感到挫折的時候會來關心我 給我建議<br>
            祝事事順心！<br>
        `;
        break;
    case "江巧羽":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            謝謝你偶爾會教我打球<br>
            也謝謝你提供你家客廳給我們煮火鍋<br>
            祝事事順心！<br>
        `;
        break;  
    case "莊采柔":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            祝事事順心！<br>
        `;
        break;
    case "林鈺芳":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            祝事事順心！<br>
        `;
        break;
    case "廖國艮":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            謝謝你出去比賽的時候帶我去吃好吃的 <br>
            祝事事順心！<br>
        `;
        break;
    case "張鈞棋":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            祝事事順心！<br>
        `;
        break;
    case "王邦綸":
        document.querySelector(".card-body").innerHTML = `
            你要畢業了?!<br>
            有空再回來打球<br>
            畢業快樂 祝事事順心！<br>
        `;
        break;
    case "鄧韋辰":
        document.querySelector(".card-body").innerHTML = `
            謝謝你開車載我們去露營<br>
            也謝謝你跟我說我海洋被點到名<br>
            沒有你我真的會被當<br>
            畢業快樂 祝事事順心！<br>
        `;
        break;
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
