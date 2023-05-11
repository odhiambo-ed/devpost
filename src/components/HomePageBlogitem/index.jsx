import React from "react";

import { Img, Text } from "components";

const HomePageBlogitem = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_blogitem.png')" }}
      >
        <Text
          className="bg-cyan_300_cc font-bold font-roboto justify-center mt-[119px] p-1 rounded self-stretch text-left text-shadow-ts text-white_A700 w-auto"
          as="h4"
          variant="h4"
        >
          {props?.title}
        </Text>
        <Text
          className="bg-blue_gray_900_cc font-roboto font-semibold justify-center p-1 rounded self-stretch text-blue_gray_100 text-left w-auto"
          as="h6"
          variant="h6"
        >
          {props?.description}
        </Text>
        <div className="bg-blue_gray_900_cc flex flex-row gap-1 items-center justify-start mr-auto p-1 rounded self-stretch w-auto">
          <Img
            src="images/img_frame71.png"
            className="h-4 md:h-auto rounded-[50%] w-4"
            alt="frameSeventyOne"
          />
          <Text
            className="font-roboto font-semibold text-blue_gray_100 text-left w-auto"
            as="h6"
            variant="h6"
          >
            {props?.johndoe}
          </Text>
        </div>
      </div>
    </>
  );
};

HomePageBlogitem.defaultProps = {
  title: "11 Best Stock Image Websites",
  description: "Find great images for your presentations",
  johndoe: "John Doe",
};

export default HomePageBlogitem;
