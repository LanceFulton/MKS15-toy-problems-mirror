$(function(){
  
  
  $('p').each(function() {
    var textArr = $(this).text().split(' ');
    $(this).empty();
    for (var i = 0; i < textArr.length; i++) {
      var span = '<span>' + textArr[i] + ' ' + '</span>';
      $(this).append(span);
    };
    var color = function () {
      $('span').attr( 'style', function() { return 'color:rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'})
    }
    color();
    setInterval(color, 1000);
  })







  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second



});