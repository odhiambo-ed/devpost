import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import HackathonsCombobox from "components/HackathonsCombobox";
import HackathonsFilteritem from "components/HackathonsFilteritem";
import HackathonsRowclaritytagssoli from "components/HackathonsRowclaritytagssoli";
import HackathonsRowframethirtyfive from "components/HackathonsRowframethirtyfive";
import HackathonsRowmajesticonsmapm from "components/HackathonsRowmajesticonsmapm";
import HackathonsRowmaterialsymbol from "components/HackathonsRowmaterialsymbol";
import HackathonsRowphcurrencycir from "components/HackathonsRowphcurrencycir";
import HackathonsRowriuserfill from "components/HackathonsRowriuserfill";
import HomePageHackathoncard from "components/HomePageHackathoncard";
import MainPageAppheader from "components/MainPageAppheader";
import MainPageRowcomingSoon from "components/MainPageRowcomingSoon";

const HackathonsPage = () => {
  const hackathonsFilteritemPropList = [
    { location: "1-6 days" },
    { location: "1-4 weeks" },
    { location: "1+ month" },
  ];
  const hackathonsFilteritemPropList1 = [
    { location: "Everyone" },
    { location: "Invite Only" },
    { location: "Professionals" },
  ];
  const hackathonsFilteritemPropList2 = [
    { location: "Everyone Wins" },
    { location: "0 - 10.000$" },
    { location: "10.000$ - 50.000$" },
    { location: "50.000$ +" },
  ];
  const hackathonsFilteritemPropList3 = [
    { location: "AR / VR" },
    { location: "Beginner Friendly" },
    { location: "Cybersecurity" },
    { location: "DevOps" },
    { location: "Education" },
    { location: "Fintech" },
    { location: "Health" },
    { location: "IoT" },
    { location: "Low / No Code" },
    { location: "Machine Learning/AI" },
    { location: "Mobile" },
    { location: "Social Good" },
    { location: "Web" },
  ];

  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-roboto items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <MainPageAppheader
          className="bg-black_900 flex gap-2 h-[70px] md:h-auto items-center justify-center px-4 md:px-5 w-full"
          hackathons="Hackathons"
          organizations="Organizations"
          signin="Sign In"
        />
        <MainPageRowcomingSoon
          className="bg-cover bg-no-repeat flex flex-row h-[600px] items-end justify-between p-[60px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_frame42_240x480.png')" }}
          comingSoon="Coming Soon"
          weekday={
            <>
              monday Apps Challenge <br />
              Dream it, build it
            </>
          }
          buildanyappyou={
            <>
              Build any app you can dream of and <br />
              drive away in a Tesla X
            </>
          }
          organizedby="Organized by"
          totalprize="Total Prize"
          price="150.000 $"
          location="Location"
          online="Online"
          opento="Open To"
          everyone="Everyone"
          four="?"
          detailsbutton="Details"
          applybutton="Apply"
        />
        <div className="flex md:flex-col flex-row md:gap-5 h-[1096px] md:h-auto items-start justify-start max-w-[1200px] mx-auto md:px-5 w-full">
          <div className="bg-black_900 flex flex-col h-[1096px] md:h-auto items-start justify-start w-[200px]">
            <HackathonsRowmajesticonsmapm
              className="flex flex-row gap-2 items-center justify-start px-2 py-1 w-full"
              location="Location"
            />
            <List
              className="flex-col gap-px grid items-center w-full"
              orientation="vertical"
            >
              <HackathonsFilteritem
                className="flex flex-1 flex-row gap-2 items-center justify-start px-2 w-full"
                location="Online"
              />
              <HackathonsFilteritem
                className="flex flex-1 flex-row gap-2 items-center justify-start px-2 w-full"
                location="In-person"
              />
            </List>
            <HackathonsRowframethirtyfive
              className="flex flex-row gap-2 items-center justify-start px-2 py-1 w-full"
              status="Status"
            />
            <List
              className="flex-col gap-px grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-row gap-2 items-center justify-start px-2 w-full">
                <Img
                  src="images/img_frame37.svg"
                  className="h-6 w-6"
                  alt="frameThirtySeven"
                />
                <Text
                  className="font-normal not-italic text-gray_100 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Coming Soon{" "}
                </Text>
                <div className="bg-indigo_A200 h-2 rounded-[50%] w-2"></div>
              </div>
              <div className="flex flex-1 flex-row gap-2 items-center justify-start px-2 w-full">
                <Img
                  src="images/img_frame37.svg"
                  className="h-6 w-6"
                  alt="frameThirtySeven"
                />
                <Text
                  className="font-normal not-italic text-gray_100 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Active
                </Text>
                <div className="bg-green_A700 h-2 rounded-[50%] w-2"></div>
              </div>
            </List>
            <div className="flex flex-row gap-2 items-center justify-start px-2 w-full">
              <div className="flex flex-col h-6 md:h-auto items-center justify-center w-6">
                <div className="border border-blue_gray_100 border-solid h-4 rounded w-4"></div>
              </div>
              <Text
                className="font-normal not-italic text-gray_100 text-left w-auto"
                as="h4"
                variant="h4"
              >
                Ended
              </Text>
              <div className="bg-blue_gray_400 h-2 rounded-[50%] w-2"></div>
            </div>
            <HackathonsRowmaterialsymbol
              className="flex flex-row gap-2 items-center justify-start px-2 py-1 w-full"
              length="Length"
            />
            <List
              className="flex-col gap-px grid items-center w-full"
              orientation="vertical"
            >
              {hackathonsFilteritemPropList.map((props, index) => (
                <React.Fragment key={`HackathonsFilteritem${index}`}>
                  <HackathonsFilteritem
                    className="flex flex-1 flex-row gap-2 items-center justify-start px-2 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <HackathonsRowriuserfill
              className="flex flex-row gap-2 items-center justify-start px-2 py-1 w-full"
              opento="Open To"
            />
            <List
              className="flex-col gap-px grid items-center w-full"
              orientation="vertical"
            >
              {hackathonsFilteritemPropList1.map((props, index) => (
                <React.Fragment key={`HackathonsFilteritem${index}`}>
                  <HackathonsFilteritem
                    className="flex flex-1 flex-row gap-2 items-center justify-start px-2 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <HackathonsRowphcurrencycir
              className="flex flex-row gap-2 items-center justify-start px-2 py-1 w-full"
              prizes="Prizes"
            />
            <List
              className="flex-col gap-px grid items-center w-full"
              orientation="vertical"
            >
              {hackathonsFilteritemPropList2.map((props, index) => (
                <React.Fragment key={`HackathonsFilteritem${index}`}>
                  <HackathonsFilteritem
                    className="flex flex-1 flex-row gap-2 items-center justify-start px-2 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <HackathonsRowclaritytagssoli
              className="flex flex-row gap-2 items-center justify-start px-2 py-1 w-full"
              interesttags="Interest Tags"
            />
            <List
              className="flex-col gap-px grid items-center w-full"
              orientation="vertical"
            >
              {hackathonsFilteritemPropList3.map((props, index) => (
                <React.Fragment key={`HackathonsFilteritem${index}`}>
                  <HackathonsFilteritem
                    className="flex flex-1 flex-row gap-2 items-center justify-start px-2 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
          <div className="flex flex-1 flex-col gap-8 h-full items-start justify-start w-full">
            <div className="bg-black_900 flex md:flex-col flex-row gap-2 h-[60px] md:h-auto items-center justify-start px-2 w-full">
              <Input
                wrapClassName="md:flex-1 w-[36%] md:w-full"
                className="font-normal leading-[normal] not-italic p-0 placeholder:text-blue_gray_400 text-blue_gray_400 text-left text-sm w-full"
                name="frameThirtyEight"
                placeholder="Search by hackathon title or keyword"
                shape="RoundedBorder4"
                size="sm"
                variant="OutlineBluegray400"
              ></Input>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[74px] w-auto"
                leftIcon={
                  <Img
                    src="images/img_search.svg"
                    className="mr-1"
                    alt="search"
                  />
                }
                shape="RoundedBorder4"
                size="sm"
                variant="FillBlueA400"
              >
                <div className="font-semibold leading-[normal] text-left text-white_A700 text-xs">
                  Search
                </div>
              </Button>
              <div className="flex flex-1 flex-col h-full items-center justify-end w-full">
                <HackathonsCombobox className="flex flex-col items-center justify-start w-auto sm:w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-center justify-center w-full">
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
              <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-60 md:h-auto items-center justify-start rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-[480px] sm:w-full"
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
                <div className="bg-gray_900 flex flex-col items-start justify-start py-2 w-[480px] sm:w-full">
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
                        className="bg-indigo_A200 font-normal justify-center not-italic p-1 rounded self-stretch text-gray_100 text-left w-auto"
                        as="h4"
                        variant="h4"
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
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-center justify-center w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-60 md:h-auto items-center justify-start rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-[480px] sm:w-full"
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
                <div className="bg-gray_900 flex flex-col items-start justify-start py-2 w-[480px] sm:w-full">
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
                        src="images/img_logolight1.png"
                        className="h-4 md:h-auto object-cover w-[46px] sm:w-full"
                        alt="logolightOne"
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
                          40.000 $
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
                            Jan 8 – Feb 24
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
                      name="frameFifty_Two"
                      placeholder="Tags"
                      size="md"
                      variant="UnderLineCyan300"
                    ></Input>
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
              <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-60 md:h-auto items-center justify-start rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-[480px] sm:w-full"
                  style={{
                    backgroundImage: "url('images/img_frame42_10.png')",
                  }}
                >
                  <div className="flex flex-col items-start justify-start p-4 rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-full">
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[62px] text-base text-center text-white_A700 w-auto"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillGreenA700"
                    >
                      Active
                    </Button>
                    <Text
                      className="bg-blue_gray_900_7f font-bold justify-center mt-[94px] p-1 rounded self-stretch text-gray_100 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      #BuildFor2030 Hackathon
                    </Text>
                    <Text
                      className="bg-blue_gray_900_7f font-normal justify-center mb-3 mt-4 not-italic p-1 rounded self-stretch text-gray_100 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Innovate solutions that make a difference
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_900 flex flex-col items-start justify-start py-2 w-[480px] sm:w-full">
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
                        src="images/img_microsoftlogo1.png"
                        className="h-4 md:h-auto object-cover w-[75px] sm:w-full"
                        alt="microsoftlogoOne"
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
                          50.000 $
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
                            Feb 22 – Apr 22
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
                      name="frameFifty_Three"
                      placeholder="Tags"
                      size="md"
                      variant="UnderLineCyan300"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start px-4 w-full">
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <div className="h-5 md:h-[15px] relative w-[64%]">
                        <Text
                          className="absolute bottom-[0] font-semibold left-[0] text-gray_100 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Invite Only
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
                        270
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-1 h-10 md:h-auto items-center justify-center w-full">
                      <Text
                        className="bg-indigo_A200 font-semibold justify-center p-1 rounded self-stretch text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Low / No Code
                      </Text>
                      <Text
                        className="bg-indigo_A200 font-semibold justify-center p-1 rounded self-stretch text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Productivity
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
        </div>
        <Footer className="bg-black_900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default HackathonsPage;
