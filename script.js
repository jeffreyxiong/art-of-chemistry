<!--
// scripts

$(document).ready(function(){

    /// menu animation
        $('#expand').click(function(){
            $('#menu').toggleClass('expanded');

        });
        $('#hide').click(function(){
            $('#menu').toggleClass('expanded');
        })

        /// welcome animation 
        $('#welcome').animate({'opacity': '1'}, {duration: 1500});
        $('#welcome-cover').animate({'opacity': '1'}, {duration: 1500});
        $('#explore').click(function() {
            $('#main-title').animate({'opacity': '1'}, {duration: 1000});
            $('#welcome').animate({'opacity':'0'}, {duration: 1000});
            $('#welcome-cover').animate({'opacity':'0'}, {duration: 1000});
            $('#welcome-cover').hide(1000);
            $('#welcome').hide(1000);
            
        });

    /// svg artboard
    var snap = Snap('#svg-bg');

        //---- HEXAGON CLASS
        function Hexagon(x, y, side) {

            var c = Math.PI / 180,
                sin45 = Math.sin(45 * c) * side,
                sin15 = Math.sin(15 * c) * side,
                cos15 = Math.cos(15 * c) * side;

            this.x1 = x;
            this.y1 = y;

            this.x2 = x + sin45;
            this.y2 = y + sin45;

            this.x3 = this.x2 + cos15;
            this.y3 = this.y2 - sin15;

            this.x4 = this.x3 + sin15;
            this.y4 = this.y3 - cos15;

            this.x5 = this.x4 - sin45;
            this.y5 = this.y4 - sin45;

            this.x6 = x + sin15;
            this.y6 = y - cos15;

            this.points = [this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4, this.x5, this.y5, this.x6, this.y6];
        };
        Hexagon.prototype.draw = function(color, width, name) {
            //
            return snap.paper.polygon(this.points).attr({
                        stroke:color, 
                        strokeWidth:width,
                        fillOpacity:0,
                        id:name
                    });
        };
        Hexagon.prototype.getCornerX = function(point) {
            switch(point) {
                case 0:
                    return this.points[0];
                    break;
                case 1:
                    return this.points[2];
                    break;
                case 2:
                    return this.points[4];
                    break;
                case 3:
                    return this.points[6];
                    break;
                case 4:
                    return this.points[8];
                    break;
                case 5:
                    return this.points[10];
                    break;
            };
        };
        Hexagon.prototype.getCornerY = function(point) {
            switch(point) {
                case 0:
                    return this.points[1];
                    break;
                case 1:
                    return this.points[3];
                    break;
                case 2:
                    return this.points[5];
                    break;
                case 3:
                    return this.points[7];
                    break;
                case 4:
                    return this.points[9];
                    break;
                case 5:
                    return this.points[11];
                    break;
            };
        };

        //---- LINE CLASS
        function Line(x1, y1, x2, y2) {
            this.x1 = x1;
            this.x2 = x2;
            this.y1 = y1;
            this.y2 = y2;
        }
        Line.prototype.draw = function(color, width) {
            //
            return snap.paper.line(this.x1, this.y1, this.x2, this.y2).attr({stroke:color, strokeWidth:width});
        }

    // drawing
    var hex1 = new Hexagon(45, 470, 90),
        hex2 = new Hexagon(120, 205, 90),
        hex3 = new Hexagon(380, 135, 90),
        hex4 = new Hexagon(420, 285.5, 90),
        hex5 = new Hexagon(309.5, 395.5, 90),
        hex6 = new Hexagon(570.5, 326, 90),
        hex7 = new Hexagon(721, 367, 90),
        hex8 = new Hexagon(831, 257, 90),
        hex9 = new Hexagon(761, 517.5, 90);

        hex1.draw('#555555', 2, 'hex1');
        hex2.draw('#555555', 2, 'hex2');
        hex3.draw('#555555', 2, 'hex3');
        hex4.draw('#555555', 2, 'hex4');
        hex5.draw('#555555', 2, 'hex5');
        hex6.draw('#555555', 2, 'hex6');
        hex7.draw('#555555', 2, 'hex7');
        hex8.draw('#555555', 2, 'hex8');
        hex9.draw('#555555', 2, 'hex9');

    var line1 = snap.paper.line(hex1.getCornerX(4), hex1.getCornerY(4), hex2.getCornerX(1), hex2.getCornerY(1)).attr({stroke:'#555555', strokeWidth:2}),
        line2 = snap.paper.line(hex2.getCornerX(3), hex2.getCornerY(3), hex3.getCornerX(0), hex3.getCornerY(0)).attr({stroke:'#555555', strokeWidth:2});


    
});

-->