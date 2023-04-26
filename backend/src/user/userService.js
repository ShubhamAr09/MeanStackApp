const userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
  return userModel.find({}).exec();
};

module.exports.createUserDBService = (userDetails) => {
  const userModelData = new userModel({
    name: userDetails.name,
    phone: userDetails.phone,
    email: userDetails.email,
  });

  return userModelData.save();
};

module.exports.updateUserDBService = (id,userDetails) => {    
    return userModel.findByIdAndUpdate(id,userDetails).exec();
};

module.exports.removeUserDBService = (id) => {
    return userModel.findByIdAndDelete(id).exec();
};

