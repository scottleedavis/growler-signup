growler-signup
==============

a nodejs &amp; expressjs example app


Installation
------------

```
npm install
```

Run
---

```
node server.js
```

And point your browser to [http://localhost:3000](http://localhost:3000)


Api definitions
===============


Beer
----
```
  GET /beers
  GET /beers/#id
  POST /beers  
  PUT /beers/#id 
  DELETE /beers/#id
```
example beer json format
```
  {
    id: 4,
    name: 'Caldera Oatmeal Stout',
    percentage: 7.2
  }
```
People
------
```
  GET /people
  GET /people/#id
  POST /people  
  PUT /people/#id 
  DELETE /people/#id
```
example person json format
```
  {
    id: 2,
    name: 'John Doe'
  }
```
Votes
-----
```
  GET /votes
  GET /votes/#id
  POST /votes  
  PUT /votes/#id 
  DELETE /votes/#id
```
example votes json format
```
  {
    id: 0,
    person_id: 1,
    beer_id: 1,
    date: '6/28/2014'
  }
```


