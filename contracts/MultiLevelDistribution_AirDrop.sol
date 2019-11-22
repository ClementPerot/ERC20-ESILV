pragma solidity ^0.5.0;

import "./IERC20.sol";

contract Ownable {
  address public owner;

  function _Ownable() public {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    if (msg.sender != owner) {
      revert();
    }
    _;
  }

  function transferOwnership(address newOwner) public onlyOwner {
    if (newOwner != address(0)) {
      owner = newOwner;
    }
  }
}

contract MultiLevelDistribution_AirDrop is Ownable {

    function MultiLevelDistribution(address _tokenAddr, address[] memory dests, uint256[] memory values)public onlyOwner returns (uint256) {
       				 uint256 i = 0;
        while (i < dests.length) {
           IERC20(_tokenAddr).transfer(dests[i], values[i]);
           i += 1;
        }
        return(i);
    }

    function AirDrop ( address receiver, uint256 value) public {
      address _tokenAddr = 0x03C6207A31fC4cD219f82f30dEcC19b427aa16B7; //address of my token
      IERC20(_tokenAddr).transfer(receiver, value);
  }

}
