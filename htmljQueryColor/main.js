$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var spanify = function(str) {
    var arr = str.split(' ');
    var results = [];
    for(var i = 0; i < arr.length; i++ ) {
      results.push('<span>' + arr[i] + '</span>');
    }
    return results.join(' ');
  };

  var elements = $('p');

  for( var i =0; i < elements.length; i++ ) {
    var text = $(elements[i]).html();
    $(elements[i]).html( spanify( text ) );
  }

  $('p').html( spanify( $('p').html() ) );

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  var colorize = function() {
    var spans = $('span');

    for( var i = 0; i < spans.length; i++ ) {
      var color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
      $(spans[i]).css('color', color);
    }
  };

  colorize();
  setInterval(colorize, 1000);

});