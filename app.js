//*******************************************
//	DOCUMENT READY
//********************************************

$(document).ready(function() {
	$('.js-like').on('click', function(event){
		event.preventDefault()

		$(this).text('Liked!')
	})
})