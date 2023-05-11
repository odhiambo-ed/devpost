import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import HackathonsFilteritem from "components/HackathonsFilteritem";
import HackathonsRowclaritytagssoli from "components/HackathonsRowclaritytagssoli";
import HackathonsRowphcurrencycir from "components/HackathonsRowphcurrencycir";
import Header1 from "components/Header1";
import MarketplaceShoppingitem from "components/MarketplaceShoppingitem";

const ascendingPriceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MarketplacePage = () => {
  const hackathonsFilteritemPropList = [
    { location: "Accessories" },
    { location: "Cloud " },
    { location: "Education" },
    { location: "Electronics" },
    { location: "Gift Cards" },
    { location: "Media" },
    { location: "Wearable" },
  ];
  const marketplaceShoppingitemPropList = [
    {
      shoppingitem: "T-Shirt",
      dccounter: "10 DC",
      description: "Eat - Sleep - Code - Repeat",
      framefortytwo: "images/img_frame42.png",
    },
    {
      shoppingitem: "T-Shirt",
      dccounter: "10 DC",
      description: "STEM",
      framefortytwo: "images/img_frame42_160x320.png",
    },
    {
      shoppingitem: "T-Shirt",
      dccounter: "10 DC",
      description: "I Convert Coffee Into Code",
      framefortytwo: "images/img_frame42_1.png",
    },
    {
      shoppingitem: "Amazon Gift Card",
      dccounter: "50 DC",
      description: "Gift Card",
      framefortytwo: "images/img_frame42_2.png",
    },
    {
      shoppingitem: "T-Shirt",
      dccounter: "5 DC",
      description: "STEM",
      framefortytwo: "images/img_frame42_3.png",
    },
    {
      shoppingitem: "Udemy Coupon",
      dccounter: "5 DC",
      description: "Udemy Discount Coupon",
      framefortytwo: "images/img_frame42_4.png",
    },
    {
      shoppingitem: "Amazon EC2 Instance ",
      dccounter: "15 DC",
      description: "1 Month Free Instance",
      framefortytwo: "images/img_frame42_5.png",
    },
    {
      shoppingitem: "Stickers",
      dccounter: "3 DC",
      description: "Pack of 100 Programming Stickers",
      framefortytwo: "images/img_frame42_6.png",
    },
    {
      shoppingitem: "DALL-E 2 Credits",
      dccounter: "15 DC",
      description: "1000 Credits For DALL-E",
      framefortytwo: "images/img_frame42_7.png",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-roboto items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <Header1 className="bg-black_900 flex gap-4 h-[70px] md:h-auto items-center justify-center px-4 md:px-5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1200px] mx-auto md:px-5 w-full">
          <div className="bg-black_900 flex flex-col h-[1154px] md:h-auto items-start justify-start w-[200px]">
            <div className="flex flex-col items-center justify-center p-2 w-full">
              <div className="bg-yellow_900 flex flex-col items-center justify-center p-2 rounded w-full">
                <div className="flex flex-col gap-1 items-center justify-center self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-gray_100 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Your Balance
                  </Text>
                  <Text
                    className="font-bold text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    20 DC
                  </Text>
                </div>
              </div>
            </div>
            <HackathonsRowclaritytagssoli
              className="flex flex-row gap-2 items-center justify-start px-2 py-1 w-full"
              interesttags="Categories"
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
            <HackathonsRowphcurrencycir
              className="flex flex-row gap-2 items-center justify-start px-2 py-1 w-full"
              prizes="Price (DC)"
            />
            <div className="flex flex-row gap-2 items-center justify-start p-2 w-full">
              <Text
                className="border border-blue_gray_400 border-solid flex-1 font-normal not-italic p-2 rounded text-blue_gray_400 text-left w-full"
                as="h5"
                variant="h5"
              >
                Min
              </Text>
              <Text
                className="border border-blue_gray_400 border-solid flex-1 font-normal not-italic p-2 rounded text-blue_gray_400 text-left w-full"
                as="h5"
                variant="h5"
              >
                Max
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-2 w-full">
              <Button
                className="cursor-pointer font-semibold leading-[normal] text-center text-white_A700 text-xs w-full"
                shape="RoundedBorder4"
                size="sm"
                variant="FillBlueA400"
              >
                Filter
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 h-full items-start justify-start w-full">
            <div className="bg-black_900 flex md:flex-col flex-row gap-2 h-[60px] md:h-auto items-center justify-start px-2 w-full">
              <Input
                wrapClassName="md:flex-1 w-[36%] md:w-full"
                className="font-normal leading-[normal] not-italic p-0 placeholder:text-blue_gray_400 text-blue_gray_400 text-left text-sm w-full"
                type="text"
                name="frameThirtyEight_One"
                placeholder="Search by item name"
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
              <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                <div className="flex flex-col items-center justify-start w-1/2 sm:w-full">
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
                    placeholder="Ascending price"
                    shape="RoundedBorder4"
                    isMulti={false}
                    options={ascendingPriceOptionsList}
                    name="frameForty"
                    variant="OutlineBluegray400"
                  />
                </div>
              </div>
              <div className="h-12 md:h-5 relative w-12">
                <Img
                  src="images/img_cart.svg"
                  className="absolute h-5 inset-[0] justify-center m-auto w-[19px]"
                  alt="cart"
                />
                <Text
                  className="absolute bg-yellow_900 flex font-semibold h-4 items-center justify-center right-[17%] rounded-[50%] text-center text-white_A700 top-[13%] w-4"
                  variant="body2"
                >
                  0
                </Text>
              </div>
            </div>
            <div className="gap-2 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {marketplaceShoppingitemPropList.map((props, index) => (
                <React.Fragment key={`MarketplaceShoppingitem${index}`}>
                  <MarketplaceShoppingitem
                    className="flex flex-1 flex-col items-center justify-start w-full"
                    addToCart="Add to Cart"
                    buyNow="Buy Now"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <Footer className="bg-black_900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default MarketplacePage;
