import axios from "axios";
import { url } from "./config.js";
export async function getCode(contract_address, block_num) {
  let payload = JSON.stringify({
    jsonrpc: "2.0",
    method: "eth_getCode",
    params: [contract_address, "0x" + block_num],
    id: 0,
  });

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: payload,
    url,
  };

  let response = (await axios(options)).data;
  return response["result"];
}
