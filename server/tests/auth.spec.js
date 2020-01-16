import Chai from "chai";
import chaiHttp from "chai-http";

import app from "../index";
import mochaAsync from '../helpers/mochaAsyncFunc';
import authData from './testData/authData';

const { expect } = Chai;
Chai.use(chaiHttp);

const { savedUsers } = authData;

describe('Endpoint /api/v1/auth/login', () => {
    it("should signin a user with an account",
        mochaAsync(async() => {
            const res = await Chai.request(app)
                .post("/api/v1/auth/login")
                .send({ email: savedUsers[0].email, password: savedUsers[0].password });

            expect(res.body.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.data).to.be.an('object');
            expect(res.body.data.token).to.be.a('string');
        })
    );
});