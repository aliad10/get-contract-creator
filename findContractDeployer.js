import { getBlockNum } from "./getBlockNum.js";
import { binarySearch } from "./binarySearch.js";
import { getTxReceipt } from "./getTxReceipt.js";

export async function findContractDeployer(contract_address) {
  let currNum = await getBlockNum();
  let arr = [];
  for (let i = 0; i < currNum; i++) {
    arr.push(i);
  }

  let result_block_num = await binarySearch(
    arr,
    0,
    arr.length - 1,
    contract_address
  );

  let receipts = await getTxReceipt(result_block_num);
  for (let i = 0; i < receipts.length; i++) {
    if (receipts[i]["contractAddress"] == contract_address.toLowerCase()) {
      return receipts[i]["from"];
    }
  }
}
