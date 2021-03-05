// import { computed, onMounted, ref } from "vue";
// import store from "@/store";

// export default function useFixOSBug() {
// const $subMenu = ref(null);

// const device = computed(() => store.state.app.device);

// onMounted(() => fixBugIniOS());

// // methods
// const fixBugIniOS = () => {
//   if ($subMenu) {
//     const handleMouseleave = $subMenu.value.handleMouseleave;
//     $subMenu.value.handleMouseleave = e => {
//       if (device.value === "mobile") {
//         return;
//       }
//       handleMouseleave(e);
//     };
//   }
// };
// }

export default {
  computed: {
    device() {
      return this.$store.state.app.device;
    }
  },
  mounted() {
    // In order to fix the click on menu on the ios device will trigger the mouseleave bug
    // https://github.com/PanJiaChen/vue-element-admin/issues/1135
    this.fixBugIniOS();
  },
  methods: {
    fixBugIniOS() {
      const $subMenu = this.$refs.subMenu;
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave;
        $subMenu.handleMouseleave = e => {
          if (this.device === "mobile") {
            return;
          }
          handleMouseleave(e);
        };
      }
    }
  }
};
