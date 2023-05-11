import React from "react";

const variantClasses = {
  h1: "font-bold text-4xl sm:text-[32px] md:text-[34px]",
  h2: "font-bold text-2xl md:text-[22px] sm:text-xl",
  h3: "text-lg",
  h4: "text-base",
  h5: "text-sm",
  h6: "text-xs",
  body1: "font-normal text-[11px]",
  body2: "text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
