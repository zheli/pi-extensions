import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  pi.registerCommand("hello", {
    description: "Show a greeting from pi-extensions",
    handler: async (args, ctx) => {
      const name = args.trim() || "world";
      ctx.ui.notify(`Hello, ${name}!`, "info");
    },
  });
}
