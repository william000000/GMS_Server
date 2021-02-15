process.env.DEBUG = 'mongo-seeding';
const path = require("path");
const { Seeder } = require("mongo-seeding");

const config = {
	database: "mongodb://127.0.0.1:27017/gms_server",
	dropDatabase: false,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve("./2_user/superAdmin"),
	{
    extensions: ['ts', 'js', 'cjs', 'json'],
		transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
	}
);
try {
  await	seeder.import(collections);
	console.log("Successfully Seeded");
} catch (err) {
	console.log("Seeding Error", err);
}
