const btnPress = document.querySelector(`.press_money`);
const moneyFoot = document.querySelector(`.money_footer`);
const sorry = document.querySelector(`.sorry`);


btnPress.addEventListener(`click`, (e) => {
    e.preventDefault();
    moneyFoot.style.display = `block`;
    sorry.style.display = `block`;
})