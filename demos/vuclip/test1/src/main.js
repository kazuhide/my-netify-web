window.onload = function() {
    var player;

    var conf = {
        key: 'fa2e1e52-eef5-4d53-ad4d-0b01b906e950'
    };
    var source = {
        hls: 'https://vuclip-a.akamaihd.net/d8a3deff5d529b9f2e3dd33970699344/vp63207_V20200309055454/hlsc_whe2931_V20200603083706.m3u8',
        poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    };

    player = new bitmovin.player.Player(document.getElementById('player'), conf);

    player.load(source).then(function () {
        console.log('Successfully loaded source'); // Success!
    }, function () {
        console.log('Error while loading source'); // Error!
    });
}
