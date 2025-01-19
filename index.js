console.log("Hello JS..........");

let allInput = document.querySelectorAll(".cell>input")
let btnStart = document.getElementById("btnStart");
let btnPause = document.getElementById("btnPause");
let running = false;
let speed = 1;
let solver;

// only 0 to 9 tak input lega.
allInput.forEach((inp) => {
    inp.addEventListener("keydown", (e) => {
        if (e.key < "1" || e.key > "9") {
            e.preventDefault();
        }
    });
});

btnStart.addEventListener("click", () => {
    testApp();
    running = true;
    allInput.forEach((input) => {
        if (input.value) {
            input.setAttribute("disabled", true);
        }
    })
    solver = new Sudoku(allInput);
    setTimeout((timeOut = () => {
        if (running) {
            let sol = solver.solve();
            if (!sol) setTimeout(timeOut, speed)
        }
    }), speed);
    solver.solve();
})

btnPause.addEventListener("click", () => {
    running = !running;
})

let sample = [[5, 3, 4, 6, 7, 0, 0, 0, 0],
[6, 0, 0, 1, 9, 5, 0, 0, 0],
[0, 9, 8, 0, 0, 0, 0, 6, 0],
[8, 0, 0, 0, 6, 0, 0, 0, 3],
[4, 0, 0, 8, 0, 3, 0, 0, 1],
[7, 0, 0, 0, 2, 0, 0, 0, 6],
[0, 6, 0, 0, 0, 0, 2, 8, 0],
[0, 0, 0, 4, 1, 9, 0, 0, 5],
[0, 0, 0, 0, 8, 0, 0, 7, 9]
];

let testApp = () => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            allInput[map2D(i, j)].value = sample[i][j] || ""
        }
    }
}