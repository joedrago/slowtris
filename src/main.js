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

window.onControlL = (ev) => {
    window.slowtris.action("MOVE_LEFT")
}
window.onControlR = (ev) => {
    window.slowtris.action("MOVE_RIGHT")
}
window.onControlSL = (ev) => {
    window.slowtris.action("FLIP_COUNTERCLOCKWISE")
}
window.onControlSR = (ev) => {
    window.slowtris.action("FLIP_CLOCKWISE")
}
window.onControlD = (ev) => {
    window.slowtris.action("MOVE_DOWN")
}
window.onControlHD = (ev) => {
    window.slowtris.action("HARD_DROP")
}
