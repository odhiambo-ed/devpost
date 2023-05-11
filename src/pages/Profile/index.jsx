import React from "react";

import { Img, Input, Text } from "components";
import Footer from "components/Footer";
import HomePageAppheaderlogin from "components/HomePageAppheaderlogin";
import ProfileAchievements from "components/ProfileAchievements";
import ProfileAchievements1 from "components/ProfileAchievements1";
import ProfileComboboxrank from "components/ProfileComboboxrank";
import ProfileProfilestats from "components/ProfileProfilestats";

const ProfilePage = () => {
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-roboto items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <HomePageAppheaderlogin
          className="bg-black_900 flex gap-4 h-[70px] md:h-auto items-center justify-center px-4 md:px-5 w-full"
          hackathons="Hackathons"
          projects="Projects"
          events="Events"
          jobs="Jobs"
          badgeOne="4"
        />
        <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start max-w-[1200px] mx-auto md:px-5 py-4 w-full">
          <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
            <Img
              src="images/img_avatar_60x60.png"
              className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
              alt="avatar_One"
            />
            <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
              <Text
                className="font-bold text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                JOHN DOE
              </Text>
              <Text
                className="font-semibold text-blue_gray_100 text-left w-auto"
                as="h4"
                variant="h4"
              >
                Frontend Developer
              </Text>
            </div>
          </div>
          <div className="flex flex-1 sm:flex-col flex-row gap-2 h-full items-center justify-end w-full">
            <ProfileProfilestats
              className="bg-black_900 flex sm:flex-1 flex-col items-center justify-center p-2 rounded self-stretch shadow-bs1 w-auto sm:w-full"
              p12projects={
                <>
                  12
                  <br />
                  PROJECTS
                </>
              }
            />
            <ProfileProfilestats
              className="bg-black_900 flex sm:flex-1 flex-col items-center justify-center p-2 rounded self-stretch shadow-bs2 w-auto sm:w-full"
              p12projects={
                <>
                  10
                  <br />
                  HACKATHONS
                </>
              }
            />
            <ProfileProfilestats
              className="bg-black_900 flex sm:flex-1 flex-col items-center justify-center p-2 rounded self-stretch shadow-bs3 w-auto sm:w-full"
              p12projects={
                <>
                  68
                  <br />
                  FOLLOWER
                </>
              }
            />
            <ProfileProfilestats
              className="bg-black_900 flex sm:flex-1 flex-col items-center justify-center p-2 rounded self-stretch shadow-bs4 w-auto sm:w-full"
              p12projects={
                <>
                  24
                  <br />
                  FOLLOWING
                </>
              }
            />
            <ProfileProfilestats
              className="bg-black_900 flex sm:flex-1 flex-col items-center justify-center p-2 rounded self-stretch shadow-bs5 w-auto sm:w-full"
              p12projects={
                <>
                  16
                  <br />
                  LIKES
                </>
              }
            />
          </div>
        </div>
        <div className="bg-blue_A400 flex flex-col h-[60px] md:h-auto items-center justify-center max-w-[1200px] mx-auto md:px-5 rounded w-full">
          <div className="flex flex-row gap-4 h-[60px] md:h-auto items-center justify-start max-w-[1200px] p-2 rounded w-full">
            <Text
              className="flex-1 font-bold text-gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              Rank
            </Text>
            <Text
              className="flex-1 font-bold text-gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              XP
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1200px] mx-auto md:px-5 py-4 w-full">
          <div className="flex flex-1 flex-col gap-4 h-full items-center justify-start w-full">
            <div className="bg-black_900 flex sm:flex-col flex-row gap-2 h-full items-center justify-start p-2 rounded w-full">
              <div className="flex flex-1 flex-col items-center justify-center w-full">
                <div className="flex flex-col gap-2 items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-blue_gray_100 text-center w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Your rank among all
                  </Text>
                  <ProfileComboboxrank className="flex flex-col items-center justify-start w-full" />
                </div>
              </div>
              <Text
                className="text-center text-cyan_300 text-shadow-ts1 w-auto"
                as="h1"
                variant="h1"
              >
                746 th
              </Text>
            </div>
            <Input
              wrapClassName="w-full"
              className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-gray_100 sm:h-auto text-gray_100 text-left text-lg w-full"
              name="wallettitle"
              placeholder="Wallet"
              shape="RoundedBorder4"
              size="lg"
              variant="FillBlueA400"
            ></Input>
            <div className="bg-black_900 flex sm:flex-col flex-row gap-2 h-full items-center justify-start p-2 rounded w-full">
              <div className="bg-black_900 flex flex-1 flex-col gap-4 items-center justify-center rounded w-full">
                <div className="flex flex-col items-center justify-center self-stretch w-auto">
                  <div className="flex flex-col items-start justify-center self-stretch w-auto">
                    <Text
                      className="font-bold text-center text-green_A700 w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Total Earnings
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-center text-green_A700 text-shadow-ts1 w-auto"
                  as="h1"
                  variant="h1"
                >
                  1200 $
                </Text>
              </div>
              <div className="bg-black_900 flex flex-1 flex-col gap-4 items-center justify-center rounded w-full">
                <div className="flex flex-col items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-bold text-center text-yellow_900 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    DevCoin{" "}
                  </Text>
                </div>
                <Text
                  className="text-center text-shadow-ts1 text-yellow_900 w-auto"
                  as="h1"
                  variant="h1"
                >
                  20 DC
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
            <div className="bg-black_900 flex sm:flex-col flex-row sm:gap-5 h-[126px] md:h-auto items-center justify-start rounded w-full">
              <div className="flex flex-col h-[60px] md:h-auto items-center justify-center w-[60px]">
                <Text
                  className="font-bold text-center text-white_A700"
                  as="h4"
                  variant="h4"
                ></Text>
              </div>
              <div className="h-[100px] md:h-[37px] sm:h-[71px] p-2 relative w-full">
                <div className="absolute flex flex-1 flex-col gap-2 h-max inset-[0] items-center justify-start m-auto w-full">
                  <div className="bg-blue_gray_100 flex flex-col items-start justify-start rounded w-full">
                    <div className="bg-cyan_300 h-[15px] rounded w-[53%]"></div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col items-start justify-center w-full">
                      <Text
                        className="font-semibold text-blue_gray_100 text-center w-auto"
                        as="h6"
                        variant="h6"
                      >
                        2400 XP
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-center w-full">
                      <Text
                        className="font-semibold text-blue_gray_100 text-center w-auto"
                        as="h6"
                        variant="h6"
                      >
                        3200 XP
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bg-cyan_300 bottom-[23%] font-semibold justify-center p-1 right-[43%] rounded self-stretch text-gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  3200
                </Text>
              </div>
              <div className="flex flex-col h-[60px] md:h-auto items-center justify-center w-[60px]">
                <Text
                  className="font-semibold text-center text-white_A700"
                  as="h4"
                  variant="h4"
                ></Text>
              </div>
            </div>
            <div className="bg-black_900 flex flex-col font-inter items-center justify-center rounded w-full">
              <div className="flex flex-col items-center justify-start p-1 w-[93%] md:w-full">
                <div className="flex flex-col justify-start mb-2 w-[97%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic rotate-[90deg] text-center text-gray_700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        XP
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[37px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="not-italic text-gray_700 text-right w-auto"
                        variant="body1"
                      >
                        450
                      </Text>
                      <Text
                        className="not-italic text-gray_700 text-right w-auto"
                        variant="body1"
                      >
                        400
                      </Text>
                      <Text
                        className="not-italic text-gray_700 text-right w-auto"
                        variant="body1"
                      >
                        350
                      </Text>
                      <Text
                        className="not-italic text-gray_700 text-right w-auto"
                        variant="body1"
                      >
                        300
                      </Text>
                      <Text
                        className="not-italic text-gray_700 text-right w-auto"
                        variant="body1"
                      >
                        250
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[90%] sm:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[205px] items-center justify-start p-1.5 w-full"
                        style={{
                          backgroundImage: "url('images/img_group86.svg')",
                        }}
                      >
                        <Img
                          src="images/img_group.svg"
                          className="h-[150px] mb-10 w-auto"
                          alt="group"
                        />
                      </div>
                      <Img
                        src="images/img_group_indigo_100.svg"
                        className="h-px w-auto"
                        alt="group_One"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end ml-auto w-[85%] md:w-full">
                    <Text
                      className="not-italic text-center text-gray_700 w-auto"
                      variant="body1"
                    >
                      Sept 2022
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[26px] not-italic text-center text-gray_700 w-auto"
                      variant="body1"
                    >
                      Oct 2022
                    </Text>
                    <Text
                      className="ml-7 sm:ml-[0] not-italic text-center text-gray_700 w-auto"
                      variant="body1"
                    >
                      Nov 2022
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[27px] not-italic text-center text-gray_700 w-auto"
                      variant="body1"
                    >
                      Dec 2022
                    </Text>
                    <Text
                      className="ml-7 sm:ml-[0] not-italic text-center text-gray_700 w-auto"
                      variant="body1"
                    >
                      Jan 2023
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[29px] not-italic text-center text-gray_700 w-auto"
                      variant="body1"
                    >
                      Feb 2023
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Input
          wrapClassName="w-[84%]"
          className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-gray_100 sm:h-auto text-gray_100 text-left text-lg w-full"
          name="hackathonstitle"
          placeholder="Achievements"
          shape="RoundedBorder4"
          size="lg"
          variant="FillBlueA400"
        ></Input>
        <div className="gap-2 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center max-w-[1200px] min-h-[auto] mx-auto md:px-5 w-full">
          <ProfileAchievements
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst="Join your first hackathon"
          />
          <ProfileAchievements
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst="Join your first team"
          />
          <ProfileAchievements
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst="1 Hackathon Win"
          />
          <ProfileAchievements1
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst="5 Hackathon Win"
          />
          <ProfileAchievements1
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst="10 Hackathon Win"
          />
          <ProfileAchievements1
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst="Win a hackathon as a team"
          />
          <ProfileAchievements
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst="Complete 1 year in Devpost"
          />
          <ProfileAchievements
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst="Write 1 blog post"
          />
          <ProfileAchievements
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst="Follow at least 20 people"
          />
          <ProfileAchievements1
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst="Following by 20 people"
          />
          <ProfileAchievements1
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst={
              <>
                Join 5 fintech-themed <br />
                hackathons
              </>
            }
          />
          <ProfileAchievements1
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst={
              <>
                Participate in <br />5 eco-themed hackathons
              </>
            }
          />
          <ProfileAchievements1
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst={
              <>
                Join 5 hackathons <br />
                with an education theme
              </>
            }
          />
          <ProfileAchievements1
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst={
              <>
                Join 5 IoT-themed <br />
                hackathons
              </>
            }
          />
          <ProfileAchievements1
            className="flex flex-1 flex-col h-[120px] md:h-auto items-center justify-center rounded w-full"
            joinyourfirst={
              <>
                Join 5 design-themed <br />
                hackathons
              </>
            }
          />
        </div>
        <Footer className="bg-black_900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProfilePage;
