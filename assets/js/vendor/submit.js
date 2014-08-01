$(window).on("resize orientationchange", calculateHeight)

transitionToThankYou = function() {
  jQuery(".js-rsvp-interaction").hide()
  jQuery(".js-rsvp-interaction--complete").show()
  $("#hidden-iframe").off('load', transitionToThankYou)
}

matchHeightsForRsvpStates = function() {
  height = jQuery(".js-rsvp-interaction--form").height();
  jQuery(".js-rsvp-interaction").not(".js-rsvp-interaction--form").height(height);
}

selectRsvp = function() {
  $this = jQuery(this)
  jQuery(".js-rsvp-target").removeClass("js-rsvp--selected")
  $this.addClass("js-rsvp--selected")

  jQuery("#js-rsvp-input").val($this.data('rsvpValue'));
}

submitForm = function(event){
  event.preventDefault();

  $("#hidden-iframe").on('load', transitionToThankYou)
  transitionToInTransit()

  $('#js-rsvp-the-form').submit();
}

transitionToInTransit = function() {
  jQuery(".js-rsvp-submit").hide()
  jQuery(".js-rsvp-interaction").hide()
  jQuery(".js-rsvp-interaction--in-transit").show()
}

jQuery(function(){
  matchHeightsForRsvpStates()
  jQuery(window).on("resize orientationchange", matchHeightsForRsvpStates)
  jQuery(".js-rsvp-target").click(selectRsvp)
  jQuery(".js-rsvp-submit").click(submitForm)
});

