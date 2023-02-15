const characters = [
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

const passwordElement = document.querySelector("#password")

const lengthElement = document.querySelector("#length")

function observe() {
    let max = lengthElement.max
    let min = lengthElement.min
    if (parseInt(lengthElement.value) > max) {
        lengthElement.value = max
    }
    if (parseInt(lengthElement.value) < min) {
        lengthElement.value = min
    }
}

const generate = () => {
    let password = ""
    for (let i = 0; i < lengthElement.value; i++) {
        const parameter = characters[Math.floor(Math.random() * (characters.length - 0))]
        password += parameter[Math.floor(Math.random() * (parameter.length - 0))]
    }
    passwordElement.innerText = password
}

async function copy() {
    if (passwordElement.innerText == "secure password") {
        return
    }
    await navigator.clipboard.writeText(passwordElement.innerText)
    alert("copied")
}