$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var p = $('p');

  for (var i=0; i<p.length; i++) {
    var parts = p[i].innerHTML.trim().split(' ').join('</span> <span>');
    $(p[i]).html('<span>'.concat(parts, '</span>'));
  }

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  var changeColor = function() {
    $('span').css('color',function(){return 'rgb('+Math.floor(256*Math.random())+','+Math.floor(256*Math.random())+','+Math.floor(256*Math.random())+')';});
  };
  changeColor();
  setInterval(changeColor, 1000);


});
