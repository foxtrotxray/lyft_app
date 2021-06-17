const { server } = require("../server")
const request = require('supertest');

const agent = request.agent(server);

describe('POST /test', function() {
    it('returns a 400 with invalid request', function(done) {
        request(server)
            .post('/test')
            .expect(400, done);
    });
    it('responds with every third character', function(done) {
        request(server)
            .post('/test')
            .send({string_to_cut: "iamyourlyftdriver"})
            .expect({return_string: "muydv"})
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

  });
