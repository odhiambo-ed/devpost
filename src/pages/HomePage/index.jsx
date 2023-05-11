import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import HomePageAppheaderlogin from "components/HomePageAppheaderlogin";
import HomePageBlogitem from "components/HomePageBlogitem";
import HomePageCalendar from "components/HomePageCalendar";
import HomePageHackathoncard from "components/HomePageHackathoncard";
import HomePageJobitem from "components/HomePageJobitem";
import HomePageJobitem1 from "components/HomePageJobitem1";
import HomePageRight from "components/HomePageRight";

const HomePagePage = () => {
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-roboto gap-4 items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <HomePageAppheaderlogin
          className="bg-black_900 flex gap-4 h-[70px] md:h-auto items-center justify-center px-4 md:px-5 w-full"
          hackathons="Hackathons"
          projects="Projects"
          events="Events"
          jobs="Jobs"
          badge="1"
          badgeOne="4"
          badgeTwo="2"
        />
        <div className="bg-black_900 flex flex-col h-[60px] md:h-auto items-center justify-center max-w-[1200px] mx-auto md:px-5 rounded w-full">
          <div className="flex flex-row md:gap-10 h-[60px] md:h-auto items-center justify-between max-w-[1200px] p-2 rounded w-full">
            <Text
              className="flex-1 font-bold text-gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              Hackathons For You
            </Text>
            <Text
              className="font-normal not-italic text-blue_gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Browse All
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-center justify-start max-w-[1200px] mx-auto md:px-5 py-4 w-full">
          <HomePageHackathoncard
            className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full"
            comingSoon="Coming Soon"
            weekday="monday Apps Challenge"
            framefortysix="Dream it, build it"
            framefortysixOne="Build any app you can dream of and drive away in a Tesla X"
            organizedby="Organized by"
            totalprize="Total Prize"
            location="Location"
            date="Date"
            price="150.000 $"
            online="Online"
            feb25262023={
              <>
                Feb 25 – 26
                <br />
                2023
              </>
            }
            opento="Open To"
            participants="Participants"
            everyone="Everyone"
            one="?"
            sixhundredninetyeight="698"
            framefiftyfive="Web"
            framefiftysix="Productivity"
            details="Details"
            apply="Apply"
          />
          <div className="flex md:flex-1 flex-col items-end justify-start overflow-auto w-2/5 md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                <div
                  className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-60 md:h-auto items-center justify-start rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-[480px] sm:w-full"
                  style={{ backgroundImage: "url('images/img_frame42_8.png')" }}
                >
                  <div className="flex flex-col items-start justify-end p-3.5 rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-full">
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[62px] ml-0.5 md:ml-[0] mt-0.5 text-base text-center text-white_A700 w-auto"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillGreenA700"
                    >
                      Active
                    </Button>
                    <div className="bg-blue_gray_900_7f flex flex-col items-center justify-center ml-0.5 md:ml-[0] mt-[73px] p-1 rounded self-stretch w-auto">
                      <Text
                        className="font-bold text-gray_100 text-left"
                        as="h3"
                        variant="h3"
                      >
                        <>
                          AWS Deep Learning <br />
                          Challenge{" "}
                        </>
                      </Text>
                    </div>
                    <div className="bg-blue_gray_900_7f flex flex-col items-center justify-center ml-1 md:ml-[0] mt-4 p-1 rounded self-stretch w-auto">
                      <Text
                        className="font-normal max-w-[314px] md:max-w-full not-italic text-gray_100 text-left"
                        as="h6"
                        variant="h6"
                      >
                        Train a deep learning model on new Amazon EC2 DL1
                        instances powered by Habana Gaudi accelerators.
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-60 md:h-auto items-center justify-start rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-[480px] sm:w-full"
                  style={{ backgroundImage: "url('images/img_frame42_9.png')" }}
                >
                  <div className="flex flex-col items-start justify-end p-3.5 rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-full">
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[62px] ml-0.5 md:ml-[0] mt-0.5 text-base text-center text-white_A700 w-auto"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillGreenA700"
                    >
                      Active
                    </Button>
                    <Text
                      className="bg-blue_gray_900_7f font-bold justify-center ml-0.5 md:ml-[0] mt-20 p-1 rounded self-stretch text-gray_100 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      ICON HYPERBUILD
                    </Text>
                    <div className="bg-blue_gray_900_7f flex flex-col items-center justify-center ml-0.5 md:ml-[0] mt-4 p-1 rounded self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-gray_100 text-left"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Transcend blockchain barriers and build <br />
                          your dream cross-chain project using one of the <br />
                          world’s most connected networks, ICON.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                <div className="bg-gray_900 flex sm:flex-1 flex-col items-start justify-start py-2 w-[480px] sm:w-full">
                  <List
                    className="sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-4 h-10 justify-start px-4 w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-[11px] h-full items-center justify-center sm:ml-[0] w-full">
                      <Text
                        className="font-semibold text-cyan_300 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Organized by
                      </Text>
                      <Line className="bg-cyan_300 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 h-full items-center justify-center sm:ml-[0] w-full">
                      <Text
                        className="font-semibold text-cyan_300 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Total Prize
                      </Text>
                      <Line className="bg-cyan_300 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 h-full items-center justify-center sm:ml-[0] w-full">
                      <Text
                        className="font-semibold text-cyan_300 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Location
                      </Text>
                      <Line className="bg-cyan_300 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 h-full items-center justify-center sm:ml-[0] w-full">
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
                  <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start px-4 w-full">
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <Img
                        src="images/img_awslogo1.png"
                        className="h-6 md:h-auto object-cover w-[37px] sm:w-full"
                        alt="awslogoOne"
                      />
                    </div>
                    <List
                      className="sm:flex-1 sm:flex-col flex-row gap-px grid grid-cols-3 w-3/4 sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col h-full items-center justify-center w-full">
                        <Text
                          className="font-semibold text-gray_100 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          100.000 $
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
                      <div className="flex flex-col h-full items-center justify-center w-full">
                        <Text
                          className="font-semibold text-center text-gray_100"
                          as="h6"
                          variant="h6"
                        >
                          <>
                            Jan 10 – Feb 26
                            <br />
                            2023
                          </>
                        </Text>
                      </div>
                    </List>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start px-4 w-full">
                    <div className="flex flex-1 flex-col gap-[11px] h-full items-center justify-center w-full">
                      <Text
                        className="font-semibold text-cyan_300 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Open To
                      </Text>
                      <Line className="bg-cyan_300 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-[11px] h-full items-center justify-center w-full">
                      <Text
                        className="font-semibold text-cyan_300 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Participants
                      </Text>
                      <Line className="bg-cyan_300 h-px w-full" />
                    </div>
                    <Input
                      wrapClassName="sm:flex-1 w-[54%] sm:w-full"
                      className="font-semibold leading-[normal] md:h-auto p-0 placeholder:text-cyan_300 sm:h-auto text-cyan_300 text-left text-xs w-full"
                      name="frameFifty_One"
                      placeholder="Tags"
                      size="md"
                      variant="UnderLineCyan300"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start px-4 w-full">
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <div className="flex flex-row items-start justify-center w-[58%] md:w-full">
                        <Text
                          className="font-semibold mt-[5px] text-gray_100 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Level 2+
                        </Text>
                        <div className="bg-blue_gray_900_cc flex flex-col h-3 md:h-auto items-center justify-center mb-2 ml-[3px] rounded-[50%] w-3">
                          <Text
                            className="font-medium text-left text-white_A700 w-auto"
                            variant="body2"
                          >
                            ?
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <Text
                        className="font-semibold text-gray_100 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        865
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col h-10 md:h-auto items-center justify-center w-full">
                      <Text
                        className="bg-indigo_A200 font-semibold justify-center p-1 rounded self-stretch text-gray_100 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Machine Learning/AI
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-start px-4 w-full">
                    <Button
                      className="cursor-pointer flex-1 font-normal leading-[normal] not-italic text-center text-cyan_300 text-sm w-full"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="OutlineCyan300"
                    >
                      Details
                    </Button>
                    <Button
                      className="cursor-pointer flex-1 font-normal leading-[normal] not-italic text-center text-sm text-white_A700 w-full"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillCyan300"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
                <div className="bg-gray_900 flex sm:flex-1 flex-col items-start justify-start py-2 w-[480px] sm:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start px-4 w-full">
                    <List
                      className="sm:flex-1 sm:flex-col flex-row gap-px grid grid-cols-2 w-1/2 sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[11px] h-full items-center justify-center w-full">
                        <Text
                          className="font-semibold text-cyan_300 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Organized by
                        </Text>
                        <Line className="bg-cyan_300 h-px w-full" />
                      </div>
                      <div className="flex flex-col gap-3 h-full items-center justify-center w-full">
                        <Text
                          className="font-semibold text-cyan_300 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Total Prize
                        </Text>
                        <Line className="bg-cyan_300 h-px w-full" />
                      </div>
                    </List>
                    <Img
                      src="images/img_frame50.svg"
                      className="flex-1 h-full max-h-10 w-auto sm:w-auto"
                      alt="frameFifty_Two"
                    />
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <Text
                        className="font-semibold max-w-[25px] md:max-w-full text-center text-cyan_300"
                        as="h6"
                        variant="h6"
                      >
                        Date
                      </Text>
                      <Line className="bg-cyan_300 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-row h-10 md:h-auto items-center justify-start px-4 w-full">
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <Img
                        src="images/img_logolight1.png"
                        className="h-4 md:h-auto object-cover w-[46px] sm:w-full"
                        alt="logolightOne"
                      />
                    </div>
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <Text
                        className="font-semibold text-gray_100 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        40.000 $
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <Text
                        className="font-semibold text-center text-gray_100"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Jan 8 – Feb 24
                          <br />
                          2023
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start px-4 w-full">
                    <List
                      className="sm:flex-1 sm:flex-col flex-row gap-px grid grid-cols-2 w-[47%] sm:w-full"
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
                    <div className="flex flex-1 flex-col h-10 md:h-auto items-center justify-center w-full">
                      <Text
                        className="font-semibold max-w-[27px] md:max-w-full text-cyan_300 text-left"
                        as="h6"
                        variant="h6"
                      >
                        Tags
                      </Text>
                      <Line className="bg-cyan_300 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start px-4 w-full">
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <div className="md:h-[15px] h-[21px] relative w-[58%]">
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
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <Text
                        className="font-semibold text-gray_100 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        400
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col h-10 md:h-auto items-center justify-center w-full">
                      <Text
                        className="bg-indigo_A200 font-semibold justify-center p-1 rounded self-stretch text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Blockchain
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-start px-4 w-full">
                    <Button
                      className="cursor-pointer flex-1 font-normal leading-[normal] not-italic text-center text-cyan_300 text-sm w-full"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="OutlineCyan300"
                    >
                      Details
                    </Button>
                    <Button
                      className="cursor-pointer flex-1 font-normal leading-[normal] not-italic text-center text-sm text-white_A700 w-full"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillCyan300"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[172px] py-[172px] w-[18%] md:w-full">
            <HomePageRight
              className="bg-blue_gray_400_33 flex flex-col h-32 md:h-auto items-center justify-center rotate-[180deg] w-8 sm:w-full"
              arrowleft="images/img_arrowleft.svg"
            />
          </div>
        </div>
        <div className="bg-black_900 flex flex-col h-[60px] md:h-auto items-center justify-center max-w-[1200px] mx-auto md:px-5 rounded w-full">
          <div className="flex flex-row gap-8 h-[60px] md:h-auto items-center justify-start max-w-[1200px] p-2 rounded w-full">
            <Text
              className="flex-1 font-bold text-gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              Calendar
            </Text>
            <Text
              className="flex-1 font-bold text-gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              Events
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 w-full">
          <div className="bg-black_900 flex md:flex-col flex-row gap-4 items-center justify-start max-w-[1200px] mx-auto md:px-5 py-4 rounded w-full">
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <HomePageCalendar
                className="bg-black_900 flex flex-col h-[300px] md:h-auto items-center justify-start w-[592px] sm:w-full"
                arrowleftOne="images/img_arrowleft_blue_gray_100.svg"
                month="February 2023"
                next="images/img_next.svg"
                sun="Sun"
                mon="Mon"
                tue="Tue"
                wed="Wed"
                thu="Thu"
                fri="Fri"
                sat="Sat"
                twentynine="29"
                thirty="30"
                thirtyone="31"
                one="1"
                two="2"
                three="3"
                four="4"
                five="5"
                six="6"
                seven="7"
                eight="8"
                nine="9"
                ten="10"
                eleven="11"
                twelve="12"
                thirteen="13"
                framefiftyseven="14"
                fifteen="15"
                sixteen="16"
                seventeen="17"
                eighteen="18"
                nineteen="19"
                twenty="20"
                twentyone="21"
                twentytwo="22"
                twentythree="23"
                twentyfour="24"
                twentyfive="25"
                twentysix="26"
                twentyseven="27"
                twentyeight="28"
                one1="1"
                two1="2"
                three1="3"
                four1="4"
              />
            </div>
            <List
              className="flex-1 flex-col gap-2 grid h-full items-center px-2 w-full"
              orientation="vertical"
            >
              <div className="bg-blue_gray_900 flex flex-1 sm:flex-col flex-row gap-2 items-center justify-start my-0 p-2 rounded w-full">
                <div className="bg-blue_A400 flex flex-col h-[42px] md:h-auto items-center justify-center rounded-[50%] w-[42px]">
                  <Text
                    className="font-bold text-blue_gray_100 text-center"
                    as="h3"
                    variant="h3"
                  ></Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="font-bold text-center text-gray_100 w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Submissions Start
                  </Text>
                  <Text
                    className="font-bold text-blue_gray_100 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    monday Apps Challenge
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-bold text-blue_gray_100 text-center w-auto"
                    as="h6"
                    variant="h6"
                  >
                    9:20 AM
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray_900 flex flex-1 sm:flex-col flex-row gap-2 items-center justify-start my-0 p-2 rounded w-full">
                <div className="bg-green_A700 flex flex-col h-[42px] md:h-auto items-center justify-center rounded-[50%] w-[42px]">
                  <Text
                    className="font-bold text-blue_gray_100 text-center"
                    as="h3"
                    variant="h3"
                  ></Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="font-bold text-center text-gray_100 w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Team Match Event
                  </Text>
                  <Text
                    className="font-bold text-blue_gray_100 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Devpost
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-bold text-blue_gray_100 text-center w-auto"
                    as="h6"
                    variant="h6"
                  >
                    10:30 AM
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray_900 flex flex-1 sm:flex-col flex-row gap-2 items-center justify-start my-0 p-2 rounded w-full">
                <div className="bg-red_700 flex flex-col h-[42px] md:h-auto items-center justify-center rounded-[50%] w-[42px]">
                  <Text
                    className="font-bold text-blue_gray_100 text-center"
                    as="h3"
                    variant="h3"
                  ></Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="font-bold text-center text-gray_100 w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Submissions End
                  </Text>
                  <Text
                    className="font-bold text-blue_gray_100 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    AWS Deep Learning Challenge
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-bold text-blue_gray_100 text-center w-auto"
                    as="h6"
                    variant="h6"
                  >
                    11:40 AM
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-black_900 flex flex-col h-[60px] md:h-auto items-center justify-center max-w-[1200px] mx-auto md:px-5 rounded w-full">
          <div className="flex flex-row md:gap-10 h-[60px] md:h-auto items-center justify-between max-w-[1200px] p-2 rounded w-full">
            <Text
              className="flex-1 font-bold text-gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              Blogs
            </Text>
            <Text
              className="font-normal not-italic text-blue_gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Browse All
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-center justify-start max-w-[1200px] mx-auto md:px-5 py-4 w-full">
          <List
            className="md:flex-1 sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 w-[72%] md:w-full"
            orientation="horizontal"
          >
            <HomePageBlogitem
              className="bg-cover bg-no-repeat flex flex-col h-60 items-start justify-end p-4 rounded-lg w-full"
              style={{ backgroundImage: "url('images/img_blogitem.png')" }}
              title="11 Best Stock Image Websites"
              description="Find great images for your presentations"
              johndoe="John Doe"
            />
            <HomePageBlogitem
              className="bg-cover bg-no-repeat flex flex-col h-60 items-start justify-end p-4 rounded-lg w-full"
              style={{
                backgroundImage: "url('images/img_blogitem_240x420.png')",
              }}
              title="Publish your site for free on Netlify"
              description="Publish your apps the easy way"
              johndoe="Laverne Audet"
            />
          </List>
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-60 items-end justify-end pl-4 py-4 rounded-lg w-[28%] md:w-full"
            style={{
              backgroundImage: "url('images/img_blogitem_240x328.png')",
            }}
          >
            <div className="flex flex-row items-start justify-end mt-10 w-full">
              <div className="flex flex-col items-start justify-start mt-[71px] w-[89%]">
                <Text
                  className="bg-green_A700_cc font-bold justify-center p-1 rounded self-stretch text-left text-shadow-ts text-white_A700 w-auto"
                  as="h4"
                  variant="h4"
                >
                  Story of Champions | Hack the Future{" "}
                </Text>
                <Text
                  className="bg-blue_gray_900_cc font-semibold justify-center mt-4 p-1 rounded self-stretch text-blue_gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  There was a 16 hour time difference between us.
                </Text>
                <div className="bg-blue_gray_900_cc flex flex-row gap-1 items-center justify-start mt-2 p-1 rounded self-stretch w-auto">
                  <Img
                    src="images/img_frame71_1.png"
                    className="h-4 md:h-auto rounded-[50%] w-4"
                    alt="frameSeventyOne"
                  />
                  <Text
                    className="font-semibold text-blue_gray_100 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Pietro Loggia
                  </Text>
                </div>
              </div>
              <HomePageRight
                className="bg-blue_gray_400_33 flex sm:flex-1 flex-col h-32 md:h-auto items-center justify-center mb-10 ml-[3px] rotate-[180deg] w-8 sm:w-full"
                arrowleft="images/img_arrowleft.svg"
              />
            </div>
          </div>
        </div>
        <div className="bg-black_900 flex flex-col h-[60px] md:h-auto items-center justify-center max-w-[1200px] mx-auto md:px-5 rounded w-full">
          <div className="flex flex-row md:gap-10 h-[60px] md:h-auto items-center justify-between max-w-[1200px] p-2 rounded w-full">
            <Text
              className="flex-1 font-bold text-gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              Jobs For You
            </Text>
            <Text
              className="font-normal not-italic text-blue_gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Browse All
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-center justify-start max-w-[1200px] mx-auto md:px-5 py-4 w-full">
          <List
            className="md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[83%] md:w-full"
            orientation="horizontal"
          >
            <HomePageJobitem
              className="bg-black_900 flex flex-row gap-4 items-center justify-start p-2 rounded-lg w-80 sm:w-full"
              awslogoone="images/img_awslogo1_84x84.png"
              frontenddevelopOne="Front End Developer"
              remote="Remote"
              duration="2 days ago"
            />
            <HomePageJobitem1
              className="bg-black_900 flex flex-row gap-4 items-center justify-start p-2 rounded-lg w-80 sm:w-full"
              frontenddevelop="Software Engineer"
              seattleusa="Seattle, USA"
              durationOne="4 days ago"
            />
            <HomePageJobitem
              className="bg-black_900 flex flex-row gap-4 items-center justify-start p-2 rounded-lg w-80 sm:w-full"
              awslogoone="images/img_awslogo1_2.png"
              frontenddevelopOne="UI Designer"
              remote="Remote"
              duration="5 days ago"
            />
          </List>
          <HomePageJobitem1
            className="bg-black_900 flex sm:flex-1 flex-row gap-4 items-center justify-start p-2 rounded-lg w-48 sm:w-full"
            frontenddevelop=".NET Developer"
            seattleusa="Seattle, USA"
            durationOne="5 days ago"
          />
        </div>
        <Footer className="bg-black_900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomePagePage;
