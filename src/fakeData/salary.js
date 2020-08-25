const salaries = [
    32000,
    50000,
    30000,
    90000,
    15900,
    70000,
    100000,
    32000,
    200000,
    32000,
    90000,
    56000,
    45000,  
    39000,
    80000
];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(salaries);

export default salaries;