document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type   : 'loop',
        perPage: 1,
        focus  : 'center',
        transition: '3s'
    } );
    splide.mount();
  } );
  