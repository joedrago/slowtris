import { init, update, viewMatrix } from "./tetris/models/Game.js"

export class Slowtris {
    constructor(domId) {
        this.domId = domId
        this.tetris = init()
        // update(this.tetris, "RESTART")
    }

    cellClass(cell) {
        if (!cell) {
            return "cell cell-empty"
        }
        return `cell cell-${cell}`
    }

    action(actionName) {
        this.tetris = update(this.tetris, actionName)
        this.render()
    }

    render() {
        const view = viewMatrix(this.tetris)
        // console.log(view)

        let html = ""
        for (const row of view) {
            html += `<div class="row">`
            for (const cell of row) {
                html += `<span class="${this.cellClass(cell)}"></span>`
            }
            html += `</div>\n`
        }

        document.getElementById(this.domId).innerHTML = html
    }
}
