/** @format */

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"user",
		{
			user_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			wallet_address: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true /* 여기까지 */,
			},
			status: {
				type: DataTypes.STRING(50),
				allowNull: true,
				unique: false /* 여기까지 */,
			},
			discord_id: { type: DataTypes.STRING(10), allowNull: false },
			application: {
				type: DataTypes.JSON,
				allowNull: true,
				unique: true /* 여기까지 */,
			},
		},
		{
			charset: "utf8", // 한국어 설정
			collate: "utf8_general_ci", // 한국어 설정
			tableName: "User", // 테이블 이름 정의
			timestamps: false, // createAt, updateAt 활성화
			paranoid: true, // deleteAt 옵션
		}
	);
};
