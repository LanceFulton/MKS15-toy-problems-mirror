$(function(){
  // can keep track of which p text came from
  // didn't want to use .text() because of white spaces before, middle, and after
  // used .innerHtml so i could trim white spaces before and after each p tag
  var temp;
  var array =  $('p').toArray();
  for (var i=0; i <array.length; i++){
    temp = array[i].innerHTML.trim().split(" ");
    for (var j=0; j<temp.length; j++){
      temp[j] = "<span>"+temp[j]+"</span>";
    }
    //assing array and joing by space
    array[i].innerHTML = temp.join(" ");
  }

//changing spans to random colors
  var changeColor = window.setInterval(function(){
   var spamArray = $('span');
   for (var x=0; x < spamArray.length; x++){
    var r = Math.floor( Math.random()*256);
    var b = Math.floor( Math.random()*256);
    var g = Math.floor( Math.random()*256);
    spamArray[x].style.color="rgb("+r+","+b+","+g+")";
   }
  }, 1000);









});



   // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
