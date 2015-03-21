$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  var pArray = $('p').text();
  console.log("pArray = " + pArray);
  //$.contains(pArray, ' ');

  // Exract Paragraphs / words
  var paragraphArray = [];
  for (var i = 0; i < pArray.length; i++) {
    paragraphArray = String(pArray[i]).split(" ");
    console.log("len = " + paragraphArray[i].length + " paragraph = " + paragraphArray[i]);
  };

paragraphArray[0] = String(pArray[0]).split(" ").innerHtml;
  console.log(paragraphArray[0]);
  // Wrap words in <p>



  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second



});