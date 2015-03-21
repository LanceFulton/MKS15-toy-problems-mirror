$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  //1 I want to wrap all of the words in the paragraph in span tags. 


  $('p').wrap('<span></span>'); //All paragraph elements have span tags now, but words do not have tags. 

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  var randomize = function(){
    var picker = Math.floor(Math.random() * 6);
    //Set r, o ,y ,g ,b, p to numbers 1-6. Have function pick a random number and match it with 
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    $('span').css('color', colors[picker]);
  }

  setInterval(randomize, 1000);

});

