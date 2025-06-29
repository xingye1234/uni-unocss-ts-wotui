import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

import Components from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCss = await import("unocss/vite").then((i) => i.default);

  return {
    plugins: [
      Components({
        resolvers: [WotResolver()]
      }),
      uni(),
      UnoCss(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true, // Suppress deprecation warnings from dependencies
        },
      },
    },
  };
});
