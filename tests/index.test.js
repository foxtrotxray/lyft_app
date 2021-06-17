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
        let input = {string_to_cut: "iamyourlyftdriver"}
        request(server)
            .post('/test')
            .send(input)
            .expect({return_string: "muydv"})
            .expect('Content-Type', /json/)
            .expect(200, done);
        input = {string_to_cut: "brtneh aiinsqm 4xi26svu 3ha4n 4ls8jeqxc nroaeplt14 tcmvre es[ssbwab g0de44"}
        request(server)
            .post('/test')
            .send(input)
            .expect({return_string: "this is a secret message"})
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

  });
