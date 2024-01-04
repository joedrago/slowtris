import { Slowtris } from "./Slowtris.js"

window.onload = () => {
    console.log("onload")
    window.slowtris = new Slowtris("board")
    window.slowtris.render()

    window.keybinds = {
        ArrowLeft: "MOVE_LEFT",
        ArrowRight: "MOVE_RIGHT",
        ArrowDown: "MOVE_DOWN",
        ArrowUp: "FLIP_CLOCKWISE",
        " ": "HARD_DROP"
    }

    document.addEventListener(
        "keydown",
        (event) => {
            const keyName = event.key
            // console.log(`keyName: ${keyName}`)
            if (window.keybinds[keyName]) {
                window.slowtris.action(window.keybinds[keyName])
            }
        },
        false
    )
}
