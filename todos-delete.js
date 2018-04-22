const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName : 'todos',
    Key: {
      id: event.pathParameters.id
    }
  };

  const result = await dynamoDb.delete(params).promise();
  return params.Key;
};
