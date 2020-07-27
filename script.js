
const guess = () => {
    let r = random(1, 10);
    tryGuess(r);
};

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const tryGuess = (num) => {
    for (let p = true; p != num && p;) {
        let p = prompt('Отгадай число что я загадал от 1 до 10');
        if (p == num) {
            alert('You win!'); break;
        } else if (p < num && p) {
            alert('мое число чуть больше!');
        } else if (p > num && p) {
            alert('мое число чуть меньше!');
        } else {
            alert('Вы вышли из игры!'); break;
        }
    }
};
guess();