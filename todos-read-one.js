const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: 'todos',
    Key: {
      id: event.pathParameters.id
    }
  };

  result = await dynamoDb.get(params).promise();
  return result.Item;
};
