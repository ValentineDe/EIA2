var GAME;
(function (GAME) {
    class Background {
        constructor() {
            //Wiese
            var farbverlauf = GAME.crc2.createLinearGradient(0, 0, 0, 1000);
            farbverlauf.addColorStop("0.1", "#A5DF00");
            farbverlauf.addColorStop("0.4", "#74DF00");
            farbverlauf.addColorStop("1", "#3ADF00");
            GAME.crc2.fillStyle = farbverlauf;
            GAME.crc2.fillRect(0, 0, GAME.crc2.canvas.width, GAME.crc2.canvas.height);
            this.drawHedge(700, 400, "#247A07");
            this.drawHedge(200, 800, "#247A07");
            this.drawHedge(400, 800, "#247A07");
            this.drawHedge(-80, 300, "#247A07");
            this.drawHedge(700, 1120, "#247A07");
            this.drawHedgeVertical(700, 1000, "#247A07");
            this.drawHedgeVertical(450, 400, "#247A07");
            this.drawHedgeVertical(450, 500, "#247A07");
            this.drawHedgeVertical(200, 300, "#247A07");
            this.drawCageBlack(255, 0);
            this.drawCageWhite(255, 1300);
        }
        drawHedge(_x, _y, _fillColor) {
            var farbverlauf = GAME.crc2.createLinearGradient(0, 0, 600, 0);
            farbverlauf.addColorStop("0.2", "#2D9A09");
            farbverlauf.addColorStop("0.5", "#298A08");
            farbverlauf.addColorStop("1", _fillColor);
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = farbverlauf;
            GAME.crc2.arc(_x - 30, _y - 65, 30, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x - 10, _y - 65, 40, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x + 30, _y - 65, 40, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x + 70, _y - 65, 40, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x + 100, _y - 65, 40, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x + 140, _y - 65, 40, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x + 180, _y - 65, 40, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x + 220, _y - 65, 40, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x + 240, _y - 65, 30, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
        }
        drawHedgeVertical(_x, _y, _fillColor) {
            var farbverlauf = GAME.crc2.createLinearGradient(0, 0, 600, 0);
            farbverlauf.addColorStop("0.2", "#2D9A09");
            farbverlauf.addColorStop("0.5", "#298A08");
            farbverlauf.addColorStop("1", _fillColor);
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = farbverlauf;
            GAME.crc2.arc(_x - 30, _y - 60, 30, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x - 30, _y - 20, 40, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x - 30, _y + 20, 40, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(_x - 30, _y + 60, 30, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
        }
        drawCageBlack(_x, _y) {
            GAME.crc2.fillStyle = "black";
            GAME.crc2.fillRect(_x, _y, 400, 200);
        }
        drawCageWhite(_x, _y) {
            GAME.crc2.fillStyle = "white";
            GAME.crc2.fillRect(_x, _y, 400, 200);
        }
    }
    GAME.Background = Background;
})(GAME || (GAME = {}));
//# sourceMappingURL=background.js.map