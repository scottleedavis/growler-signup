(function(){

  var app = angular.module('growlerSignup', ['ngResource']);

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };

  });

  app.factory('BeerFactory', ['$http',function($http) {

    var factory = {};
    var urlBase = '/beers'
    factory.index = function(){
      return $http.get(urlBase);
    };

    return factory;

  }]);

  app.controller('BeerController', ['$scope', 'BeerFactory',
      function($scope, BeerFactory){
    

    this.data = beer_store;//BeerFactory.index();


  }]);

  var beer_store = [
    {
      id: 0,
      name: 'Epic IPA',
      percentage: 11.0
    },
    {
      id: 1,
      name: 'Oakshire Ride Your Bike',
      percentage: 8.6
    },
    {
      id: 2,
      name: 'Vertigo Friar Mikes IPA',
      percentage: 6.1
    },
    {
      id: 3,
      name: 'Ninkasi Tricerahops IPA',
      percentage: 8.8
    },
    {
      id: 4,
      name: 'Caldera Oatmeal Stout',
      percentage: 7.2
    }
  ];

  app.controller('PeopleController', function(){
    this.data = people_store;
  });

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

  app.controller('VotesController', function(){
    this.data = vote_store;
  });  

  var vote_store = [
  {
    id: 0,
    person_id: 1,
    beer_id: 1,
    date: '6/21/2014'
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

})();