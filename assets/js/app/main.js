define(["jquery", "mixitup"], function($) {

  $( document ).ready(function() {
    sortAlpha('thumbnails');
    var filterState;
    var graphicState = true;
    var motionState = true;
    var interactionState = true;
    $(function(){

      $('#Container').mixItUp({
      	animation: {
        duration: 300,
        effects: 'fade stagger(120ms) translateX(14%)',
        easing: 'ease'
        },
        // load: {
        //   // filter: '.category-1,.category-2,.category-3',
        //   sort: 'my-order:asc'
        // },
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

  function sortAlpha(ul){
    console.log("sortingAlpha");
    var mylist = $('#'+ul);
    var listitems = mylist.children('li').get();
    listitems.sort(function(a, b) {
       return $(a).children('p').text().toUpperCase().localeCompare($(b).children('p').text().toUpperCase());
    })
    $.each(listitems, function(idx, itm) { mylist.append(itm); });
  }

});
