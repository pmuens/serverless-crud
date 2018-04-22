
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  data.id = event.pathParameters.id;
  data.updatedAt = new Date().getTime();

  const params = {
    TableName : 'todos',
    Item: data
  };

  await dynamoDb.put(params).promise();
  return data;
};
