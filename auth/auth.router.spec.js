const request = require('supertest');
const server = require('../api/server');

describe('server', () =>{
    it('should be in testing enviroment', () =>{
        expect(process.env.DB_ENV)
        .toBe('testing')
    });
});