$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  var pTags = $(document).find('p');
  pTags.each(function(i){
    var text = $(this).text().split(' ');
    $(this).html(text.reduce(function(mem, word){
      return mem + ' <span>' + word + '<span>';
    }));
  }
  
  $('span').each(function(i){
    setInterval(function(){
      this.css('color', '#' + Math.floor(Math.random() * 999999));
    }.bind($(this)), 1000);
  });

});
