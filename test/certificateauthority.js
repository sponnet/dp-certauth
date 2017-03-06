var CertificateAuthority = artifacts.require("./CertificateAuthority.sol");

contract('CertificateAuthority', function(accounts) {
  it("account should not exist", function() {
    return CertificateAuthority.deployed().then(function(instance) {
      return instance.isRegistered.call(accounts[0]);
    }).then(function(exists){
      assert.equal(exists, false, "account should not exist");
    });
  });
  it("should register a first account", function() {
    return CertificateAuthority.deployed().then(function(instance) {
      return instance.registerPerson(accounts[0]);
    });
  });
  it("account should exist", function() {
    return CertificateAuthority.deployed().then(function(instance) {
      return instance.isRegistered.call(accounts[0]);
    }).then(function(exists){
      assert.equal(exists, true, "account should exist");
    });
  });
});
