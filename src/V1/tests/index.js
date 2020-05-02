import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../app";

chai.use(chaiHttp);
chai.should();

describe("App tests", () => {
  it("should return the homepage", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
