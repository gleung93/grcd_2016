define(["jquery", "mixitup"], function($) {

  $( document ).ready(function() {
    //Firefox multiply fallback
    var FF = !(window.mozInnerScreenX == null);
    if(FF) {
        $(".intro-wrapper img").css("mix-blend-mode", "initial");
    }

    //Mix it Up
    var filterState;
    var graphicState = true;
    var motionState = true;
    var interactionState = true;
    $(function(){

      $('#Container').mixItUp({
      	animation: {
        duration: 300,
        effects: 'fade stagger(120ms) translateX(14%)',
        easing: 'ease',
        },
        load: {
          sort: 'name:asc'
        },
        controls: {

        },
        selectors: {
          filter: '.filter-home',
        },
        callbacks: {
          onMixEnd: function(state){
            console.log(state.activeFilter),
            filterState = state.activeFilter
            // alert(filterState);
          },
        }
      });
      $('.graphic').click(function() {
          $('.graphic-image').removeClass('hidden');
          $('.motion-image').addClass('hidden');
          $('.interaction-image').addClass('hidden');
      });
      $('.motion').click(function() {
          $('.motion-image').removeClass('hidden');
          $('.graphic-image').addClass('hidden');
          $('.interaction-image').addClass('hidden');
      });
      $('.interaction').click(function() {
          $('.interaction-image').removeClass('hidden');
          $('.graphic-image').addClass('hidden');
          $('.motion-image').addClass('hidden');
      });
      $('.all').click(function() {
          $('.interaction-image').removeClass('hidden');
          $('.graphic-image').removeClass('hidden');
          $('.motion-image').removeClass('hidden');
      });

    });
  });
});
