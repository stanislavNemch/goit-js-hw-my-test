const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acc, time) => acc + time, 0); // 1270 + 468 + 710 + 244 = 2692
console.log(totalPlayTime); // 2692

const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime); // 673
