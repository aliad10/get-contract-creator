import { getCode } from "./getCode.js";

export async function binarySearch(arr, low, high, contractAddress) {
  let mid;
  if (high >= low) {
    mid = Math.trunc((high + low) / 2);
  }
  if (high == low) {
    return low;
  }

  if ((await getCode(contractAddress, mid.toString(16))) != "0x") {
    return binarySearch(arr, low, mid, contractAddress);
  } else if ((await getCode(contractAddress, mid.toString(16))) == "0x") {
    return binarySearch(arr, mid + 1, high, contractAddress);
  } else {
    return -1;
  }
}
