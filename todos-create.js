const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  data.id = uuid.v1();
  data.updatedAt = new Date().getTime();

  const params = {
    TableName: 'todos',
    Item: data
  };

  await dynamoDb.put(params).promise();
  return data;
};
