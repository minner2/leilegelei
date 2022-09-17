import { RouteRecordRaw } from "vue-router";
import IndexPage from "../pages/IndexPage.vue";
import GamePage from "../pages/GamePage.vue";
import ConfigPage from "../pages/ConfigPage.vue";
import Lun from "../pages/Lun.vue";

export default [
  {
    path: "/",
    component: IndexPage,
  },
  {
    path: "/game",
    component: GamePage,
  },
  {
    path: "/config",
    component: ConfigPage,
  },
  {
    path: "/lun",
    component: Lun,
  },
] as RouteRecordRaw[];
