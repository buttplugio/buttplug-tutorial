import Vue from "vue";
import Router from "vue-router";
import Intro from "./components/Intro";
import ChooseConnection from "./components/ChooseConnection";
import DownloadIntiface from "./components/DownloadIntiface";
import CreateBrowserConnection from "./components/CreateBrowserConnection";
import CreateIntifaceConnection from "./components/CreateIntifaceConnection";
import SetupIntifaceDesktop from "./components/SetupIntifaceDesktop";
import DiscoverDevices from "./components/DiscoverDevices";
import ControlDevices from "./components/ControlDevices";
import Support from "./components/Support";
import Welcome from "./components/Welcome";
import Terms from "./components/Terms";
import Overview from "./components/Overview";
import Conclusion from "./components/Conclusion";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "intro",
      component: Intro,
    },
    {
      path: "/choose-connection",
      name: "choose-connection",
      component: ChooseConnection,
    },
    {
      path: "/download-intiface",
      name: "download-intiface",
      component: DownloadIntiface,
    },
    {
      path: "/setup-intiface-desktop",
      name: "setup-intiface-desktop",
      component: SetupIntifaceDesktop,
    },
    {
      path: "/create-browser-connection",
      name: "create-browser-connection",
      component: CreateBrowserConnection,
    },
    {
      path: "/create-intiface-connection",
      name: "create-intiface-connection",
      component: CreateIntifaceConnection,
    },
    {
      path: "/discover-devices",
      name: "discover-devices",
      component: DiscoverDevices,
    },
    {
      path: "/control-devices",
      name: "control-devices",
      component: ControlDevices,
    },
    {
      path: "/support",
      name: "support",
      component: Support,
    },
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome,
    },
    {
      path: "/terms",
      name: "terms",
      component: Terms,
    },
    {
      path: "/overview",
      name: "overview",
      component: Overview,
    },
    {
      path: "/conclusion",
      name: "conclusion",
      component: Conclusion,
    },
  ],
});
