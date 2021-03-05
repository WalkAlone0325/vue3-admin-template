<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";
import { computed } from "vue";

export default {
  components: { SidebarItem, Logo },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    // computed
    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });
    const routes = computed(() => {
      // console.log(router);
      return router.options.routes;
    });
    const showLogo = computed(() => store.state.settings.sidebarLogo);

    const sidebar = computed(() => store.getters.sidebar);
    return {
      sidebar,
      activeMenu,
      routes,
      showLogo,
      variables: computed(() => variables),
      isCollapse: computed(() => !sidebar.opened)
    };
  }
};
</script>
