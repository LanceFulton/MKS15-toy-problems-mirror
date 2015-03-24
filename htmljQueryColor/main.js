$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  // split paragraph into words
  var $textArray = $('p').each(function(index,element){
    var $el = $(element);
    var words = $el.text().split(' ');
    // clear html
    $el.html('');

  // wrap each word in span tags
  for (var i = 0 ; i < words.length ; i++){
    var newSpan = $('<span>').text(words[i] + ' ');
    $el.append(newSpan);
  }

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  setInterval(function(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  })

});