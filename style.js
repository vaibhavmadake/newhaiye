// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 2000,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1500
  });

  $('#navigation_2_dropdown_1').on("click", function(){
		$('.dropdown-menu').toggleClass("active");
});

$('.dropdown-menu div div').on('click' , function(){	$('#navigation_2_dropdown_1').text($(this).text()); 
$('.dropdown-menu').toggleClass("active");																										
})


