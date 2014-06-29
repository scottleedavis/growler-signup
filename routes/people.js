
var people_store = [
  {
    id: 0,
    name: 'Joe Bob'
  },
  {
    id: 1,
    name: 'Carrie Stevens'
  },
  {
    id: 2,
    name: 'John Doe'
  }
];

exports.index = function(req, res) {
    res.send(people_store);
};
 
exports.post = function(req, res) {
    var person = req.body;
    person['id'] = __.last(people_store).id+1;
    people_store.push(person);
    res.send(person);
};

exports.get = function(req, res) {
    var id = req.params.id;
    var result = __.find(people_store, function(s){
        return s.id.toString() === id;
    });
    res.send(result);
};
 
exports.put = function(req, res) {
    var id = req.params.id;
    var person = req.body;
    person.id = parseInt(id);
    var result = __.find(people_store, function(s){
        return s.id.toString() === req.params.id;
    });
    if( result ){
        result.name = person.name;
    }
    res.send(result);
};

exports.delete = function(req, res) {
    var id = parseInt(req.params.id);
    var person = __.findWhere(people_store, {id: id})
    people_store = __.without(people_store, person);
    res.send(person);
};

