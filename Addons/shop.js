(function () {
    var start = new Date;
    start.setUTCHours(0, 0, 0);

    function pad(num) {
        return ("0" + parseInt(num)).substr(-2);
    }

    function tick() {
        var now = new Date;
        if (now > start) { // too late, go to tomorrow
            start.setDate(start.getDate() + 1);
        }
        var distance = start - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('shop').innerHTML =
            hours + "h " + minutes + "m " + seconds + "s";
        setTimeout(tick, 1000);
    }

    document.addEventListener('DOMContentLoaded', tick);
})();