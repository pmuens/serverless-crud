const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: 'todos',
  };

  const result = await dynamoDb.scan(params).promise();
  return result.Items;
};
