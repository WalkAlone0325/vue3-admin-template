<script>
import { defineComponent, Fragment } from "vue";

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
    return () => (
      <>
        {props.icon ? (
          props.icon.includes("el-icon") ? (
            <i class={[props.icon, "sub-el-icon"]} />
          ) : (
            <svg-icon icon-class={props.icon} />
          )
        ) : (
          ""
        )}
        {props.title ? <Fragment v-slots={title}>{props.title}</Fragment> : ""}
      </>
    );
  }
});
</script>
