/** @format */

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"dao",
		{
			server_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			token: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true /* 여기까지 */,
			},
			name: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: false /* 여기까지 */,
			},
			treasury: {
				type: DataTypes.STRING(50),
				allowNull: true,
				unique: false /* 여기까지 */,
			},
			member: {
				type: DataTypes.INTEGER,
				allowNull: true,
				unique: false /* 여기까지 */,
			},
			info: {
				type: DataTypes.STRING(50),
				allowNull: true,
				unique: false /* 여기까지 */,
			},
			extra: {
				type: DataTypes.JSON,
				allowNull: true,
				unique: false /* 여기까지 */,
			},
		},
		{
			charset: "utf8", // 한국어 설정
			collate: "utf8_general_ci", // 한국어 설정
			tableName: "Dao", // 테이블 이름 정의
			timestamps: false, // createAt, updateAt 활성화
			paranoid: true, // deleteAt 옵션
		}
	);
};
