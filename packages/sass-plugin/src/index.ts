import { Sinc } from "@sincronia/types";
import sass from "node-sass";
const run: Sinc.PluginFunc = async function(
  context: Sinc.FileContext,
  content: string,
  options: any
): Promise<Sinc.PluginResults> {
  try {
    let res = sass.renderSync({
      file: context.filePath
    });
    return {
      output: res.css.toString("utf8"),
      success: true
    };
  } catch (e) {
    throw e;
  }
};

export { run };
