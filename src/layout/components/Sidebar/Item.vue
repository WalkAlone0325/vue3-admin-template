<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    return props => {
      const { icon, title } = props;
      const vnodes = [];

      if (icon) {
        if (icon.includes("el-icon")) {
          vnodes.push(<i class={[icon, "sub-el-icon"]} />);
        } else {
          vnodes.push(<svg-icon icon-class={icon} />);
        }
      }

      if (title) {
        vnodes.push(<span slot="title">{title}</span>);
      }
      return vnodes;
    };
  }
});
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
