$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var pgrab = $('p').text().split(" ");  // gets words from p into array

  //  debugger;

//   for (var i = 0; i < pgrab.length; i++) {
//     $( "p" ).wrap(function() {
//   return "<div class='" + $( this ).text() + "'></div>";
// });
//   }
    console.log(pgrab);
  console.log(pgrab[0]);
  console.log(pgrab[1]);

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

function changeColors() {
  $('p').css('color', 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')')
};

  setInterval(changeColors, 1000)
});

//couldn't figure out first solution
