import React from "react";

import { Img } from "components";

const HomePageRight = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img src={props?.arrowleft} className="h-6 w-6" alt="arrowleft" />
      </div>
    </>
  );
};

HomePageRight.defaultProps = { arrowleft: "images/img_arrowleft.svg" };

export default HomePageRight;
