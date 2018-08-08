const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const request = require('request');

Given('I have app up and running', function () {
  process.env.PORT = 3001;
  require('../../bin/www');
})

Given('a variable set to {int}', function (number) {
  this.setTo(number)
})

When('I increment the variable by {int}', function (number) {
  this.incrementBy(number)
})

Then('the variable should contain {int}', function (number) {
  expect(this.variable).to.eql(number)
})

let globalResponse;

When('I get {string}', function (url, callback) {
  request({
    url: url,
    headers: {
      'x-session-id': '123',
      'x-flow-id': '456',
      'x-transaction-id': '789'
    }
  }, (error, response, body) => {
    if (error) {
      console.error(error);
      return callback(error);
    }
    return callback(null, globalResponse = response);
  });
});

When('I get access {string} with {string}', function (url, accessToken, callback) {
  request({
    url: url,
    headers: {
      'x-session-id': '123',
      'x-flow-id': '456',
      'x-transaction-id': '789',
      'x-access-token': accessToken
    }
  }, (error, response, body) => {
    if (error) {
      console.error(error);
      return callback(error);
    }
    return callback(null, globalResponse = response);
  });
});

Then('I can expect code {string}', function (code, callback) {
  try {
    console.info('got body', globalResponse.body);
    const jsonBody = JSON.parse(globalResponse.body);
    expect(jsonBody.code).to.equal(code);
    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
});

Then('I can expect message {string}', function (message, callback) {
  try {
    const jsonBody = JSON.parse(globalResponse.body);
    expect(jsonBody.message).to.equal(message);
    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }

});
