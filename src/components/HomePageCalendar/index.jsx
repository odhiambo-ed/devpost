import React from "react";

import { Img, List, Text } from "components";

const HomePageCalendar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-10 h-8 md:h-auto items-center justify-between px-2 w-full">
          {!!props?.arrowleftOne ? (
            <Img
              src={props?.arrowleftOne}
              className="h-full max-h-8 w-auto sm:w-auto"
              alt="arrowleft_One"
            />
          ) : null}
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-bold font-roboto text-gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              {props?.month}
            </Text>
          </div>
          {!!props?.next ? (
            <Img
              src={props?.next}
              className="h-full max-h-8 w-auto sm:w-auto"
              alt="next"
            />
          ) : null}
        </div>
        <div className="sm:gap-5 gap-px grid sm:grid-cols-1 grid-cols-7 justify-center min-h-[auto] w-full">
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            {!!props?.sun ? (
              <Text
                className="font-roboto font-semibold text-blue_gray_400 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.sun}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-blue_gray_400 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.mon}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-blue_gray_400 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.tue}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-blue_gray_400 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.wed}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-blue_gray_400 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.thu}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-blue_gray_400 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.fri}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            {!!props?.sat ? (
              <Text
                className="font-roboto font-semibold text-blue_gray_400 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.sat}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            {!!props?.twentynine ? (
              <Text
                className="font-roboto font-semibold text-blue_gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.twentynine}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-blue_gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.thirty}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-blue_gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.thirtyone}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.one}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.two}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.three}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            {!!props?.four ? (
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.four}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            {!!props?.five ? (
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.five}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.six}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.seven}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.eight}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.nine}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Text
              className="font-roboto font-semibold text-gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.ten}
            </Text>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            {!!props?.eleven ? (
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.eleven}
              </Text>
            ) : null}
          </div>
        </div>
        <List
          className="flex-col sm:gap-5 grid items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 h-full items-center justify-start w-full">
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              {!!props?.twelve ? (
                <Text
                  className="font-roboto font-semibold text-gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  {props?.twelve}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.thirteen}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="bg-blue_A400 flex font-roboto font-semibold h-[30px] items-center justify-center rounded-[50%] text-center text-gray_100 w-[30px]"
                as="h6"
                variant="h6"
              >
                {props?.framefiftyseven}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.fifteen}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.sixteen}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.seventeen}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              {!!props?.eighteen ? (
                <Text
                  className="font-roboto font-semibold text-gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  {props?.eighteen}
                </Text>
              ) : null}
            </div>
          </div>
          <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 h-full items-center justify-start w-full">
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              {!!props?.nineteen ? (
                <Text
                  className="font-roboto font-semibold text-gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  {props?.nineteen}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.twenty}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.twentyone}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.twentytwo}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.twentythree}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.twentyfour}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              {!!props?.twentyfive ? (
                <Text
                  className="font-roboto font-semibold text-gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  {props?.twentyfive}
                </Text>
              ) : null}
            </div>
          </div>
          <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 h-full items-center justify-start w-full">
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              {!!props?.twentysix ? (
                <Text
                  className="font-roboto font-semibold text-gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  {props?.twentysix}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.twentyseven}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.twentyeight}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-blue_gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.one1}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-blue_gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.two1}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-blue_gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.three1}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              {!!props?.four1 ? (
                <Text
                  className="font-roboto font-semibold text-blue_gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  {props?.four1}
                </Text>
              ) : null}
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

HomePageCalendar.defaultProps = {
  month: "February 2023",
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  thirty: "30",
  thirtyone: "31",
  one: "1",
  two: "2",
  three: "3",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  ten: "10",
  thirteen: "13",
  framefiftyseven: "14",
  fifteen: "15",
  sixteen: "16",
  seventeen: "17",
  twenty: "20",
  twentyone: "21",
  twentytwo: "22",
  twentythree: "23",
  twentyfour: "24",
  twentyseven: "27",
  twentyeight: "28",
  one1: "1",
  two1: "2",
  three1: "3",
};

export default HomePageCalendar;
