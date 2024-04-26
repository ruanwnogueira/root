import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@mfe/navbar",
  app: () => System.import<LifeCycles>("http://localhost:8081/mfe-navbar.js"),
  activeWhen: [""],
});

registerApplication({
  name: "@mfe/react",
  app: () => System.import<LifeCycles>("http://localhost:8080/mfe-newApp.js"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "@mfe/vueapp",
  app: () => System.import<LifeCycles>("http://localhost:8082/js/app.js"),
  activeWhen: ["/vue"],
});

start({
  urlRerouteOnly: true,
});
