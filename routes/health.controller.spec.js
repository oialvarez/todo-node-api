'use strict';

const { expect } = require('chai');
const { createRequest, createResponse } = require('node-mocks-http');
const { EventEmitter } = require('events');

describe('Health controller', () => {

    it('Should be ok to get /health', (done) => {
        const req = createRequest();
        const res = createResponse({ eventEmitter: EventEmitter });

        const controller = require('./health.controller');

        res.on('end', () => {
            expect(res.statusCode).to.be.equal(200);
            done();
        });

        controller(req, res);

    });
});