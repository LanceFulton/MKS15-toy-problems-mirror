$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second



  var words = document.getElementsByTagName('p')
  for (var i = 0; i<words.length; i++){
    var wordsArray = words[i].innerText.split(" ")
    for (var j = 0; j < wordsArray.length; j++){
      wordsArray[j] = "<span>" + wordsArray[j] + "</span>"
    }
    result= wordsArray.join(" ");
  }

  function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

  setInterval(function(){
    $('p').html(result);
    $('span').each(function(){
      var color = get_random_color();
      $(this).css('color', color);
      })
    }, 1000);
  });
