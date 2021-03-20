import SvgIcon from "@/components/SvgIcon"; // svg component

export default app => {
  // register globally
  app.component("SvgIcon", SvgIcon);

  const req = require.context("./svg", false, /\.svg$/);
  const requireAll = requireContext =>
    requireContext.keys().map(requireContext);
  requireAll(req);
};
