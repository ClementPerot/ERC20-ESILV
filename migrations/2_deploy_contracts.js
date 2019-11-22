const SafeMath = artifacts.require("SafeMath");
const ERC20 = artifacts.require("ERC20");


module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(ERC20);

};
