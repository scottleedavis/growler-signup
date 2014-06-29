
var vote_store = [
  {
    id: 0,
    person_id: 1,
    beer_id: 1,
    date: '6/28/2014'
  },
  {
    id: 1,
    person_id: 0,
    beer_id: 3,
    date: '6/28/2014'
  },
  {
    id: 2,
    person_id: 2,
    beer_id: 2,
    date: '6/28/2014'
  },
];

exports.index = function(req, res) {
    res.send(vote_store);
};
 
exports.post = function(req, res) {
    var vote = req.body;
    vote['id'] = __.last(vote_store).id+1;
    vote_store.push(vote);
    res.send(vote);
};

exports.get = function(req, res) {
    var id = req.params.id;
    var result = __.find(vote_store, function(s){
        return s.id.toString() === id;
    });
    res.send(result);
};
 
exports.put = function(req, res) {
    var id = req.params.id;
    var vote = req.body;
    vote.id = parseInt(id);
    var result = __.find(vote_store, function(s){
        return s.id.toString() === req.params.id;
    });
    if( result ){
        result.person_id = vote.person_id;
        result.beer_id = vote.beer_id;
        result.date = vote.date;
    }
    res.send(result);
};

exports.delete = function(req, res) {
    var id = parseInt(req.params.id);
    var vote = __.findWhere(vote_store, {id: id})
    vote_store = __.without(vote_store, vote);
    res.send(vote);
};

