var CertificateAuthority = artifacts.require("./CertificateAuthority.sol");

module.exports = function(deployer) {
  deployer.deploy(CertificateAuthority);
};
