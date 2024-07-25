import { setConfig } from "@faustwp/core";
import templates from "./wp-templates";
import possibleTypes from "./possibleTypes.json";
import { RelayStylePaginationPlugin } from "./plugins/RelayStylePagination";

export default setConfig({
  templates,
  plugins: [new RelayStylePaginationPlugin()],
  experimentalToolbar: true,
  possibleTypes,
});
