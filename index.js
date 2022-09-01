import { findContractDeployer } from "./findContractDeployer.js";
import { contractAddress } from "./config.js";
async function getContractDeployer() {
  console.log(
    "CONTRACT DEPLOYER IS: ",
    await findContractDeployer(contractAddress)
  );
}

getContractDeployer();
