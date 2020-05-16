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
    // it('should give status code 201 when successful register', () =>{
    //     return request(server)
    //     .post('/api/auth/register')
    //     .send({username: 'cashl', password:'myPassword'})
    //     .then(response =>{
    //         expect(response.status)
    //         .toBe(201)
    //     })
    // });
    it('should return a 500 on error registering new user', () =>{
        return request(server)
        .post('/api/auth/register')
        .send({username:'thisUser'})
        .then(response =>{
            expect(response.status)
            .toBe(500)
        })
    });
});

describe('login', () =>{
    it('should give status 401 error loggin in', () =>{
        return request(server)
        .post('/api/auth/login')
        .send({username:'', password:''})
        .then(res =>{
            expect(res.status)
            .toBe(401)
        })
    })

    it('should return 200 for correct login', () =>{
        return request(server)
        .post('/api/auth/login')
        .send({username:'cashl', password:'myPassword'})
        .then(res =>{
            expect(res.status)
            .toBe(200)
        })
    })
})