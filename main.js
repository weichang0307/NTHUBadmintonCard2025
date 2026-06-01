
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

const crypto_text = "jLSKiJgX7xmwfjWs+GNn4sCM0a/JYFceQenRXDiG97OQy0btprIpp/twzeqdZnOhTJaj+OOHoJWBNxuRyqCv/Ry1gxz0cqLj93COeiicqJfWSf/sv8km6siH34fHjhw2KIuGssx4evJWrdi+0s0XFuUbbW0abJqT4Rq6OPECbxExiru7ZrFNZrzv7O0thZaGjtsYGHeM1wRzkpslJxrXcALK8DCebfHLXYU+7qpiwa2RCCtitswgcM7C5hwhZo06dduAkusFL9laOBkr5QMMPTfMoJmWqRAAoLw+6PKYFwScK05fnX0GdthfkcCIbT7GL25p0oS+M5SetP9fwW/Sh+5P2W0hzYwtuL6Niyq/iMX+K3wXlQBwsRyw7FnR1VMQ"
const crypto_iv_setting = "0";

setupStartListener();

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
        console.warn("[decrypt] cancelled or empty password input");
        window.alert("未輸入密碼");
        return false;
    }

    if (typeof CryptoJS === "undefined" || !CryptoJS.AES) {
        console.error("[decrypt] CryptoJS AES is not available. Check script loading order.");
        window.alert("解密元件未載入");
        return false;
    }

    try {
        let plaintext = decryptCtrZeroPaddingBase64(crypto_text, password, crypto_iv_setting);

        if (!plaintext) {
            console.warn("[decrypt] CTR/ZeroPadding result is empty, trying OpenSSL-compatible fallback");
            const fallbackBytes = CryptoJS.AES.decrypt(crypto_text, password);
            plaintext = fallbackBytes.toString(CryptoJS.enc.Utf8).replace(/\u0000+$/g, "");
        }

        if (!plaintext) {
            console.error("[decrypt] empty plaintext after all decrypt attempts (wrong password or mismatched mode/iv/padding)");
            window.alert("密碼錯誤或加密參數不一致");
            return false;
        }

        document.querySelector(".card-body").innerHTML = formatPlaintextForHtml(plaintext);
        console.info("[decrypt] success");
        return true;
    } catch (error) {
        console.error("[decrypt] exception during AES decrypt:", error);
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

function decryptCtrZeroPaddingBase64(ciphertextBase64, keyText, ivSetting) {
    const key = CryptoJS.enc.Utf8.parse(keyText);
    const iv = buildIvWordArray(ivSetting);
    const cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertextBase64)
    });

    const bytes = CryptoJS.AES.decrypt(cipherParams, key, {
        iv: iv,
        mode: CryptoJS.mode.CTR,
        padding: CryptoJS.pad.ZeroPadding
    });

    return bytes.toString(CryptoJS.enc.Utf8).replace(/\u0000+$/g, "");
}

function buildIvWordArray(ivSetting) {
    if (ivSetting === "0") {
        return CryptoJS.enc.Hex.parse("00000000000000000000000000000000");
    }

    if (/^[0-9a-fA-F]{32}$/.test(ivSetting)) {
        return CryptoJS.enc.Hex.parse(ivSetting);
    }

    if (ivSetting.length === 16) {
        return CryptoJS.enc.Utf8.parse(ivSetting);
    }

    throw new Error("Invalid IV setting. Use '0', 32-char hex, or 16-char text.");
}
