// vite.config.ts
import tsconfigPaths from "vite-tsconfig-paths";
import reactRefresh from "@vitejs/plugin-react-refresh";
var config = {
  plugins: [
    reactRefresh(),
    tsconfigPaths()
  ]
};
var vite_config_default = config;
export {
  vite_config_default as default
};
