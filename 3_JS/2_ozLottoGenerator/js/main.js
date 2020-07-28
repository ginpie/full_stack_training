'use strict'

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
const draws = [0,0,0,0,0,0,0]

const bclick = document.querySelector("#btn").addEventListener("click", generate)

function generate() {
    for (let i=0; i<draws.length; i++){
        let rdn
        do {
            rdn = Math.ceil(Math.random() * 45)
        } while (draws.includes(rdn))
        draws[i] = rdn;
    }

    showUp()
}

function showUp() {

    let balls = document.querySelectorAll(".generator__ball")
    
    for (let i=0; i<draws.length; i++){
        balls[i].innerHTML = draws[i]
    }
}