import React from "react";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import MainPageAppheader from "components/MainPageAppheader";
import MainPageRowcomingSoon from "components/MainPageRowcomingSoon";

const MainPagePage = () => {
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
        <div className="flex flex-col items-center justify-start max-w-[1200px] mx-auto p-[17px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[98%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[46px] w-auto md:w-full">
              <Text
                className="font-helveticaneue md:ml-[0] ml-[5px] text-gray_100 text-left uppercase w-auto"
                as="h1"
                variant="h1"
              >
                Join hackathons and win great prizes
              </Text>
              <Text
                className="font-normal font-roboto mt-[19px] not-italic text-blue_gray_100 text-left"
                as="h3"
                variant="h3"
              >
                <>
                  Check out hackathons organized by large companies or
                  government agencies
                  <br /> <br />
                  Apply for one of the competitions on different themes that
                  suits your skills <br />
                  Develop your projects and get the opportunity to win one of
                  the great prizes
                </>
              </Text>
              <Button
                className="cursor-pointer font-roboto font-semibold leading-[normal] mt-10 text-center text-sm text-white_A700 w-[140px]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillIndigoA200"
              >
                Explore
              </Button>
            </div>
            <Img
              src="images/img_awards1.png"
              className="h-[313px] sm:h-auto object-cover w-auto md:w-full"
              alt="awardsOne"
            />
          </div>
        </div>
        <div className="bg-black_900 flex md:flex-col flex-row gap-6 h-[100px] md:h-auto items-center justify-center max-w-[1200px] mx-auto md:px-5 rounded-lg shadow-bs w-full">
          <Img
            src="images/img_frame24.png"
            className="sm:flex-1 h-[60px] md:h-auto object-cover w-[120px] sm:w-full"
            alt="frameTwentyFour"
          />
          <Img
            src="images/img_frame25.png"
            className="h-[50px] md:h-auto object-cover w-[50px]"
            alt="frameTwentyFive"
          />
          <Img
            src="images/img_frame26.png"
            className="sm:flex-1 h-10 md:h-auto object-cover w-[100px] sm:w-full"
            alt="frameTwentySix"
          />
          <Img
            src="images/img_frame27.png"
            className="sm:flex-1 h-[50px] md:h-auto object-cover w-[150px] sm:w-full"
            alt="frameTwentySeven"
          />
          <Img
            src="images/img_frame28.png"
            className="sm:flex-1 h-[50px] md:h-auto object-cover w-[150px] sm:w-full"
            alt="frameTwentyEight"
          />
          <Img
            src="images/img_frame29.png"
            className="sm:flex-1 h-[50px] md:h-auto object-cover w-[60px] sm:w-full"
            alt="frameTwentyNine"
          />
          <Img
            src="images/img_frame30.png"
            className="sm:flex-1 h-[50px] md:h-auto object-cover w-[100px] sm:w-full"
            alt="frameThirty"
          />
          <Img
            src="images/img_frame31.png"
            className="sm:flex-1 h-[50px] md:h-auto object-cover w-[150px] sm:w-full"
            alt="frameThirtyOne"
          />
          <Img
            src="images/img_frame32.png"
            className="sm:flex-1 h-[50px] md:h-auto object-cover w-[100px] sm:w-full"
            alt="frameThirtyTwo"
          />
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1200px] mx-auto p-3.5 md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[9px] md:ml-[0] ml-[43px] w-[89%] md:w-full">
            <Img
              src="images/img_awards1_311x582.png"
              className="h-[311px] sm:h-auto object-cover w-auto md:w-full"
              alt="awardsOne_One"
            />
            <div className="flex flex-col items-end justify-start w-auto md:w-full">
              <Text
                className="font-helveticaneue text-gray_100 text-left uppercase w-auto"
                as="h1"
                variant="h1"
              >
                FIND YOUR TEAM
              </Text>
              <Text
                className="font-normal font-roboto mt-[19px] not-italic text-blue_gray_100 text-right"
                as="h3"
                variant="h3"
              >
                <>
                  Build your team for competitions <br />
                  Match with your perfect teammates
                  <br />
                  Meet new friends and make great projects
                </>
              </Text>
              <Button
                className="cursor-pointer font-roboto font-semibold leading-[normal] mt-10 text-center text-sm text-white_A700 w-[140px]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillIndigoA200"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1200px] mx-auto p-[25px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-1.5 mt-[19px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
              <Text
                className="font-helveticaneue md:ml-[0] ml-[5px] text-gray_100 text-left uppercase w-auto"
                as="h1"
                variant="h1"
              >
                Find your dream job
              </Text>
              <Text
                className="font-normal font-roboto mt-[19px] not-italic text-blue_gray_100 text-left"
                as="h3"
                variant="h3"
              >
                <>
                  Strengthen your profile and skills by participating in
                  hackathons <br />
                  Show professionals that you are open to job opportunities
                  <br />
                  Get noticed by top companies for a jobs you deserve
                </>
              </Text>
              <Button
                className="cursor-pointer font-roboto font-semibold leading-[normal] mt-10 text-center text-sm text-white_A700 w-[140px]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillIndigoA200"
              >
                Join Now
              </Button>
            </div>
            <Img
              src="images/img_job1.png"
              className="md:flex-1 h-[273px] sm:h-auto object-cover w-auto md:w-full"
              alt="jobOne"
            />
          </div>
        </div>
        <Footer className="bg-black_900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default MainPagePage;
