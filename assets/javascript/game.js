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

        var $imgTag = $("<img>");
        var val = this.generateRandomNumber(1, 12);
        var element = "#crystal_" + (i + 1).toString();
        $(element).empty();

        $imgTag.attr("cValue", val);
        $imgTag.attr("src", "assets/images/" + this.images[i]);
        $imgTag.attr("class", "crystal");
        $imgTag.appendTo(element);
    }

    $("#wins").text(wins.toString());
    $("#losses").text(losses.toString());
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
        $("#wins").text(wins.toString());
    } else if(this.score > this.number){
        this.reset();
        losses++;
        $("#losses").text(losses.toString());
    }
  }
};

$(document).ready(function() {

  game.reset();

  $(".crystalDiv").on("click", function() {

    var cValue = parseInt($("> .crystal", this).attr("cValue"));
    game.updateScore(cValue);
  });
});
