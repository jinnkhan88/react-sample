import React from "react";

const Button = ({ title, variant = "primary", ...rest }) => {
  const getVariant = (variant) => {
    switch (variant) {
      case "primary":
        return "tw-px-8 tw-uppercase tw-py-2 tw-text-base tw-bg-slate-500 tw-text-white";
      case "secondary":
        return "tw-px-8 tw-uppercase tw-py-2 tw-text-base tw-bg-teal-800 tw-text-white";
      default:
        return "tw-px-8 tw-uppercase tw-py-2 tw-text-base tw-bg-slate-500 tw-text-white";
    }
  };
  return (
    <button className={getVariant(variant)} {...rest}>
      {title}
    </button>
  );
};

export default Button;
