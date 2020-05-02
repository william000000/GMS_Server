export const newRecord = async (model, queryObject) => {
 	return await model.insertMany(queryObject);
};

export const findById = async (model, queryObject) => {
  return model.findById(queryObject).then((result) => result.toJSON());
};
export const findByInput = async (model, data) => {
  return model.find(data).then((result) => result);
};
