import React from "react";

import { Button, Img, Line, List, SelectBox, Slider, Text } from "components";
import Footer from "components/Footer";
import HackathonPageProjectcard from "components/HackathonPageProjectcard";
import Header from "components/Header";

const descendingVotesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HackathonDetailsPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-roboto items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <Header className="bg-black_900 flex gap-4 h-[70px] md:h-auto items-center justify-center px-4 md:px-5 w-full" />
        <div className="h-[1348px] md:h-[1433px] sm:h-[1477px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[0.34]"
                magnifiedIndex={1}
                centerMode
                ref={sliderRef}
                className="w-full"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[600px] items-start justify-end mx-2.5 p-[60px] md:px-10 sm:px-5"
                      style={{
                        backgroundImage:
                          "url('images/img_frame42_240x480.png')",
                      }}
                    >
                      <div className="bg-blue_gray_900_7f flex flex-col items-start justify-center mb-0.5 mt-[73px] p-2 rounded-lg self-stretch w-auto sm:w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-[84%] md:w-full">
                          <div className="bg-blue_gray_400 flex flex-col font-roboto items-center justify-center p-2 rounded-lg self-stretch w-auto">
                            <Text
                              className="font-semibold text-left text-white_A700 w-auto"
                              as="h4"
                              variant="h4"
                            >
                              Ended
                            </Text>
                          </div>
                          <Text
                            className="font-inter text-gray_100 text-left"
                            as="h1"
                            variant="h1"
                          ></Text>
                          <Text
                            className="font-medium font-roboto text-blue_gray_100 text-left"
                            as="h3"
                            variant="h3"
                          >
                            <>
                              Build any app you can dream of and <br />
                              drive away in a Tesla X
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[480px] sm:w-full">
                          <List
                            className="sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-4 h-10 justify-start w-[480px] sm:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col gap-[11px] h-full items-center justify-center sm:ml-[0] w-full">
                              <Text
                                className="font-semibold text-cyan_300 text-left w-auto"
                                as="h6"
                                variant="h6"
                              >
                                Organized by
                              </Text>
                              <Line className="bg-cyan_300 h-px w-full" />
                            </div>
                            <div className="flex flex-col gap-3 h-full items-center justify-center sm:ml-[0] w-full">
                              <Text
                                className="font-semibold text-cyan_300 text-left w-auto"
                                as="h6"
                                variant="h6"
                              >
                                Total Prize
                              </Text>
                              <Line className="bg-cyan_300 h-px w-full" />
                            </div>
                            <div className="flex flex-col gap-3 h-full items-center justify-center sm:ml-[0] w-full">
                              <Text
                                className="font-semibold text-cyan_300 text-left w-auto"
                                as="h6"
                                variant="h6"
                              >
                                Location
                              </Text>
                              <Line className="bg-cyan_300 h-px w-full" />
                            </div>
                            <div className="flex flex-col gap-3 h-full items-center justify-center sm:ml-[0] w-full">
                              <Text
                                className="font-semibold text-center text-cyan_300 w-auto"
                                as="h6"
                                variant="h6"
                              >
                                Date
                              </Text>
                              <Line className="bg-cyan_300 h-px w-full" />
                            </div>
                          </List>
                          <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start w-[480px] sm:w-full">
                            <div className="flex flex-col h-full items-center justify-center w-full">
                              <Img
                                src="images/img_2560pxmondaylogo.png"
                                className="h-4 md:h-auto object-cover w-[85px] sm:w-full"
                                alt="2560pxmondaylog"
                              />
                            </div>
                            <List
                              className="sm:flex-col flex-row gap-px grid grid-cols-2 w-1/2 sm:w-full"
                              orientation="horizontal"
                            >
                              <div className="flex flex-col h-full items-center justify-center w-full">
                                <Text
                                  className="font-semibold text-gray_100 text-left w-auto"
                                  as="h6"
                                  variant="h6"
                                >
                                  150.000 $
                                </Text>
                              </div>
                              <div className="flex flex-col h-full items-center justify-center w-full">
                                <Text
                                  className="font-semibold text-gray_100 text-left w-auto"
                                  as="h6"
                                  variant="h6"
                                >
                                  Online
                                </Text>
                              </div>
                            </List>
                            <div className="flex flex-col h-full items-center justify-center w-full">
                              <Text
                                className="font-semibold text-center text-gray_100"
                                as="h6"
                                variant="h6"
                              >
                                <>
                                  Feb 25 – 26
                                  <br />
                                  2023
                                </>
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start w-[480px] sm:w-full">
                            <List
                              className="sm:flex-col flex-row gap-px grid grid-cols-2 w-1/2 sm:w-full"
                              orientation="horizontal"
                            >
                              <div className="flex flex-col gap-[11px] h-full items-center justify-center w-full">
                                <Text
                                  className="font-semibold text-cyan_300 text-left w-auto"
                                  as="h6"
                                  variant="h6"
                                >
                                  Open To
                                </Text>
                                <Line className="bg-cyan_300 h-px w-full" />
                              </div>
                              <div className="flex flex-col gap-[11px] h-full items-center justify-center w-full">
                                <Text
                                  className="font-semibold text-cyan_300 text-left w-auto"
                                  as="h6"
                                  variant="h6"
                                >
                                  Participants
                                </Text>
                                <Line className="bg-cyan_300 h-px w-full" />
                              </div>
                            </List>
                            <div className="flex flex-col gap-[11px] h-10 md:h-auto items-center justify-center w-60">
                              <Text
                                className="font-semibold text-cyan_300 text-left w-auto"
                                as="h6"
                                variant="h6"
                              >
                                Tags
                              </Text>
                              <Line className="bg-cyan_300 h-px w-full" />
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start w-[480px] sm:w-full">
                            <div className="flex flex-col h-full items-center justify-center w-full">
                              <div className="md:h-[15px] h-[21px] relative w-1/2">
                                <Text
                                  className="absolute bottom-[0] font-semibold left-[0] text-gray_100 text-left w-auto"
                                  as="h6"
                                  variant="h6"
                                >
                                  Everyone
                                </Text>
                                <div className="absolute bg-blue_gray_900_cc flex flex-col h-3 md:h-auto items-center justify-center right-[0] rounded-[50%] top-[0] w-3">
                                  <Text
                                    className="font-medium text-left text-white_A700 w-auto"
                                    variant="body2"
                                  >
                                    ?
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col h-full items-center justify-center w-full">
                              <Text
                                className="font-semibold text-gray_100 text-left w-auto"
                                as="h6"
                                variant="h6"
                              >
                                698
                              </Text>
                            </div>
                            <div className="flex flex-row gap-1 h-10 md:h-auto items-center justify-center w-60">
                              <div className="bg-indigo_A200 flex flex-col items-center justify-center p-1 rounded self-stretch w-auto">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-auto"
                                  as="h6"
                                  variant="h6"
                                >
                                  Web
                                </Text>
                              </div>
                              <div className="bg-indigo_A200 flex flex-col items-center justify-center p-1 rounded self-stretch w-auto">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-auto"
                                  as="h6"
                                  variant="h6"
                                >
                                  Productivity
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
              <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
                <div className="bg-blue_A400 flex flex-col h-[60px] md:h-auto items-center justify-center max-w-[1200px] rounded w-full">
                  <div className="flex sm:flex-col flex-row gap-4 h-full items-center justify-start p-2 rounded w-full">
                    <Text
                      className="font-normal not-italic text-gray_100 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Overview
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_100 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Resources
                    </Text>
                    <a
                      href="javascript:"
                      className="font-normal not-italic text-gray_100 text-left text-lg w-auto"
                    >
                      <Text className="">Teams</Text>
                    </a>
                    <Text
                      className="font-bold text-gray_100 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Project Gallery
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_100 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Help Center
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-start max-w-[1200px] py-4 w-full">
                  <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                    <Text
                      className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      All Projects
                    </Text>
                    <Text
                      className="bg-blue_A400 flex font-semibold h-[27px] items-center justify-center rounded text-center text-white_A700 w-[27px]"
                      as="h4"
                      variant="h4"
                    >
                      86
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      My Projects
                    </Text>
                    <Text
                      className="bg-blue_A400 font-semibold justify-center p-1 rounded self-stretch text-left text-white_A700 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      1
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-end px-2 w-full">
                    <div className="flex flex-col items-center justify-start w-[26%] sm:w-full">
                      <SelectBox
                        className="font-normal leading-[normal] not-italic text-blue_gray_100 text-left text-sm w-full"
                        placeholderClassName="text-blue_gray_100"
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="h-6 w-6"
                            alt="arrow_down"
                          />
                        }
                        size="sm"
                        isSearchable={false}
                        placeholder="Descending Votes"
                        shape="RoundedBorder4"
                        isMulti={false}
                        options={descendingVotesOptionsList}
                        name="frameForty"
                        variant="OutlineBluegray400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[276px] relative w-[84%] md:w-full">
              <Line className="bg-blue_A400 h-0.5 mx-auto w-full" />
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto max-w-[1200px] py-8 w-full">
                <HackathonPageProjectcard
                  className="bg-black_900 flex flex-row gap-4 items-center justify-start p-4 rounded w-full"
                  winner="WINNER"
                  p1view="1View"
                  weekday="Make your Dream View in monday to manage, update and track everything at one single place."
                  eight="8"
                  six="6"
                  eightytwo="82"
                  price="Judge 64 | Participant 18"
                  appformarketplaOne="App for marketplace"
                  johndoe="JOHN DOE"
                  frontenddevelopOne="Frontend Developer"
                  laverneaudet="Laverne Audet"
                  uiuxdesigner="UI / UX Designer"
                />
              </div>
            </div>
            <Footer className="bg-black_900 flex items-center justify-center w-full" />
          </div>
          <div className="absolute bg-black_900_cc flex flex-col gap-2 md:h-auto h-max inset-[0] items-center justify-start m-auto max-w-[1440px] py-2 w-full">
            <div className="bg-blue_gray_900_cc flex md:flex-col flex-row md:gap-5 items-center justify-end max-w-[1200px] px-2 py-4 rounded w-full">
              <div className="flex flex-col h-[58px] md:h-auto items-center justify-start py-2">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h1"
                  variant="h1"
                >
                  1View
                </Text>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-8 items-center justify-center w-full">
                <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                  <Img
                    src="images/img_settings.svg"
                    className="h-9 w-9"
                    alt="settings_One"
                  />
                  <Text
                    className="font-bold text-green_A700 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    82
                  </Text>
                  <Text
                    className="font-normal not-italic text-green_A700 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Judge 64 | Participant 18
                  </Text>
                </div>
                <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-end rounded">
                  <Img
                    src="images/img_trophy.svg"
                    className="h-9 w-9"
                    alt="trophy_One"
                  />
                  <Text
                    className="font-semibold text-left text-yellow_700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    App for marketplace
                  </Text>
                </div>
              </div>
              <Button
                className="flex h-9 items-center justify-center rounded-[50%] w-9"
                size="mdIcn"
                variant="icbFillRed700"
              >
                <Img
                  src="images/img_close.svg"
                  className="h-[18px]"
                  alt="close"
                />
              </Button>
            </div>
            <div className="h-[509px] w-[84%]"></div>
            <div className="bg-blue_A400_cc flex flex-col items-center justify-end max-w-[1200px] px-2 py-4 rounded w-full">
              <div className="flex flex-row gap-4 h-full items-center justify-start p-2 w-full">
                <Text
                  className="font-bold text-gray_100 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Overview
                </Text>
                <Text
                  className="font-normal not-italic text-gray_100 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Comments
                </Text>
              </div>
            </div>
            <div className="border-b border-blue_gray_100 border-solid flex flex-col items-center justify-end max-w-[1200px] w-full">
              <div className="flex flex-col h-full items-center justify-start py-2 w-full">
                <Text
                  className="font-bold text-gray_100 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Team
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-2 grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1200px] w-full"
              orientation="horizontal"
            >
              <div className="bg-blue_gray_900 flex flex-row gap-2 items-center justify-start p-4 rounded w-[200px]">
                <Img
                  src="images/img_avatar_36x36.png"
                  className="h-9 md:h-auto rounded-[50%] w-9"
                  alt="avatar"
                />
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="font-bold text-left text-white_A700 w-auto"
                    as="h5"
                    variant="h5"
                  >
                    JOHN DOE
                  </Text>
                  <Text
                    className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Frontend Developer
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray_900 flex flex-row gap-2 items-center justify-start p-4 rounded w-[200px]">
                <Img
                  src="images/img_avatar_1.png"
                  className="h-9 md:h-auto rounded-[50%] w-9"
                  alt="avatar"
                />
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="font-bold text-left text-white_A700 uppercase w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Laverne Audet
                  </Text>
                  <Text
                    className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    UI / UX Designer
                  </Text>
                </div>
              </div>
            </List>
            <div className="border-b border-blue_gray_100 border-solid flex flex-col items-center justify-end max-w-[1200px] w-full">
              <div className="flex flex-col h-full items-center justify-start py-2 w-full">
                <Text
                  className="font-bold text-gray_100 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Built With
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start max-w-[1200px] w-full">
              <div className="bg-blue_gray_900 flex flex-row gap-2 h-8 md:h-auto items-center justify-start p-1 rounded">
                <Img
                  src="images/img_avatar_24x24.png"
                  className="h-6 md:h-auto object-cover w-6"
                  alt="avatar_One"
                />
                <div className="flex flex-col items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Javascript
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray_900 flex flex-row gap-2 h-8 md:h-auto items-center justify-start p-1 rounded">
                <Img
                  src="images/img_avatar_2.png"
                  className="h-6 md:h-auto object-cover w-6"
                  alt="avatar_Two"
                />
                <div className="flex flex-col items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    React
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray_900 flex flex-row gap-2 h-8 md:h-auto items-center justify-start p-1 rounded">
                <Img
                  src="images/img_avatar_3.png"
                  className="h-6 md:h-auto object-cover w-6"
                  alt="avatar_Three"
                />
                <div className="flex flex-col items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Figma
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HackathonDetailsPage;
