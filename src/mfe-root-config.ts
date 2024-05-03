import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication(
  "@mfe/navbar",
  () => System.import<LifeCycles>("@mfe/navbar"),
  (location) => true,
  { domElement: document.getElementById("nav") }
);

registerApplication(
  "@mfe/react",
  () => System.import<LifeCycles>("@mfe/react"),
  (location) => ["/app", "/react"].includes(location.pathname),
  { domElement: document.getElementById("react") }
);

registerApplication(
  "@mfe/vueapp",
  () => System.import<LifeCycles>("@mfe/vueapp"),
  (location) => ["/app", "/vue"].includes(location.pathname),
  { domElement: document.getElementById("vue") }
);

start({
  urlRerouteOnly: true,
});
