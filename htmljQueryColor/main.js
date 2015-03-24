$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  var words = $("p").text().split(" ");
  $("p").empty();
  $.each(words, function(i, v) {
    $("p").append($("<span>").text(v));
  });

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  //shuffle helper
  function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  var colors = ['red', 'blue', 'black', 'yellow', 'green', 'purple'];

  function random(){
    Shuffle(colors);
    for( var i = 0; i <= colors.length; i++){
      $('span').css({'color' : colors[i]});
    }
  }
  
  window.setInterval( function(){random();}, 1000 )

});