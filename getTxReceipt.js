import axios from "axios";
import { url } from "./config.js";
export async function getTxReceipt(block_num) {
  let payload = JSON.stringify({
    jsonrpc: "2.0",
    method: "alchemy_getTransactionReceipts",
    params: [
      {
        blockNumber: "0x" + block_num.toString(16),
      },
    ],
    id: 1,
  });

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: payload,
    url,
  };

  let response = (await axios(options)).data;

  return response["result"]["receipts"];
}
