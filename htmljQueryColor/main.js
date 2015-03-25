$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  $('body p').each( function(){
  	var text = $( this ).text().split(" ");
  	for(var i = 0; i < text.length; i++){
  		if(text[i] !== ""){
          text[i] = "<span>" + text[i] + "</span>";
  		}
  	}
  	console.log(text);
  	text = text.join(" ");
  	console.log(text);
    $( this ).html(text);
  })

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  var changeColor = function(){
	  $('body p span').each( function(){
	  	var randHue = Math.floor(Math.random()*360);
	    var randSaturation = Math.floor(Math.random()*80) + 20 + "%";
	    var randLightness = Math.floor(Math.random()*80) + 20 + "%";
	    var randColor = 'hsl(' + randHue + ',' + randSaturation + ',' + randLightness + ')';
	    $(this).css({'color': randColor});
	  });
  }

  changeColor();
  setInterval(changeColor, 1000);

});