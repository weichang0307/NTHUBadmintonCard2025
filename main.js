
const params = new URLSearchParams(window.location.search);

const name_ = params.get("name");
const tl_ = gsap.timeline({ paused: true });
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

gsap.set(".card", {
    x: width,
    transformOrigin: "top left"
});


animate_init(tl_, d0);
animate_prepare(tl_, d1);
animate_jump(tl_, d2);
animate_smash(tl_, d3);

setupStartListener();

function setupStartListener() {
    if (name_ === "蕭珮心") {
        if (!unlockXiaoPeiXinCard()) {
            const startScreen = document.querySelector(".start-screen");
            if (startScreen) {
                startScreen.innerHTML = "password required";
            }
            return;
        }
    }
    document.addEventListener("click", startAnimationOnce, { once: true });
}

function startAnimationOnce() {
    const startScreen = document.querySelector(".start-screen");
    if (startScreen) {
        startScreen.style.display = "none";
    }
    tl_.play(0);
}

document.querySelector(".to").innerHTML = "To: " + name_;
document.querySelector(".by").innerHTML = "By: " + "張博崴";

const crypto_text = "U2FsdGVkX1/IRohwl2ivy+i9VXjVXmzYWfFN69VkxyPHNwBR4czFpwsKJ7kkkzwi31X5qynFP9jsAK7QADUlBbzxdHcOeVRmNF50QVjAFPIn3ec+4qhSATeEuOJCqELYmhibngPleJlTFGfoJEsp9uzolxhtRuZEM/wElA4LSjF0vXAd6qxoPKTiPDenwuqlkHD3/E8IxDhiAJbZ9TIz8smTTehKNUj2ffo+xX2tqnTfi5U7MzQ02FEtJMz949ATA8V5yMfIr/8lhRZPxaZSQijpp1rPR+B5GxcDKSYQPdvjqV0BPqXg/ovdildfVhXJYj4e9sRciN3dNxoA5g3tvFDhtKy0/+pL1aUcEp+p+6qy22v5AWS8pn3ymc9PXmDo";

switch (name_) {
    case "楊濟安":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            感謝你今年當隊長為球隊想了這麼多<br>
            相信下一任隊長會延續你的改革<br>
            祝你心想事成！<br>
        `;
        break;
    case "簡國盛":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            謝謝你在我打球感到挫折的時候會來關心我 給我建議<br>
            祝你心想事成！<br>
        `;
        break;
    case "江巧羽":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            謝謝你偶爾會教我打球<br>
            也謝謝你提供你家客廳給我們煮火鍋<br>
            祝你心想事成！<br>
        `;
        break;  
    case "莊采柔":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            祝你心想事成！<br>
        `;
        break;
    case "林鈺芳":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            祝你心想事成！<br>
        `;
        break;
    case "廖國艮":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            謝謝你出去比賽的時候帶我去吃好吃的 <br>
            祝你心想事成！<br>
        `;
        break;
    case "張鈞棋":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>            
            祝你心想事成！<br>
        `;
        break;
    case "王邦綸":
        document.querySelector(".card-body").innerHTML = `
            你要畢業了?!<br>
            有空再回來打球<br>
            祝你畢業快樂 心想事成!<br>
        `;
        break;
    case "鄧韋辰":
        document.querySelector(".card-body").innerHTML = `
            謝謝你開車載我們去露營<br>
            也謝謝你跟我說我海洋被點到名<br>
            祝你畢業快樂 心想事成!<br>
        `;
        break;
    case "王紀堯":
        document.querySelector(".card-body").innerHTML = `
            恭喜，你終於要畢業了！<br>            
            謝謝你都會找我打球<br>
            我會想念跟你的豆花局的<br>
            祝你能挺過老包的考驗在今年順利畢業！<br>

            2026.06.30<br>
            老哥所以你怎麽還沒畢業<br>
        `;
        break;
    case "蕭以勝":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            祝一切順利！<br>
        `;
        break;
    case "魏崇悅":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            祝一切順利！<br>
        `;
        break;
    case "鄭詠心":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            祝一切順利！<br>
        `;
        break;
    case "蕭珮心":
        document.querySelector(".card-body").innerHTML = `
            請先輸入密碼<br>
        `;
        break;
    case "謝昊恩":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            雖然你好像還沒要畢業<br>
            有空再找你打球<br>
            祝一切順利！<br>
        `;
        break;
    case "陳名":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            祝一切順利！<br>
        `;
        break;
    case "張家綺":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            祝一切順利！<br>
        `;
        break;
    case "林奕辰":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            祝一切順利！<br>
        `;
        break;
    case "涂冠宇":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            祝一切順利！<br>
            3D列印機記得來拿<br>
            不然就送我了🙂<br>
        `;
        break;
    case "Vishal Mani":
        document.querySelector(".card-body").innerHTML = `
            Congratulations for graduating!<br>
            Come back to play with us when you have time!<br>
            Wishing you all the best!<br>
        `;
        break;
    case "陳信遠":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            祝一切順利！<br>
        `;
        break;
    case "鄺苡萱":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            敢不敢再來次真心話大冒險🤣（沒<br>
            祝一切順利！<br>
        `;
        break;
    case "張所蓁":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            敢不敢再來次真心話大冒險🤣（沒<br>
            祝一切順利！<br>
        `;
        break;
    case "戴偉翔":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            祝一切順利！<br>
            也祝你專題順利！<br>
        `;
        break;
    case "劉育如":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            謝謝你揪我們去環島<br>
            很難忘的回憶~<br>
            祝一切順利！<br>
        `;
        break;
    case "洪元甫":
        document.querySelector(".card-body").innerHTML = `
            畢業快樂！<br>
            說真的那時候的火柴人到現在都還是我的得意之作<br>
            👍👍👍<br>
            祝一切順利！<br>
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

function unlockXiaoPeiXinCard() {
    const password = window.prompt("請輸入密碼");
    if (!password) {
        return false;
    }

    try {
        const bytes = CryptoJS.AES.decrypt(crypto_text, password);
        const plaintext = bytes.toString(CryptoJS.enc.Utf8);

        if (!plaintext) {
            window.alert("密碼錯誤");
            return false;
        }

        document.querySelector(".card-body").innerHTML = formatPlaintextForHtml(plaintext);
        return true;
    } catch (error) {
        window.alert("解密失敗");
        return false;
    }
}

function formatPlaintextForHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br>");
}
