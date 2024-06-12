const rootcontroller = (req, res) => {
  res.status(200).send({
    messsge: "Welcome to express",
  });
};
module.exports = rootcontroller;
