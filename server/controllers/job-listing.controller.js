const db = require("../database");
const Jobs = db.jobs;

exports.findAll = (req, res) => {
  const title = req.query.title;

  Jobs.findAll({ }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials."
    });
  });
};
