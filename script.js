const data = [
    [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ],
    [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ],
    [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ],
    [
        "!",
        "@",
        "#",
        "$",
        "%",
        "?",
        "+",
        "-",
        "*",
        "^",
        "/",
    ]
]

const output = document.querySelector("#password")
const characters = document.querySelector("#length")
const upperCheck = document.querySelector("#uppercase")
const lowerCheck = document.querySelector("#lowercase")
const numbersCheck = document.querySelector("#numbers")
const symbolsCheck = document.querySelector("#symbols")

function observe() {
    let max = characters.max
    let min = characters.min
    if (parseInt(characters.value) > max) {
        characters.value = max
    }
    if (parseInt(characters.value) < min) {
        characters.value = min
    }
}

const generate = () => {
    let pool = []
    if (upperCheck.checked) {
        pool.push(data[0])
    }
    if (lowerCheck.checked) {
        pool.push(data[1])
    }
    if (numbersCheck.checked) {
        pool.push(data[2])
    }
    if (symbolsCheck.checked) {
        pool.push(data[3])
    }
    if (!upperCheck.checked && !lowerCheck.checked && !numbersCheck.checked && !symbolsCheck.checked) {
        pool = data
    }

    let password = ""
    for (let i = 0; i < characters.value; i++) {
        const iteration = pool[Math.floor(Math.random() * (pool.length - 0))]
        password += iteration[Math.floor(Math.random() * (iteration.length - 0))]
    }
    output.innerText = password
}

generate()

async function copy() {
    if (output.innerText == "") {
        return
    }
    await navigator.clipboard.writeText(output.innerText)
    alert("copied")
}