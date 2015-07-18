<!--
// scripts

$(document).ready(function(){

    // menu animation
    var click = 0;
    $('#expand').click(function() {
        if (click == 0) {
            $('#menu-cover').first().show('slow');
            $('#menu').show()
            $('#menu').animate({'opacity': '1'})
            
            click = 1;
        }
        else {
            $('#menu-cover').hide('slow');
            $('#menu').hide()
            $('#menu').animate({'opacity': '0'})
            
            click = 0;
        }
    });

    // welcome animation 
    $('#welcome').animate({'opacity': '1'}, {duration: 1000})
    $('#explore').click(function() {
        $('#welcome').animate({'opacity':'0'});
        $('#welcome-cover').animate({'opacity':'0'});
        $('#welcome-cover').hide();
        $('#welcome').hide();
    });

    // svg lines

    var gem_offset = $('#gem > .topic').offset();
    var stone_offset = $('#stone > .topic').offset();
    var metal_offset = $('#metal > .topic').offset();
    var photo_offset = $('#photo > .topic').offset();
    var pigment_offset = $('#pigment > .topic').offset(); 
    var dye_offset = $('#dye > .topic').offset();
    var ink_offset = $('#ink > .topic').offset();
    var end_height = $(window).width();


    var snap = Snap('#svg-bg');
    var line1 = snap.paper.line(0, 100, stone_offset.left + 49, stone_offset.top + 36).attr({stroke:'#555555', strokeWidth:2});
    var line2 = snap.paper.line(gem_offset.left + 113, gem_offset.top + 23, stone_offset.left + 60, stone_offset.top + 163).attr({stroke:'#555555', strokeWidth:2});
    var line3 = snap.paper.line(stone_offset.left + 165, stone_offset.top + 88, metal_offset.left + 8, metal_offset.top + 112).attr({stroke:'#555555', strokeWidth:2});
    var line4 = snap.paper.line(metal_offset.left + 135, metal_offset.top + 122, photo_offset.left + 83, photo_offset.top + 9).attr({stroke:'#555555', strokeWidth:2});
    var line5 = snap.paper.line(photo_offset.left + 144, photo_offset.top + 55, pigment_offset.left + 51, pigment_offset.top + 156).attr({stroke:'#555555', strokeWidth:2});
    var line6 = snap.paper.line(pigment_offset.left + 125, pigment_offset.top + 170, dye_offset.left + 48, dye_offset.top + 36).attr({stroke:'#555555', strokeWidth:2});
    var line7 = snap.paper.line(dye_offset.left + 120, dye_offset.top + 28, ink_offset.left + 57, ink_offset.top + 162).attr({stroke:'#555555', strokeWidth:2});
    var line8 = snap.paper.line(ink_offset.left + 170, ink_offset.top + 99, end_height, 180).attr({stroke:'#555555', strokeWidth:2});
    $(window).resize(function(){

        gem_offset = $('#gem > .topic').offset();
        stone_offset = $('#stone > .topic').offset();
        metal_offset = $('#metal > .topic').offset();
        photo_offset = $('#photo > .topic').offset();
        pigment_offset = $('#pigment > .topic').offset();   
        dye_offset = $('#dye > .topic').offset();
        ink_offset = $('#ink > .topic').offset();
        end_height = $(window).width();
        line1.remove();
        line2.remove();
        line3.remove();
        line4.remove();
        line5.remove();
        line6.remove();
        line7.remove();
        line8.remove();
        line1 = snap.paper.line(0, 100, stone_offset.left + 49, stone_offset.top + 36).attr({stroke:'#555555', strokeWidth:2});
        line2 = snap.paper.line(gem_offset.left + 113, gem_offset.top + 23, stone_offset.left + 60, stone_offset.top + 163).attr({stroke:'#555555', strokeWidth:2});
        line3 = snap.paper.line(stone_offset.left + 165, stone_offset.top + 88, metal_offset.left + 8, metal_offset.top + 112).attr({stroke:'#555555', strokeWidth:2});
        line4 = snap.paper.line(metal_offset.left + 135, metal_offset.top + 122, photo_offset.left + 83, photo_offset.top + 9).attr({stroke:'#555555', strokeWidth:2});
        line5 = snap.paper.line(photo_offset.left + 144, photo_offset.top + 55, pigment_offset.left + 51, pigment_offset.top + 156).attr({stroke:'#555555', strokeWidth:2});
        line6 = snap.paper.line(pigment_offset.left + 125, pigment_offset.top + 170, dye_offset.left + 48, dye_offset.top + 36).attr({stroke:'#555555', strokeWidth:2});
        line7 = snap.paper.line(dye_offset.left + 120, dye_offset.top + 28, ink_offset.left + 57, ink_offset.top + 162).attr({stroke:'#555555', strokeWidth:2});
        line8 = snap.paper.line(ink_offset.left + 170, ink_offset.top + 99, end_height, 180).attr({stroke:'#555555', strokeWidth:2});
    });

});

-->