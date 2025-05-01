class Offer {
    constructor(logo, url, duration, interest) {
        this.logo = logo;
        this.url = url;
        this.duration = duration;
        this.interest = interest;
    }
}

const moneySymbols = ["💵", "💰", "💸", "💳", "💶", "💷"];

// Динамически загружаем только те оферы, которые есть в массиве offerIdsArray
const offersData = {
    44: new Offer(logo="/images/banks/tengo.png", url="{offer}&offer_id=44", duration="до 25000грн", interest="0.1%"),
    45: new Offer(logo="/images/banks/miloan.svg", url="{offer}&offer_id=45", duration="до 25000грн", interest="0.01%"),
    46: new Offer(logo="/images/banks/Mycredit.svg", url="{offer}&offer_id=46", duration="до 35 000грн", interest="3.99%"),
    47: new Offer(logo="/images/banks/slon.png.svg", url="{offer}&offer_id=47", duration="до 32000грн", interest="0.01%"),
    48: new Offer(logo="/images/banks/credit7.svg", url="{offer}&offer_id=48", duration="до 40000грн", interest="0.1%"),
    49: new Offer(logo="/images/banks/Pango_logo.png.svg", url="{offer}&offer_id=49", duration="до 25000грн", interest="0.1%"),
    50: new Offer(logo="/images/banks/FirstCredit.svg", url="{offer}&offer_id=50", duration="до 20000грн", interest="0.01%"),
    51: new Offer(logo="/images/banks/finsfera.png.svg", url="{offer}&offer_id=51", duration="до 15000грн", interest="0.1%"),
    52: new Offer(logo="/images/banks/starfin.png.svg", url="{offer}&offer_id=52", duration="до 20000грн", interest="0.29%"),

    53: new Offer(logo="/images/banks/loan.svg", url="{offer}&offer_id=53", duration="до 20000грн", interest="0.01%"),
    54: new Offer(logo="/images/banks/CreditPlus-Logo.svg", url="{offer}&offer_id=54", duration="до 40000грн", interest="0.01%"),
    55: new Offer(logo="/images/banks/monyveo.png", url="{offer}&offer_id=55", duration="до 40000грн", interest="0.1%"),
    56: new Offer(logo="/images/banks/fastmoney.svg", url="{offer}&offer_id=56", duration="до 50000грн", interest="0.1%"),
    // 57: new Offer(logo="/images/banks/creditkasa.jpg.svg", url="{offer}&offer_id=57", duration="до 55000", interest="0.1%"),
    63: new Offer(logo="/images/banks/tvoigro.png.svg", url="{offer}&offer_id=63", duration="до 1500000грн", interest="1%"),
    64: new Offer(logo="/images/banks/e_groshi.svg", url="{offer}&offer_id=64", duration="до 20000грн", interest="0.1%"),
};

document.addEventListener("DOMContentLoaded", function() {
    // Получаем список оферов из URL
    const urlParams = new URLSearchParams(window.location.search);
    var offersIds = urlParams.get("offers_ids");  // например, "zaimerkz,moneymankz,onecreditkz"
    if (!offersIds) {
        offersIds="56 63 50 44 54 53";
    }

    const offerIdsArray = offersIds.split(' ');
    const offersWrapper = document.querySelector("#offers_list");
    var idx = 0;
    offerIdsArray.forEach(offerId => {
        const offerData = offersData[offerId];
        if (offerData) {
            randomSymbol = moneySymbols[Math.floor(Math.random() * moneySymbols.length)];

            if(idx == 0 || idx == 1) {
                labelDiv = `<div class="label red">Найкраще для тебе</div>`;
            } else if(idx == 2) {
                labelDiv = `<div class="label yellow">Швидке оформлення</div>`;
            } else {
                labelDiv = '';
            }

            if(idx == 0) {
                color="#b8d8be"
            } else {
                color="#e5e5e5"
            }

            const offerElement = document.createElement("div");
            offerElement.setAttribute("id", `offer-${offerId}`);
            offerElement.classList.add("offer", "offer-block-new");
            offerElement.style.backgroundColor = color;
            offerElement.innerHTML = `
            <div class="offer-key" style="display: none;">${offerId}</div>
            ${labelDiv}
            <a class="body-card-logo" href="${offerData.url}" onclick="return goUrl(this, '${offerId}');" target="_blank">
                <img src="${offerData.logo}" class="offer-logo" alt="${offerId}">
            </a>
            <ul class="offer-info">
                <li>
                <span class="text">Сума:</span>
                <span class="bold">${offerData.duration}</span>
                </li>
                <li>
                <span class="text">Ставка:</span>
                <span class="bold colored">${offerData.interest}</span>
                </li>
            </ul>
            <div class="general_button_wrapper">
                <div class="button">
                <a class="btn-main" target="_blank" href="${offerData.url}" onclick="return goUrl(this, '${offerId}');">
                    Отримати ${randomSymbol}
                </a>
                </div>
            </div>
            `;
            offersWrapper.appendChild(offerElement);
            
            idx++;
        }
    });
});