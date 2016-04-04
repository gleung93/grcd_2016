define(["jquery"], function($) {

  $( document ).ready(function() {
    sortAlpha('thumbnails');
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
