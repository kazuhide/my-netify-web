window.addEventListener('DOMContentLoaded', (event) => {
    bitmovin.player.core.Player.addModule(window.bitmovin.player['polyfill'].default);
    bitmovin.player.core.Player.addModule(window.bitmovin.player['engine-bitmovin'].default);
    bitmovin.player.core.Player.addModule(window.bitmovin.player['container-mp4'].default);
    bitmovin.player.core.Player.addModule(window.bitmovin.player['container-ts'].default);
    bitmovin.player.core.Player.addModule(window.bitmovin.player['mserenderer'].default);
    bitmovin.player.core.Player.addModule(window.bitmovin.player['abr'].default);
    bitmovin.player.core.Player.addModule(window.bitmovin.player['xml'].default);
    bitmovin.player.core.Player.addModule(window.bitmovin.player['dash'].default);
    bitmovin.player.core.Player.addModule(window.bitmovin.player['hls'].default);
    bitmovin.player.core.Player.addModule(window.bitmovin.player['style'].default);
    bitmovin.player.core.Player.addModule(window.bitmovin.player['ui'].default);

    var player;

    var conf = {
        key: 'fa2e1e52-eef5-4d53-ad4d-0b01b906e950'
    };
    var source = {
        dash: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        progressive: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
        poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    };
    player = new bitmovin.player.core.Player(document.getElementById('player'), conf);

    player.load(source).then(function () {
        console.log('Successfully loaded source'); // Success!
    }, function () {
        console.log('Error while loading source'); // Error!
    });
});
