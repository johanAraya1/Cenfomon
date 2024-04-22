const AssetsLoader = (kaboomContext, configObj) => {

    const [roots, assets] = Object.entries(configObj)
        .map(([key, val]) => val);

    function loadAssets() {
        // console.log(roots);
        Object.keys(roots).forEach(rt => {
            kaboomContext.loadRoot(roots[rt]);
            Object.keys(assets).forEach(aType => {
                assets[aType].filter(sprite => sprite.root === roots[rt])
                    .forEach(sp => {
                        let opts = {};
                        if (sp.opts) opts = sp.opts;
                        kaboomContext.loadSprite(sp.kName, sp.path, opts);
                    });
            })
        });
    }

    return {
        loadAssets
    }
}

export default AssetsLoader;