module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: {
        type: DataTypes.STRING,
        required: true
      }
    },
    {
      timestamps: false
    }
  );
  return User;
};
