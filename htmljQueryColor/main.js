$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  // split paragraph into words
  var $textArray = $('p').text().split(' ')
  console.log($textArray);

  // wrap each word in span tags
  $textArray.each(function(){
  	$(this).wrap('<span></span>')
  })

  console.log($textArray);

  // take paragraph out of array
  $('p').empty()

  .append($textArray);

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second



});