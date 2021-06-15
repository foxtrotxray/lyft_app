const { server } = require("../server")
const request = require('supertest');

const agent = request.agent(server);

describe('GET /test', function() {
    it('responds, with json', function(done) {
        request(server)
            .post('/test')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('responds with every third character', function(done) {
        let input = {string_to_cut: "iamyourlyftdriver"}
        request(server)
            .post('/test')
            .send(input)
            .expect({return_string: 'muydv'})
            .expect(200, done);
    });

  });
