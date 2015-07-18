<!-- 
//// scripts

(function ($) {

//// drupal interaction
Drupal.behaviors.myModuleBehavior = {
  attach: function (context, settings) {

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
        $('#welcome-text').animate({'opacity':'0'})
        $('#welcome-cover').animate({'opacity':'0'})
        $('#welcome-cover').hide()
        $('#welcome-text').hide()
        $('#welcome').hide()
    })


  }
};

}(jQuery));

-->