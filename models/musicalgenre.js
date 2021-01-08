'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class musicalgenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.musicalgenre.hasMany(models.djmusicalgenre);
    }
  };
  musicalgenre.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'musicalgenre',
  });
  return musicalgenre;
};