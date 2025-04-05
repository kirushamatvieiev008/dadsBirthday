const btnPress = document.querySelector(`.press_money`);
const moneyFoot = document.querySelector(`.money_footer`);
const sorry = document.querySelector(`.sorry`);
const hb = document.querySelector(`.hb`);
const container = document.querySelector(`.container`);
const btnHb = document.querySelector(`.btnHb`);

btnPress.addEventListener(`click`, (e) => {
    e.preventDefault();
    moneyFoot.style.display = `block`;
    sorry.style.display = `block`;
})

hb.addEventListener(`click`, (e) => {
    e.preventDefault();
    container.style.display = `block`;
    btnHb.style.display = `none`;
})