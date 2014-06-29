;(function() {

    beers = function(){
        $.ajax({
          url: "beers"
        }).done(function(beers) {
          $('#beers').html(JSON.stringify(beers));
        });
    }

    people = function(){
        $.ajax({
          url: "people"
        }).done(function(beers) {
          $('#people').html(JSON.stringify(beers));
        });
    }

    votes = function(){
        $.ajax({
          url: "votes"
        }).done(function(beers) {
          $('#votes').html(JSON.stringify(beers));
        });
    }

    beers();
    people();
    votes();

})();

