module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("job_listing", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    linkedInId: {
      type: Sequelize.STRING
    },
    place: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    seniorityLevel: {
      type: Sequelize.STRING
    },
    company: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING(500)
    },
    employmentType: {
      type: Sequelize.STRING
    },
    industries: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATEONLY
    },
    jobFunction: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};
