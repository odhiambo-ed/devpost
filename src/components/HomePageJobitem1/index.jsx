import React from "react";

import { Img, Text } from "components";

const HomePageJobitem1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[100px] md:h-auto items-center justify-center p-2 w-[100px]">
          <Img
            src="images/img_awslogo1_1.png"
            className="md:h-auto h-full object-cover w-full"
            alt="awslogoOne_One"
          />
        </div>
        <div className="md:h-[83px] h-full relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="font-bold font-roboto text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                {props?.frontenddevelop}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start mt-[5px] self-stretch w-auto">
                <Img
                  src="images/img_majesticonsmapmarker.svg"
                  className="h-6 w-6"
                  alt="majesticonsmapm"
                />
                <Text
                  className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  {props?.seattleusa}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start mt-2 self-stretch w-auto">
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
                  {props?.durationOne}
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray_400_33 flex flex-col md:h-auto h-max inset-y-[0] items-center justify-center my-auto right-[0] rotate-[180deg] w-8">
            {!!props?.arrowleftThree ? (
              <Img
                src={props?.arrowleftThree}
                className="h-6 w-6"
                alt="arrowleft_Three"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

HomePageJobitem1.defaultProps = {
  frontenddevelop: ".NET Developer",
  seattleusa: "Seattle, USA",
  durationOne: "5 days ago",
};

export default HomePageJobitem1;
