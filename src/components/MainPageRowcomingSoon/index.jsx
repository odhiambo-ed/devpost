import React from "react";

import { Button, Img, Line, List, Slider, Text } from "components";

const MainPageRowcomingSoon = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_frame42_240x480.png')" }}
      >
        <div className="bg-blue_gray_900_7f flex flex-col items-center justify-center md:mt-0 mt-[137px] p-2 rounded-lg self-stretch w-auto sm:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start mb-[59px] w-full">
              <Button
                className="cursor-pointer font-roboto font-semibold leading-[normal] min-w-[113px] text-base text-center text-white_A700 w-auto"
                shape="RoundedBorder8"
                size="sm"
                variant="FillIndigoA200"
              >
                {props?.comingSoon}
              </Button>
              <Text
                className="font-inter mt-5 text-gray_100 text-left"
                as="h1"
                variant="h1"
              >
                {props?.weekday}
              </Text>
              <Text
                className="font-medium font-roboto mt-5 text-blue_gray_100 text-left"
                as="h3"
                variant="h3"
              >
                {props?.buildanyappyou}
              </Text>
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between mt-[23px] w-full">
                <div className="flex sm:flex-1 flex-col gap-[9px] items-center justify-start w-1/5 sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="font-roboto font-semibold text-cyan_300 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      {props?.organizedby}
                    </Text>
                    <Line className="bg-cyan_300 h-px mt-1 w-full" />
                  </div>
                  <Img
                    src="images/img_2560pxmondaylogo.png"
                    className="h-[15px] md:h-auto object-cover w-full"
                    alt="2560pxmondaylog"
                  />
                </div>
                <List
                  className="sm:flex-1 sm:flex-col flex-row gap-[30px] grid grid-cols-3 w-[74%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[9px] items-center justify-start sm:ml-[0] w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <Text
                        className="font-roboto font-semibold text-cyan_300 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        {props?.totalprize}
                      </Text>
                      <Line className="bg-cyan_300 h-px w-full" />
                    </div>
                    <Text
                      className="font-roboto font-semibold text-gray_100 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      {props?.price}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start sm:ml-[0] w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <Text
                        className="font-roboto font-semibold text-cyan_300 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        {props?.location}
                      </Text>
                      <Line className="bg-cyan_300 h-px w-full" />
                    </div>
                    <Text
                      className="font-roboto font-semibold text-gray_100 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      {props?.online}
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start sm:ml-[0] w-full">
                    <Text
                      className="font-roboto font-semibold text-cyan_300 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      {props?.opento}
                    </Text>
                    <Line className="bg-cyan_300 h-px mt-1 w-full" />
                    <div className="md:h-[18px] h-[21px] mt-[3px] relative w-3/4">
                      <Text
                        className="absolute bottom-[0] font-roboto font-semibold left-[0] text-gray_100 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        {props?.everyone}
                      </Text>
                      <div className="absolute bg-blue_gray_900_cc flex flex-col h-3 md:h-auto items-center justify-center right-[0] rounded-[50%] top-[0] w-3">
                        <Text
                          className="font-medium font-roboto text-left text-white_A700 w-auto"
                          variant="body2"
                        >
                          {props?.four}
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:mt-0 mt-[394px] px-4 py-2 self-stretch w-auto sm:w-full">
          <div className="overflow-x-auto w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 4 },
                1050: { items: 8 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[0.51]"
              magnifiedIndex={6}
              centerMode
              ref={sliderRef}
              className="w-full"
              items={[...Array(24)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Button
                    className="cursor-pointer font-normal font-roboto leading-[normal] mx-2.5 not-italic px-2 text-center text-cyan_300 text-sm"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="OutlineCyan300"
                  >
                    {props?.detailsbutton}
                  </Button>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
      </div>
    </>
  );
};

MainPageRowcomingSoon.defaultProps = {
  comingSoon: "Coming Soon",
  weekday: (
    <>
      monday Apps Challenge <br />
      Dream it, build it
    </>
  ),
  buildanyappyou: (
    <>
      Build any app you can dream of and <br />
      drive away in a Tesla X
    </>
  ),
  organizedby: "Organized by",
  totalprize: "Total Prize",
  price: "150.000 $",
  location: "Location",
  online: "Online",
  opento: "Open To",
  everyone: "Everyone",
  four: "?",
  detailsbutton: "Details",
};

export default MainPageRowcomingSoon;
