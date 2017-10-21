$(function(){
	$('.navbar-custom li:nth-child(8)').addClass('nav-active');
	$('#form-for-who').change(function(){
		if ($(this).val() == "2") {
			$('.js-business').hide();
		} else {
			$('.js-business').show();
		}
	});
});