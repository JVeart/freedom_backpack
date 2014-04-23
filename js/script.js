jQuery(document).ready(function() {
	
	function maillink(e){
		e.preventDefault();
		var maillink  = this;
		jQuery.ajax({
			type: 'POST',
			data: {
				event_type: jQuery(maillink).data('ev')                       
			},
			success: function(result) {
				if (jQuery("#contacts").hasClass("contacts")||jQuery("#contacts").hasClass("contacts slideLeft")){
					jQuery('#description').removeClass("description slideRight").addClass("description slideLeft");
					jQuery('#description').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(e) { 
						jQuery('#description').hide();
						jQuery('#contacts').show();
						jQuery('#contacts').removeClass("contacts slideLeft").addClass("contacts slideRight");
					});
					jQuery(document).ready(function(){
						jQuery(".mail_link").fadeOut(200,function(){
							jQuery(".back_landing").fadeIn(200);
						});
					});
				}
			}
		});
	}
	function backlanding(e){
		e.preventDefault();
		var backlanding  = this;
		jQuery.ajax({
			type: 'POST',
			data: {
				event_type: jQuery(backlanding).data('ev')   
			},
			success: function(result) {
					jQuery('#contacts').addClass("slideLeft");                  
					jQuery('#contacts').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(e) { 
						jQuery('#contacts').hide();
						jQuery('#description').show();
						jQuery('#contacts').removeClass("contacts slideRight slideLeft").addClass("contacts slideLeft");
						jQuery('#description').removeClass("description slideLeft").addClass("description slideRight");
					});
					jQuery(document).ready(function(){
						jQuery(".back_landing").fadeOut(200,function(){
							jQuery(".mail_link").fadeIn(200);
						});
					});
			}
		});
	}
	function scrolltop(){
		jQuery('body,html').animate({
			scrollTop: 0
		}, 1900,'easeOutExpo');
		return false;
	}
	function readquote() {
		jQuery("#quote").fadeIn(2000);
		jQuery( "#quote" ).slideDown("slow");
	}
	function scrollmain(){
		jQuery("html, body").animate({ scrollTop: 710 }, 600);
	}
	
	jQuery(".mail_link").click(function (e) {  
		maillink(e);
	});
	jQuery(".back_landing").click(function(f) {             
		backlanding(f);
	});
	jQuery('#travel_up').click(function(){
		scrolltop();
	});
	jQuery('#travel_up2').click(function(){
		scrolltop();
	});
	jQuery('#travel_up_mobile').click(function(){
		scrolltop();
	});
	jQuery('#contact_me').click(function(g){
		if (jQuery("#contacts").hasClass("contacts slideLeft")){
			maillink(g);
		}
		scrolltop();
	});
	jQuery('#contact_me_mobile').click(function(g){
		if (jQuery("#contacts").hasClass("contacts slideLeft")){
			maillink(g);
		}
		scrolltop();
	});
	jQuery('#button_quote').click(function(){
		readquote();
	});
	jQuery('#social_buttons').mouseover(function(){
		jQuery('#button_share').hide();
		jQuery('#buttons_share').show();
	});
	jQuery('#social_buttons').mouseout(function(){
		jQuery('#buttons_share').hide();
		jQuery('#button_share').show();
	});
	jQuery('#button_read').click(function(){
		scrollmain();
	});
});
