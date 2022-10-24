import { proxy } from "valtio";

const states = proxy({
  isConnected: false,
  input: {},
});

export default states;
