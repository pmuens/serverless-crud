# Serverless CRUD

Serverless service which provides a basic CRUD scaffold.

## Installation

Make sure that you use Serverless v1.

1. Run `serverless install --url https://github.com/pmuens/serverless-crud` to install the service in your current working directory
2. Next up cd into the service with `cd serverless-crud`
3. Run `npm install`
4. Create a database via https://fauna.com/serverless-cloud-sign-up
5. Get a server access key secret for your database and paste it into `package.json` and `serverless.yml` in place of `MY_FAUNADB_SERVER_SECRET`
6. Run `npm run setup-schema` to set up the database.
7. Deploy with `serverless deploy`

## How to use

Simply perform requests against the exposed endpoints:

### Create

```bash
curl -X POST https://XXXX.execute-api.region.amazonaws.com/dev/todos --data '{ "body" : "Learn Serverless" }'
```

### Read all


```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/todos
```

### Read one

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/todos/<id>
```

### Update

```bash
curl -X PUT https://XXXX.execute-api.region.amazonaws.com/dev/todos/<id> --data '{ "body" : "Understand Serverless" }'
```

### DELETE

```bash
curl -X DELETE https://XXXX.execute-api.region.amazonaws.com/dev/todos/<id>
```

## Browse your data in FaunaDB

Login to https://dashboard.fauna.com to see your database. Browse
the records you've created using the `all_todos` index.

## AWS services used

- Lambda
- API Gateway
