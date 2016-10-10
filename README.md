# Serverless CRUD

Serverless service which provides you a basic CRUD scaffold.

## Installation

Make sure that you use Serverless v1.

1. Run `serverless install --url https://github.com/pmuens/serverless-crud` to install the service in your current working directory
2. Next up cd into the service with `cd serverless-crud`
3. Run `npm install`
4. Deploy with `serverless deploy`

## How to use

Simply perform a requests against the exposed endpoint:

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

## AWS services used

- Lambda
- API Gateway
- DynamoDB
