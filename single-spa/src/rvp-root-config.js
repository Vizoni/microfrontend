import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@rvp/react-single",
  app: () =>
  System.import("@rvp/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@rvp/react-multiples",
  app: () =>
  System.import("@rvp/react-multiples"),
  activeWhen: ['/react-multiples'],
});

// registerApplication({
//   name: "@rvp/react-parcel",
//   app: () =>
//   System.import("@rvp/react-parcel"),
//   activeWhen: (location) => location.pathname === '/react-parcel',
// });

registerApplication({
  name: "@rvp/react-route",
  app: () =>
  System.import("@rvp/react-route"),
  activeWhen: (location) => location.pathname === '/react-route',
});


start({
  urlRerouteOnly: true,
});
