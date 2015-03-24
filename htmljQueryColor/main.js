$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend


  // Exract Paragraphs / words

  var pArray = $('p').text().match(/\S+/g);
  console.log("1: pArray = '" + pArray + "'");
  
  //    Remove <P>s...
  $('p').empty();


  // Wrap words in <p> & <span>
  var paragraphArray = [];
  for (var i = 0; i < pArray.length; i++) {
    paragraphArray.push( String(pArray[i]).split(" ") );
    console.log("2.5: len = " + paragraphArray[i].length + "; paragraph = " + paragraphArray[i]);
    $('p').prepend("<span>" + paragraphArray[i] + "</span> ");
  };


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  var colors = ["Red", "Pink", "Orange", "Brown", "Darkgreen", "Green", "LightBlue", "Blue", "Black"];

  var t = setInterval( (function() {
  
    $('p').children('span').each( function() {
      var randColor = Math.floor(Math.random()*colors.length-1);
      $(this).css("color", colors[randColor]);
    });

  }), 1000);


});