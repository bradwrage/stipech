  window.addEventListener("message", postMessageReceived, false);

      function postMessageReceived()
      {
        console.log('postMessageReceived', arguments);
      }

      jQuery(function(){
        jQuery(".js-rsvp-target").click(function(){
          $this = jQuery(this)
          jQuery(".js-rsvp-target").removeClass("js-rsvp--selected")
          $this.addClass("js-rsvp--selected")

          jQuery("#js-rsvp-input").val($this.data('rsvpValue'));
        });

        jQuery(".js-rsvp-submit").click(function(event) {
          event.preventDefault();
          $(this).closest('form').submit();
        });
      });