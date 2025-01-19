const STATES = [
    "CORRECT",
    "INCORRECT"
]

map2D = (row, col) => {
    return row * 9 + col;
};

get2DIdx = (idx) => {
    return [Math.floor(idx / 9), idx % 9];
};
class Sudoku {
    constructor(inputs) {
        this.inputs = inputs;
        this.currIdx = 0;
        this.direction = 1;

    }

    getBoxIdx = (idx) => {
        let idxs = [];
        let [row, col] = get2DIdx(idx);
        let baseRow = Math.floor(row / 3) * 3;
        let baseCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let temp = map2D(baseRow + i, baseCol + j);
                if (temp != idx) idxs.push(temp);
            }
        }
        return idxs;
    }

    getRowIdx = (idx) => {
        let idxs = [];
        let [row, col] = get2DIdx(idx);
        for (let i = 0; i < 9; i++) {
            let temp = map2D(row, i);
            if (temp != idx) idxs.push(temp);
        }
        return idxs;
    }

    getColIdx = (idx) => {
        let idxs = [];
        let [row, col] = get2DIdx(idx);
        for (let i = 0; i < 9; i++) {
            let temp = map2D(i, col);
            if (temp != idx) idxs.push(temp);
        }
        return idxs;
    }
    check = (idx, value) => {
        let boxIdx = this.getBoxIdx(idx);
        let rowIdx = this.getRowIdx(idx);
        let colIdx = this.getColIdx(idx);
        let flag = true;
        boxIdx.forEach(idx => {
            if (parseInt(this.inputs[idx].value) === value) {
                flag = false;
                this.highlight([idx, ...boxIdx], "INCORRECT")
            }
        });
        rowIdx.forEach(idx => {
            if (parseInt(this.inputs[idx].value) === value) {
                flag = false;
                this.highlight([idx, ...rowIdx], "INCORRECT")
            }
        });
        colIdx.forEach(idx => {
            if (parseInt(this.inputs[idx].value) === value) {
                flag = false;
                this.highlight([idx, ...colIdx], "INCORRECT")
            }
        });
        if(flag) this.highlight([idx, ...boxIdx, ...colIdx, ...rowIdx], "CORRECT")
        return flag;
    };

    highlight = (idxs, state) => {
        if(state === "CORRECT") {
            idxs.forEach((idx) => {
                this.inputs[idx].parentElement.classList.add("green")
            })
        }
        if(state === "INCORRECT") {
            idxs.forEach((idx) => {
                this.inputs[idx].parentElement.classList.add("red")
            })
        }
    };

    clearHighlights = () => {
        this.inputs.forEach((inp) => {
            inp.parentElement.classList.remove("green")
            inp.parentElement.classList.remove("red")
        })
    }

    solve = () => {
        this.clearHighlights();
        if (this.currIdx == 81) {
            return true;
        }
        if (this.inputs[this.currIdx].getAttribute("disabled")) {
            this.currIdx += 1 * this.direction;
            return false;
        }
        this.direction = 1;
        let value = parseInt(this.inputs[this.currIdx].value) || 0;
        if (value === 9) {
            this.inputs[this.currIdx].value = ""
            this.currIdx--;
            this.direction = -1;
            return false;
        }
        this.inputs[this.currIdx].value = value + 1;
        if (this.check(this.currIdx, value + 1)) {
            this.currIdx++;
        }
    };
}
