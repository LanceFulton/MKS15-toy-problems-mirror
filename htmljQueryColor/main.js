$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  //Use jQuery to select all p tags
  var $p = $('p');

  //Loop through each p element one at a time
  for (var i = 0; i < $('p').length; i++){
    //only select the current p element
    $thisP = $("p:eq(" + i + ")");

    //split the text into separated words by space
    var words = $thisP.text();
    words = words.split(' ');
    //reset the text inside the p tag
    $thisP.text("");

    //loop through each word
    for (var j = 0; j < words.length; j++){
      //append new span wrapper to the p element
      newSpan = document.createElement("span");
      $thisP.append(newSpan);
      //set the text of the newly created span to the current word
      $thisP.children().last().text(words[j] + " ");
    }
  }



  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  setInterval(function(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    $('span').css('color', "rgb(" + r + "," + g + "," + b + ")");
  }, 1000);


});