import type { Plugin } from "rollup";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

type Compiler = {
  transformSync: (code: string, options: Record<string, unknown>) => {
    code: string;
    map?: string;
  };
};

function loadCompiler(): Compiler {
  try {
    const native = require("@swc/core");
    
    return native;
  } catch (nativeError) {
    const wasm = require("@swc/wasm");

    return wasm;
  }
}

export default function swcFallback(): Plugin {
  let compiler: Compiler;

  return {
    name: "swc",

    buildStart() {
      compiler = loadCompiler();
    },

    transform(code, id) {
      if (id.includes("node_modules") || !/\.(js|jsx|ts|tsx)$/.test(id)) {
        return null;
      }

      const result = compiler.transformSync(code, {
        filename: id,
        sourceMaps: true,
        jsc: {
          target: "es2020",
          parser: {
            syntax: id.endsWith(".ts") || id.endsWith(".tsx") ? "typescript" : "ecmascript",
            tsx: id.endsWith(".tsx"),
            jsx: id.endsWith(".jsx")
          },
          transform: {
            react: {
              runtime: "automatic",
              importSource: "preact",
              development: false
            }
          }
        },
        module: {
          type: "es6"
        }
      });

      return {
        code: result.code,
        map: result.map ? JSON.parse(result.map) : null
      };
    }
  };
}
