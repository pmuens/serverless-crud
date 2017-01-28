const faunadb = require('faunadb');
const q = faunadb.query;

// We are assuming you created a database using https://dashboard.fauna.com
// and have pasted the secret for a server key to that database into
// package.json and serverless.yml in place of MY_FAUNADB_SERVER_SECRET

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
});

client.query(q.Create(q.Ref("classes"), { name: "todos" }))
.then(()=>{
  return client.query(
    q.Create(q.Ref("indexes"), {
      name: "all_todos",
      source: q.Ref("classes/todos")
    }))
})
.then(console.log.bind(console))
.catch(console.error.bind(console))
