const request = require('supertest');
const server = require('../api/server');

describe('server', () =>{
    it('should be in testing enviroment', () =>{
        expect(process.env.DB_ENV)
        .toBe('testing')
    });
});
// Register endpoint tests
describe('register', () =>{
    it('should give status code 201 when successful register', () =>{
        return request(server)
        .post('/api/auth/register')
        .send({username: 'cash', password:'myPassword'})
        .then(response =>{
            expect(response.status)
            .toBe(201)
        })
    });
    it('should return a 500 on error registering new user', () =>{
        return request(server)
        .post('/api/auth/register')
        .send({username:'thisUser', password:})
        .then(response =>{
            expect(response.status)
            .toBe(404)
        })
    });
});