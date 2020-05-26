const User = require('./user');

module.exports = (sequelize, DataTypes) => {
  const Weet = sequelize.define(
    'user',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id'
        }
      },
      content: { type: DataTypes.STRING, allowNull: false }
    },
    {
      timestamps: false
    }
  );
  return Weet;
};
