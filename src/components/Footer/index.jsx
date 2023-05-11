import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="bg-black_900 flex md:flex-col flex-row gap-12 items-start justify-start max-w-[1200px] px-4 py-8 w-full">
          <div className="flex flex-col h-[260px] md:h-auto items-center justify-center">
            <div className="flex flex-col gap-2 items-center justify-start self-stretch w-auto">
              <Img
                src="images/img_logo.png"
                className="h-[30px] md:h-auto object-cover w-[154px] sm:w-full"
                alt="logo_One"
              />
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                <Img
                  src="images/img_mdiyoutube.svg"
                  className="h-6 w-6"
                  alt="mdiyoutube"
                />
                <Img
                  src="images/img_mditwitter.svg"
                  className="h-6 w-6"
                  alt="mditwitter"
                />
                <Img
                  src="images/img_mdilinkedin.svg"
                  className="h-6 w-6"
                  alt="mdilinkedin"
                />
                <Img
                  src="images/img_icbaselinefacebook.svg"
                  className="h-6 w-6"
                  alt="icbaselinefaceb"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
            <Text
              className="font-roboto text-gray_100 text-left w-auto"
              as="h2"
              variant="h2"
            >
              COMPANY
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              ABOUT
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              CAREERS
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              PRESS
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              CONTACT
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
            <Text
              className="font-roboto text-gray_100 text-left w-auto"
              as="h2"
              variant="h2"
            >
              DEVELOPERS
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              HACKATHONS
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              DEVCITY
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              LEADERBOARD
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              TEAMS
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              EVENTS
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              BLOG
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              AVAILABLE JOBS
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              MARKETPLACE
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
            <Text
              className="font-roboto text-gray_100 text-left w-auto"
              as="h2"
              variant="h2"
            >
              PROFESSIONALS
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              HACKATHONS
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              TALENTS
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              MARKETING
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              SALES
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              LEARNING
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left uppercase w-auto"
              as="h3"
              variant="h3"
            >
              Community guidelines
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              SECURITY
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              CA NOTICE
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              PRIVACY POLICY
            </Text>
            <Text
              className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              TERMS OF SERVICE
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
