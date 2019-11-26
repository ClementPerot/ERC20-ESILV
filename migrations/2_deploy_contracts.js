const SafeMath = artifacts.require("SafeMath");
const ERC20 = artifacts.require("ERC20");

const ticker = "OC";
const totalSupply = 10**30;
const decimals = 8;

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(ERC20);

};
