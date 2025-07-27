import tanstackRouter from "@tanstack/router-plugin/vite";
import unocss from "unocss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "solid",
			autoCodeSplitting: true,
			semicolons: true,
			routeTreeFileHeader: [
				"// biome-ignore-all lint/suspicious: automatically generated file",
			]
		}),
		unocss(),
		solidPlugin(),
	],
});
