$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var myText=($('p').html())
  var myText_array=myText.split(" ");
  for (var i=0; i<myText_array.length; i++){
    myText_array[i]='<span class="color">'+myText_array[i]+'</span>';
  }

  $('p').html(myText_array.join(" "));


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  function generateColor(){
    map={};
    var r=Math.round((Math.random()*255)).toString(16);
    var g=Math.round((Math.random()*255)).toString(16);
    var b=Math.round((Math.random()*255)).toString(16);
    var myColor="#"+r+g+b;
    map['color']=myColor;
    return map;
  }

  function changeColor() {
    var mymap=generateColor();
  $('.color').css(mymap).show();
  }

  setInterval(changeColor, 1000);
  

});