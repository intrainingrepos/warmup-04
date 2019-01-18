'use strict';

const superagent = require('superagent');

function fetchPeopleWithPromises() {
  let url = "https://swapi.co/api/people/";

  superagent.get(url)

      let urlArray = [];
      for(let i = 0; i < starWarsResults.body.results.length; i++){
        urlArray.push(starWarsResults.body.results[i].url);
      }

      let promiseArray = [];
      for(let i = 0; i < urlArray.length; i++){
        promiseArray.push(superagent.get(urlArray[i]));
      }
      Promise.all(promiseArray)
      .then((result) => {
        for(let i = 0; i < result.length; i++){
          console.log(result[i].body.name);
        }

      })
      .catch((err) => {
        throw new Error(err);
      });
    })
    .catch();
}

fetchPeopleWithPromises();