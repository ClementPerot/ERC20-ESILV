const SafeMath = artifacts.require("SafeMath");
const ERC20 = artifacts.require("ERC20");
const MultiLevelDistribution_AirDrop = artifacts.require("MultiLevelDistribution_AirDrop")
const WhitelistedRole = artifacts.require("WhitelistedRole")


const name = "ouiCoin"
const ticker = "OC"
const totalSupply = 10**30;
const decimals = 8;
const rate = 4;


module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, ERC20);
  deployer.deploy(ERC20, name, ticker, totalSupply, decimals);
  deployer.deploy(MultiLevelDistribution_AirDrop);
  deployer.deploy(WhitelistedRole);
};
