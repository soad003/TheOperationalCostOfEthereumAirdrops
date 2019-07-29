pragma solidity ^0.5.0;


import './IERC20.sol';

contract Airdropper {
    IERC20 public token;

    constructor(IERC20 _token) public {
        token = _token;
    }

    function airdrop(address[] memory _recipients, uint256 _amount) public {        
        for (uint256 i = 0; i < _recipients.length; i++) {
            require(token.transfer(_recipients[i], _amount));
        }
    }

    function airdropDynamic(address[] memory _recipients, uint256[] memory _amount) public {
        for (uint256 i = 0; i < _recipients.length; i++) {
                require(token.transfer(_recipients[i], _amount[i]));
        } 
    }
    
    function airdropApprove(address[] memory _recipients, uint256 _amount) public {        
        for (uint256 i = 0; i < _recipients.length; i++) {
            require(token.approve(_recipients[i], _amount));
        }
    }

    function airdropApproveDynamic(address[] memory _recipients, uint256[] memory _amount) public {
        for (uint256 i = 0; i < _recipients.length; i++) {
                require(token.approve(_recipients[i], _amount[i]));
        } 
    }

}