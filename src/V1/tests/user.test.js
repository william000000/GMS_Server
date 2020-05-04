import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../app";

chai.use(chaiHttp);
chai.should();

describe("User authentication tests", () => {
  it("User should be able to login with email", done => {
    chai
      .request(app)
      .post("/api/auth/signin")
      .send({
        email: "jordankayinamura@gmail.com",
        password: "dangerous"
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("User should be able to login with telephone", done => {
    chai
      .request(app)
      .post("/api/auth/signin")
      .send({
        telephone: "0781268923",
        password: "dangerous"
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("User should not be able to login when password is incorrect", done => {
    chai
      .request(app)
      .post("/api/auth/signin")
      .send({
        telephone: "0781268923",
        password: "dangerous20"
      })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});
