var postMessagesReceived = 0;

var listenForHiddenIframeLoad = function(event) {
  if (event.data !== "hidden-iframe-loaded") {
    return false;
  }

  postMessagesReceived += 1;

  if (postMessagesReceived === 2) {
    transitionToThankYou()
  }
}

transitionToThankYou = function() {
  jQuery(".js-rsvp-interaction").hide()
  jQuery(".js-rsvp-interaction--complete").show()
}

matchHeightsForRsvpStates = function() {
  height = jQuery(".js-rsvp-interaction--form").height();
  jQuery(".js-rsvp-interaction").height(height);
}

selectRsvp = function() {
  $this = jQuery(this)
  jQuery(".js-rsvp-target").removeClass("js-rsvp--selected")
  $this.addClass("js-rsvp--selected")

  jQuery("#js-rsvp-input").val($this.data('rsvpValue'));
}

submitForm = function(event){
  event.preventDefault();
  $('#js-rsvp-the-form').submit();
}

transitionToInTransit = function() {
  jQuery(".js-rsvp-submit").hide()
  jQuery(".js-rsvp-interaction").hide()
  jQuery(".js-rsvp-interaction--in-transit").show()
}

jQuery(function(){
  window.addEventListener("message", listenForHiddenIframeLoad, false);

  matchHeightsForRsvpStates()

  jQuery(".js-rsvp-target").click(selectRsvp)
  jQuery(".js-rsvp-submit").click(submitForm)
  jQuery(".js-rsvp-submit").click(transitionToInTransit)
});

