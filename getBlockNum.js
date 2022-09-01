import axios from "axios";
import { url } from "./config.js";
export async function getBlockNum() {
  const payload = JSON.stringify({
    jsonrpc: "2.0",
    method: "eth_blockNumber",
    params: [],
    id: 0,
  });

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: payload,
    url,
  };
  const response = (await axios(options)).data;

  return Number(response["result"]);
}
