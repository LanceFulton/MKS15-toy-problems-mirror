$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  var wordsArray = $('p').text()
  console.log('wordsArray', wordsArray);

  var wordArray = wordsArray.split(" ");
  console.log('wordArray', wordArray)


  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i] !== null) {
      $('p').append('<span class = "colors">' + wordArray[i] + " " + '</span>')
      //I would like to get rid of the empty spans cause by spaces
    };
  }
  var randomColor = Math.floor(Math.random()*16777215).toString(16);

  $('.colors').style('color', randomColor) //syntax
});