$(function(){

  var randomColorGen = function() {

    var ranCol = function() {
      return Math.floor(Math.random() * 256);
    }
    
    var r = ranCol()
    var g = ranCol()
    var b = ranCol()
    return "color:rgb(" + r + "," + g + "," + 3 + ")"
  }

  var worder = function(words) {
    return words.split(' ');
  }

  var ps = $('p');

  for (var i = 0; i<ps.length; i++) {

    var p = $(ps[i]).text();
    var str = ''
    var words = worder(p);

    for (var j = 0; j<words.length; j++) {
      word = words[j]
      str += "<span> "+words[j]+"</span>"
      console.log(str);
    }
      ps.html(str);
  }

  var allRandomColors = function() {
    $('span').attr('style', randomColorGen)
  }

  setInterval(allRandomColors, 100);

});