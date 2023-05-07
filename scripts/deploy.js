const hre = require("hardhat");

async function main() {
  const MTK = await hre.ethers.getContractFactory("MyToken");
  const mtk = await MTK.deploy(unlockTime, { value: lockedAmount });

  await mtk.deployed();

  console.log(`Contracts deployed to ${mtk.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
