var GAME;
(function (GAME) {
    class Background {
        constructor() {
            //Himmel und Wiese  
            GAME.crc2.fillStyle = "green";
            GAME.crc2.fillRect(0, 0, GAME.crc2.canvas.width, GAME.crc2.canvas.height);
            GAME.crc2.fillStyle = "#9DF2F6";
            GAME.crc2.fillRect(0, 0, GAME.crc2.canvas.width, 300);
        }
    }
    GAME.Background = Background;
})(GAME || (GAME = {}));
//# sourceMappingURL=background.js.map