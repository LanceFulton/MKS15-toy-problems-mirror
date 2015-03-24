$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  // gets words from p into array

  $('p').each(function(){
    $(this).html($(this).html().replace(/[a-zA-Z,.]+/g, "<span>$&</span>"));
    // http://stackoverflow.com/questions/10300122/jquery-to-wrap-certain-word-in-strong-tag
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace



  });

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  function changeColors() {
    $('span').each(function() { // each loops through every element and changes into random color
      $(this).css('color', 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')')
    });
  };

  changeColors();
  setInterval(changeColors, 1000);

});

$('p').each(function(index,element) {
  var $el = $(element); // grabs the entire paragraph
  var words = $el.text().split(' '); // creates array with words
  $el.html(''); // then clear the element since we are going re-add what we need back in
  for (var i = 0; i < words.length; i++) {
    var newSpan = $('<span>').text(words[i] + ' ');
    $el.append(newSpan); // add the span and word back in
  }
});
