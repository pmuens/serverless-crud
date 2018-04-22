'use strict';

const todosCreate = require('./todos-create.js');
const todosReadAll = require('./todos-read-all.js');
const todosReadOne = require('./todos-read-one.js');
const todosUpdate = require('./todos-update.js');
const todosDelete = require('./todos-delete.js');

module.exports.create = async (event) => {
  const result = await todosCreate.handler(event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(result),
  };
};

module.exports.readAll = async (event) => {
  const result = await todosReadAll.handler(event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(result),
  };
}

module.exports.readOne = async (event) => {
  const result = await todosReadOne.handler(event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(result),
  };
};

module.exports.update = async (event) => {
  const result = await todosUpdate.handler(event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(result),
  };
};

module.exports.delete = async (event) => {
  const result = await todosDelete.handler(event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(result),
  };
};
