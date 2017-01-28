'use strict';

const faunadb = require('faunadb');
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
});

module.exports = (event, callback) => {
  console.log("readOne todo "+event.pathParameters.id);
  return client.query(q.Get(q.Ref("classes/todos/"+event.pathParameters.id)))
  .then((response) => {
    console.log("success", response);
    callback(false, response);
  }).catch((error) => {
    console.log("error", error);
    callback(error)
  })
};
