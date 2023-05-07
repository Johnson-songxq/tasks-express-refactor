module.exports = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //wildcard
  // res.setHeader('Access-Control-Allow-Origin', 'https://lazebear.github.io'); // wildcard
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
};
