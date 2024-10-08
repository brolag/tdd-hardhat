const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("TokenModule", (m) => {
  const initialSupply = 1000n;
  const token = m.contract("Token", [initialSupply]);

  return { token };
});

module.exports = TokenModule;