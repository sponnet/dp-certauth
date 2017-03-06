pragma solidity ^0.4.8;

contract CertificateAuthority{

  address owner;

  enum UserStatus { Unknown,Active,Deprecated }

  mapping(address=>address) useraliases;
  mapping(address=>UserStatus) userstatus;

  function CertificateAuthority() {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function addAlias(address _address,address _addressalias) restricted {
    userstatus[_address] = UserStatus.Deprecated;
    useraliases[_address] = _addressalias;
  }

  function registerPerson(address _person) restricted {
    userstatus[_person] = UserStatus.Active;
  }

  function isRegistered(address _person) returns (bool) {
    if (userstatus[_person] == UserStatus.Active){
      return bool(true);
    }
    if (userstatus[useraliases[_person]] == UserStatus.Active){
      return bool(true);
    }
    return bool(false);
  }
}