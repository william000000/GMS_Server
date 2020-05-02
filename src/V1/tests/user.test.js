import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../app";

chai.use(chaiHttp);
chai.should();

describe("User controller", () => {
  it("should be to create a new account with valid inputs", done => {
    chai
      .request(app)
      .post("api/v1/auth/signup")
      .send({
        firstName:"bon",
        lastName: "boris",
        email:"bonvi1195001@gmail.com",
        password: "Rwandaa1!",
        gender:"Male",
        garage_id: 3,
        phoneNumber: "0000509900"
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});