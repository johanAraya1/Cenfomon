const MOVE_SPEED = 300; // normal: 100

export const loadInputs = (kCtx, player) => {
    const dirs = {
        "left": kCtx.vec2(-MOVE_SPEED, 0),
        "right": kCtx.vec2(MOVE_SPEED, 0),
        "up": kCtx.vec2(0, -MOVE_SPEED),
        "down": kCtx.vec2(0, MOVE_SPEED),
    }
    Object.entries(dirs).forEach(([dir, vec]) => {
        kCtx.keyPress(dir, () => {
            const aniName = 'run'.concat(dir.replace(/^./, dir[0].toUpperCase()));
            player.play(aniName);

        });
        kCtx.keyDown(dir, () => {
            player.move(vec);
        });
        kCtx.keyRelease(dir, () => {
            player.stop()
        })
    });
}