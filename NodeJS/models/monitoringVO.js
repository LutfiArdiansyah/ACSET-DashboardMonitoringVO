"use strict";
module.exports = (sequelize, DataTypes) => {
  const monitoring_vo = sequelize.define(
    "monitoring_vo",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      project_code: DataTypes.STRING,
      project_name: DataTypes.STRING,
      contract_type: DataTypes.STRING,
      so_number: DataTypes.STRING,
      amount_main_contract: DataTypes.BIGINT,
      bill_main_contract: DataTypes.BIGINT,
      percent_contract_payment: DataTypes.DOUBLE(10, 2),
      percent_work_progress: DataTypes.DOUBLE(10, 2),
      amount_contract_vo: DataTypes.BIGINT,
      bill_vo: DataTypes.BIGINT,
      percent_vo_payment: DataTypes.DOUBLE(10, 2),
      percent_vo_progress_work: DataTypes.DOUBLE(10, 2),
      total_contract: DataTypes.BIGINT,
      total_billing: DataTypes.BIGINT,
      percent_total_payment: DataTypes.DOUBLE(10, 2),
      potential_vo: DataTypes.DOUBLE(10, 2),
      created_date: DataTypes.STRING,
    },
    { freezeTableName: true, timestamps: false }
  );
  monitoring_vo.associate = function (models) {};
  return monitoring_vo;
};
