var wins = 0;
var losses = 0;
var game = {
  number: 0,
  score: 0,
  images: ["emerald.png",
           "citrine.png",
           "aquamarine.png",
           "amethyst.png"],

  reset: function() {

    this.number = this.generateRandomNumber(19, 120);
    this.score = 0;
    $("#gameNumber").text(this.number.toString());
    $("#gameScore").text(this.score.toString());

    for(var i=0; i<this.images.length; i++){

        var $divTag = $("<div>");
        var $imgTag = $("<img>");

        var val = this.generateRandomNumber(1, 12);

        $imgTag.attr("cValue", val);
        $imgTag.attr("src", "assets/images/" + this.images[i]);
        $imgTag.attr("class", "crystal");
        $imgTag.appendTo($divTag);

        $divTag.appendTo("#crystalContainer");
    }
  },

  generateRandomNumber: function(min, max) {

    var n = Math.floor(Math.random() * (max-min+1)) + min;

    return n;
  },

  updateScore: function(num) {

    this.score += num;
    $("#gameScore").text(this.score.toString());
    if(this.score === this.number){
        this.reset();
        wins++;
    } else if(this.score > this.number){
        this.reset();
        losses++;
    }
  }
};

$(document).ready(function() {

  game.reset();

  $(".crystal").on("click", function() {

    var cValue = parseInt($(this).attr("cValue"));
    game.updateScore(cValue);
  });
});
