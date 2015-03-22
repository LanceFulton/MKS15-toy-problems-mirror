$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  /*
.before(price); // before the element
.after(price); // after the element
.prepend()  -- add as first child
.append() -- add as last child
  */

  var pArray = $('p').text().match(/\S+/g);
  console.log("1: pArray = '" + pArray + "'");
  
  // Remove <P>s...
  $('p').empty();

  // Exract Paragraphs / words
  console.log("2: pArray len = " + pArray.length); // FIX!
  var paragraphArray = [];
  for (var i = 0; i < pArray.length; i++) {
    paragraphArray.push( String(pArray[i]).split(" ") );
    console.log("2.5: len = " + paragraphArray[i].length + "; paragraph = " + paragraphArray[i]);
    $('p').prepend("<span>" + paragraphArray[i] + "</span> ");
  };

paragraphArray[0] = String(pArray[0]).split(" ").innerHtml;
  console.log("3: " + paragraphArray[0]);
  // Wrap words in <p>



  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second



});