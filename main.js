
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

const crypto_text_base64 = "6EPl/FFhzJcjEFgF5ZZky0z8EYBan6Eh/Bln6awoGIUqdXgReQdVIPvaJJN3pAH3V4hZJP7NNUOf0Vb3CcS5eMHHSiNasLRBF4+wU8dU0QpHUicIvpryvqwYnKGD/jMBkzmQnp4Q+h/dvaP05NPVb7KfV8HFp0N2yXThVlDyCgKZFRh+jTx1to+AODtm1FvDe+ZstvgTKjmgTY336aV+p7HWbMA93b0XShSSZH2i1wxwDjW6m7fzcyEGDoLunQ4EiKouqlPWBXuxmkSpuMarpgqPaaZ7b/CTncCmJwZ+miAPBldGugK7d+pYVtsJ6aGqyjPIi6/U/PP6qkQ0eyepvDu8oXHnnTwELFVGRYMfnCY="
setupStartListener();

async function setupStartListener() {
    if (name_ === "蕭珮心") {
        const unlocked = await unlockXiaoPeiXinCard();
        if (!unlocked) {
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

async function unlockXiaoPeiXinCard() {
    if (!crypto_text_base64) {
        console.error("[decrypt] crypto_text_base64 is empty");
        window.alert("尚未設定密文");
        return false;
    }

    const password = window.prompt("請輸入密碼");
    if (!password) {
        console.warn("[decrypt] cancelled or empty password input");
        window.alert("未輸入密碼");
        return false;
    }

    if (!window.crypto || !window.crypto.subtle) {
        console.error("[decrypt] Web Crypto API is not available");
        window.alert("瀏覽器不支援解密功能");
        return false;
    }

    try {
        const plaintext = await decryptAesGcmBase64(crypto_text_base64, password);
        if (!plaintext) {
            console.error("[decrypt] empty plaintext after AES-GCM decrypt");
            window.alert("密碼錯誤或密文格式不符");
            return false;
        }

        document.querySelector(".card-body").innerHTML = formatPlaintextForHtml(plaintext);
        console.info("[decrypt] success with AES-GCM");
        return true;
    } catch (error) {
        console.error("[decrypt] exception during AES-GCM decrypt:", error);
        window.alert("解密失敗");
        return false;
    }
}

async function decryptAesGcmBase64(ciphertextBase64, password) {
    const payload = base64ToBytes(ciphertextBase64);
    console.info("[decrypt] base64 decoded bytes:", payload.length);
    if (payload.length < 16) {
        throw new Error("Ciphertext is too short");
    }

    const tried = [];
    const attempts = [
        // direct key styles
        { name: "iv12+raw16", layout: "ivHead", ivLength: 12, keyMode: "raw16" },
        { name: "iv16+raw16", layout: "ivHead", ivLength: 16, keyMode: "raw16" },
        { name: "iv12+sha256_16", layout: "ivHead", ivLength: 12, keyMode: "sha256_16" },
        { name: "iv16+sha256_16", layout: "ivHead", ivLength: 16, keyMode: "sha256_16" },

        // common tool format: salt(16) + iv(12) + ciphertext+tag
        { name: "salt16+iv12+pbkdf2_10k", layout: "saltIvHead", saltLength: 16, ivLength: 12, keyMode: "pbkdf2_sha256_10000" },
        { name: "salt16+iv12+pbkdf2_100k", layout: "saltIvHead", saltLength: 16, ivLength: 12, keyMode: "pbkdf2_sha256_100000" },

        // alternate order seen in some implementations: iv(12) + salt(16) + ciphertext+tag
        { name: "iv12+salt16+pbkdf2_10k", layout: "ivSaltHead", saltLength: 16, ivLength: 12, keyMode: "pbkdf2_sha256_10000" },
        { name: "iv12+salt16+pbkdf2_100k", layout: "ivSaltHead", saltLength: 16, ivLength: 12, keyMode: "pbkdf2_sha256_100000" }
    ];

    for (const attempt of attempts) {
        let iv;
        let encrypted;
        let salt = null;

        if (attempt.layout === "ivHead") {
            if (payload.length <= attempt.ivLength) {
                continue;
            }
            iv = payload.slice(0, attempt.ivLength);
            encrypted = payload.slice(attempt.ivLength);
        } else if (attempt.layout === "saltIvHead") {
            const prefix = attempt.saltLength + attempt.ivLength;
            if (payload.length <= prefix) {
                continue;
            }
            salt = payload.slice(0, attempt.saltLength);
            iv = payload.slice(attempt.saltLength, prefix);
            encrypted = payload.slice(prefix);
        } else if (attempt.layout === "ivSaltHead") {
            const prefix = attempt.ivLength + attempt.saltLength;
            if (payload.length <= prefix) {
                continue;
            }
            iv = payload.slice(0, attempt.ivLength);
            salt = payload.slice(attempt.ivLength, prefix);
            encrypted = payload.slice(prefix);
        } else {
            continue;
        }

        try {
            const key = await importAesGcmKey(password, attempt.keyMode, salt);
            const plainBuffer = await window.crypto.subtle.decrypt(
                {
                    name: "AES-GCM",
                    iv: iv,
                    tagLength: 128
                },
                key,
                encrypted
            );

            console.info("[decrypt] matched format:", attempt.name);
            return new TextDecoder().decode(plainBuffer).replace(/\u0000+$/g, "");
        } catch (error) {
            tried.push(`${attempt.name}: ${error.message}`);
        }
    }

    console.error("[decrypt] all AES-GCM attempts failed", tried);
    return "";
}

async function importAesGcmKey(password, keyMode, salt = null) {
    const passwordBytes = new TextEncoder().encode(password);

    if (keyMode === "raw16") {
        if (passwordBytes.length !== 16) {
            throw new Error("Password byte length is not 16 for AES-128 raw key");
        }

        return window.crypto.subtle.importKey(
            "raw",
            passwordBytes,
            { name: "AES-GCM" },
            false,
            ["decrypt"]
        );
    }

    if (keyMode === "sha256_16") {
        const digest = await window.crypto.subtle.digest("SHA-256", passwordBytes);
        const keyBytes = new Uint8Array(digest).slice(0, 16);
        return window.crypto.subtle.importKey(
            "raw",
            keyBytes,
            { name: "AES-GCM" },
            false,
            ["decrypt"]
        );
    }

    if (keyMode === "pbkdf2_sha256_10000" || keyMode === "pbkdf2_sha256_100000") {
        if (!salt || salt.length === 0) {
            throw new Error("Missing salt for PBKDF2 key derivation");
        }

        const iterations = keyMode === "pbkdf2_sha256_10000" ? 10000 : 100000;
        const keyMaterial = await window.crypto.subtle.importKey(
            "raw",
            passwordBytes,
            { name: "PBKDF2" },
            false,
            ["deriveKey"]
        );

        return window.crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: salt,
                iterations: iterations,
                hash: "SHA-256"
            },
            keyMaterial,
            { name: "AES-GCM", length: 128 },
            false,
            ["decrypt"]
        );
    }

    throw new Error("Unsupported key mode");
}

function base64ToBytes(base64) {
    const normalized = normalizeBase64(base64);
    const binary = window.atob(normalized);
    const bytes = new Uint8Array(binary.length);

    for (let i = 0; i < binary.length; i += 1) {
        bytes[i] = binary.charCodeAt(i);
    }

    return bytes;
}

function normalizeBase64(value) {
    let normalized = value.replace(/\s+/g, "").replace(/-/g, "+").replace(/_/g, "/");

    const remainder = normalized.length % 4;
    if (remainder !== 0) {
        normalized += "=".repeat(4 - remainder);
    }

    if (!/^[A-Za-z0-9+/=]+$/.test(normalized)) {
        throw new Error("Invalid Base64 characters in crypto_text_base64");
    }

    return normalized;
}

function formatPlaintextForHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br>");
}
