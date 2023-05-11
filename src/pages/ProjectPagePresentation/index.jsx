import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import HomePageRight from "components/HomePageRight";
import ProjectPagePresentationColumndescription from "components/ProjectPagePresentationColumndescription";

const ProjectPagePresentationPage = () => {
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-roboto items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <Header1 className="bg-black_900 flex gap-4 h-[70px] md:h-auto items-center justify-center px-4 md:px-5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1200px] mx-auto md:px-5 w-full">
          <div className="bg-black_900 flex flex-col h-[642px] md:h-auto items-start justify-start w-[200px]">
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Project Info
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Team
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Project Links
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Calendar
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-bold text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Presentation
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 h-full items-start justify-start px-2 w-full">
            <div className="flex flex-col items-center justify-center px-2 w-full">
              <div className="border-b border-blue_gray_100 border-solid flex flex-col items-center justify-center w-full">
                <div className="flex flex-col h-full items-center justify-start py-2 w-full">
                  <Text
                    className="font-bold text-gray_100 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Presentation
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black_900 flex md:flex-col flex-row gap-2 items-center justify-start p-2 rounded w-full">
              <div className="flex flex-1 flex-col items-center justify-start max-w-[700px] w-full">
                <div className="bg-blue_gray_900_cc flex flex-col items-center justify-end p-[92px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col items-start justify-start w-52">
                    <div className="gap-2 grid grid-cols-2 h-52 justify-center min-h-[auto] w-52">
                      <div className="border border-blue_gray_100 border-solid flex flex-col gap-1 h-[100px] md:h-auto items-center justify-center w-full">
                        <Img
                          src="images/img_play.svg"
                          className="h-12 w-12"
                          alt="play"
                        />
                        <Text
                          className="font-semibold text-blue_gray_100 text-left w-auto"
                          as="h4"
                          variant="h4"
                        >
                          VIDEO
                        </Text>
                      </div>
                      <div className="border border-blue_gray_100 border-solid flex flex-col gap-1 h-[100px] md:h-auto items-center justify-center w-full">
                        <Img
                          src="images/img_icbaselineimage.svg"
                          className="h-12 w-12"
                          alt="icbaselineimage"
                        />
                        <Text
                          className="font-semibold text-blue_gray_100 text-left w-auto"
                          as="h4"
                          variant="h4"
                        >
                          IMAGE
                        </Text>
                      </div>
                      <div className="border border-blue_gray_100 border-solid flex flex-col gap-1 h-[100px] md:h-auto items-center justify-center w-full">
                        <Img
                          src="images/img_materialsymbolsshapes.svg"
                          className="h-12 w-12"
                          alt="materialsymbols"
                        />
                        <Text
                          className="font-semibold text-blue_gray_100 text-left w-auto"
                          as="h4"
                          variant="h4"
                        >
                          SHAPE
                        </Text>
                      </div>
                      <div className="border border-blue_gray_100 border-solid flex flex-col gap-1 h-[100px] md:h-auto items-center justify-center w-full">
                        <Img
                          src="images/img_iconparksolidpagetemplate.svg"
                          className="h-12 w-12"
                          alt="iconparksolidpa"
                        />
                        <Text
                          className="font-semibold text-blue_gray_100 text-left w-auto"
                          as="h4"
                          variant="h4"
                        >
                          TEMPLATE
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-2 items-center justify-start py-2 w-full">
                  <div className="h-[100px] relative w-[26%] md:w-full">
                    <Img
                      src="images/img_page.png"
                      className="h-[100px] m-auto object-cover rounded w-[177px]"
                      alt="page"
                    />
                    <HomePageRight
                      className="absolute bg-blue_gray_400_33 flex flex-col md:h-auto h-max inset-y-[0] items-center justify-center left-[0] my-auto w-8 sm:w-full"
                      arrowleft="images/img_arrowleft_blue_gray_100.svg"
                    />
                  </div>
                  <Button
                    className="cursor-pointer font-semibold h-[100px] leading-[normal] text-base text-black_900 text-center w-[177px]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="OutlineBluegray200"
                  >
                    PROBLEM
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[100px] leading-[normal] text-base text-blue_gray_200 text-center w-[177px]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="OutlineBluegray200_1"
                  >
                    SOLUTION
                  </Button>
                  <div className="border border-blue_gray_200 border-solid flex flex-row h-[100px] md:h-auto items-center justify-center rounded shadow-bs w-[142px]">
                    <Text
                      className="font-semibold text-blue_gray_200 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      DEMO
                    </Text>
                    <HomePageRight
                      className="bg-blue_gray_400_33 flex flex-col h-16 md:h-auto items-center justify-center rotate-[180deg] w-[31px] sm:w-full"
                      arrowleft="images/img_arrowleft.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray_900_cc flex flex-1 flex-col h-full items-center justify-start px-2 rounded w-full">
                <div className="flex flex-col gap-2 h-full items-start justify-start py-2 w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="font-bold text-gray_100 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      PROBLEM
                    </Text>
                    <Line className="bg-gray_100 h-px w-full" />
                  </div>
                  <ProjectPagePresentationColumndescription
                    className="bg-blue_gray_100 border border-blue_gray_400 border-solid flex flex-col h-full items-start justify-start p-2 rounded w-full"
                    description={
                      <>
                        The idea for 1View came from the existing user feedback
                        and issues they have on the monday community and
                        #mydreamapp inspiration board.
                        <br />
                        Some of the most common issues users are having is to
                        <br />
                        See & update all tasks from one place
                        <br />
                        Create advanced filters to see what they only need
                        <br />
                        Able to auto sort pulses
                        <br />
                        Build dynamic and custom Kanban boards
                        <br />
                        Add sprint timelines and personal notes
                        <br />
                        1View was implemented to solve all these issues and more
                        by keeping simplicity as its core. Users can create
                        tailor-made data rich views for their own requirements.
                        1View will help them to do more in less time by building
                        their dream view.
                      </>
                    }
                  />
                </div>
                <div className="flex flex-col h-16 md:h-auto items-center justify-center py-2 w-full">
                  <Button
                    className="cursor-pointer font-semibold h-full leading-[normal] text-center text-white_A700 text-xs w-full"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBlueA400"
                  >
                    Save
                  </Button>
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

export default ProjectPagePresentationPage;
