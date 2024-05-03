import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@mfe/navbar",
  app: () => System.import<LifeCycles>("@mfe/navbar"),
  activeWhen: [""],
});

registerApplication({
  name: "@mfe/react",
  app: () => System.import<LifeCycles>("@mfe/react"),
  activeWhen: ["/app", "/react"],
});

registerApplication({
  name: "@mfe/vueapp",
  app: () => System.import<LifeCycles>("@mfe/vueapp"),
  activeWhen: ["/app", "/vue"],
});

start({
  urlRerouteOnly: true,
});
