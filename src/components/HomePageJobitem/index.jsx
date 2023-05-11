import React from "react";

import { Img, Text } from "components";

const HomePageJobitem = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[100px] md:h-auto items-center justify-center p-2 w-[100px]">
          <Img
            src={props?.awslogoone}
            className="md:h-auto h-full object-cover w-full"
            alt="awslogoOne"
          />
        </div>
        <div className="flex flex-col gap-2 h-full items-start justify-center w-full">
          <Text
            className="font-bold font-roboto text-left text-white_A700 w-auto"
            as="h3"
            variant="h3"
          >
            {props?.frontenddevelopOne}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
            <Img
              src="images/img_clarityworldsolid.svg"
              className="h-6 w-6"
              alt="clarityworldsol"
            />
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              {props?.remote}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
            <Img
              src="images/img_materialsymbol.svg"
              className="h-6 w-6"
              alt="materialsymbol"
            />
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              {props?.duration}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HomePageJobitem.defaultProps = {
  awslogoone: "images/img_awslogo1_84x84.png",
  frontenddevelopOne: "Front End Developer",
  remote: "Remote",
  duration: "2 days ago",
};

export default HomePageJobitem;
