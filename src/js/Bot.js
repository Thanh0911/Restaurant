// document.addEventListener( 'DOMContentLoaded', function() {
//     var splide = new Splide( '.splide',{
//         type   : 'loop',
//         perPage: 1,
//         focus  : 'center',
//         transition: '3s'
//     } );
//     splide.mount();
//   } );
var splide = new Splide( '.splide.splider-bot', {
  type    : 'loop',
  perPage : 4,
  autoplay: true,
} );

splide.mount();