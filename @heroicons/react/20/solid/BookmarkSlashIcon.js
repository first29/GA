const React = require("react");
function BookmarkSlashIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M17 4.517v9.301L5.433 2.252a41.44 41.44 0 019.637.058C16.194 2.45 17 3.414 17 4.517zM3 17.25V6.182l10.654 10.654L10 15.082l-5.925 2.844A.75.75 0 013 17.25zM3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06L3.28 2.22z"
  }));
}
const ForwardRef = React.forwardRef(BookmarkSlashIcon);
module.exports = ForwardRef;