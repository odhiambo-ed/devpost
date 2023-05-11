import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded",
  RoundedBorder8: "rounded-lg",
  icbCircleBorder12: "rounded-[12px]",
  icbCircleBorder18: "rounded-[18px]",
};
const variants = {
  OutlineCyan300: "border border-cyan_300 border-solid text-cyan_300",
  FillGreenA700: "bg-green_A700 text-white_A700",
  FillCyan300: "bg-cyan_300 text-white_A700",
  FillIndigoA200: "bg-indigo_A200 text-white_A700",
  FillBlueA400: "bg-blue_A400 text-white_A700",
  FillBluegray400: "bg-blue_gray_400 text-white_A700",
  OutlineBluegray200:
    "bg-blue_gray_100 border border-blue_gray_200 border-solid shadow-bs text-black_900",
  OutlineBluegray200_1:
    "border border-blue_gray_200 border-solid shadow-bs text-blue_gray_200",
  icbFillBluegray900cc: "bg-blue_gray_900_cc",
  icbFillRed700: "bg-red_700",
};
const sizes = {
  sm: "p-[7px]",
  md: "p-4",
  lg: "p-[35px] sm:px-5",
  smIcn: "p-[5px]",
  mdIcn: "p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "RoundedBorder8",
    "icbCircleBorder12",
    "icbCircleBorder18",
  ]),
  variant: PropTypes.oneOf([
    "OutlineCyan300",
    "FillGreenA700",
    "FillCyan300",
    "FillIndigoA200",
    "FillBlueA400",
    "FillBluegray400",
    "OutlineBluegray200",
    "OutlineBluegray200_1",
    "icbFillBluegray900cc",
    "icbFillRed700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
