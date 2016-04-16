  $( document ).ready(function() {

    //Mobile Navigation
    $('.menu').click(function() {
        $('header').toggleClass('active');
    });
    $('.popup-vimeo, .projectsAnchor').click(function() {
        $('header').removeClass('active');
    });

    //Firefox multiply fallback
    var FF = !(window.mozInnerScreenX == null);
    if(FF) {
        $(".intro-wrapper img").css("mix-blend-mode", "initial");
    }

    //Draggable
    Draggable.create(".drag", {
      throwProps: true,
      throwResistance: "2000",
      bounds: $("#boundary"),
    });

    //Lightbox
    $('.popup-vimeo').magnificPopup({
      closeBtnInside: false,
      type:'iframe',
      callbacks: {
        open: function() {
          //$("body").css({"height": "100%", "overflow": "hidden"});
          //$('body').bind('touchmove', function(e){e.preventDefault()})
        },
        close: function() {
          //$('body, #player').unbind('touchmove')
          //$("body").css({"height": "initial", "overflow": "initial"});
        }

      }
    });

    //Hide Current profile link
    $(".item[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("activeProject");
        }
    });

    $(".projectsAnchor[href], .news[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("activeLink");
        }
    });


    //Change navbar on scroll
    if ($('.intro-container').length) {
      var mainbottom = $('.intro-container').offset().top + $('.intro-container').height()-25;
      //On load too
      var stop = Math.round($(window).scrollTop());

      if (stop > mainbottom) {
          $('header').removeClass('landingStyle');
          $('.projectsAnchor').addClass("activeLink");
      } else {
          $('header').addClass('landingStyle');
          $('.projectsAnchor').removeClass("activeLink");
      }

      // on scroll,
      $(window).on('scroll',function(){

          // we round here to reduce a little workload
          var stop = Math.round($(window).scrollTop());

          if (stop > mainbottom) {
              $('header').removeClass('landingStyle');
              $('.projectsAnchor').addClass("activeLink");
          } else {
              $('header').addClass('landingStyle');
              $('.projectsAnchor').removeClass("activeLink");
          }

      });
    }

    /*Smooth Scroll to Projects*/
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 750, 'swing');
          return false;
        }
      }
    });

    //Mix it Up
    var filterState;
    var graphicState = true;
    var motionState = true;
    var interactionState = true;
    $(function(){

      $('#Container').mixItUp({
      	animation: {
        duration: 400,
        effects: 'fade translateY(-14%)',
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
            filterState = state.activeFilter
            // alert(filterState);
          },
        }
      });

      $('#ContainerMore').mixItUp({
        animation: {
        duration: 300,
        effects: 'fade translateY(-14%)',
        easing: 'ease',
        },
        load: {
          sort: 'random'
        },
        controls: {

        },
        selectors: {
          filter: '.filter-home',
        },
        callbacks: {
          onMixEnd: function(state){
            filterState = state.activeFilter
            // alert(filterState);
          },
        }
      });

      $('.graphic').click(function() {
          $('img.print').removeClass('hidden');
          $('img.motion').addClass('hidden');
          $('img.interaction').addClass('hidden');
      });
      $('.motion').click(function() {
          $('img.print').addClass('hidden');
          $('img.motion').removeClass('hidden');
          $('img.interaction').addClass('hidden');
      });
      $('.interaction').click(function() {
          $('img.print').addClass('hidden');
          $('img.motion').addClass('hidden');
          $('img.interaction').removeClass('hidden');
      });
      $('.all').click(function() {
         $('img.print').removeClass('hidden');
         $('img.motion').removeClass('hidden');
         $('img.interaction').removeClass('hidden');
      });
    });
  });
