const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("StorageModule", (m) => {
  const storage = m.contract("Storage");
  const owner = m.contract("Owner", [7])

  return { storage, owner };
});
