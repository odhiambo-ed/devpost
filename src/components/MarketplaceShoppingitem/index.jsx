import React from "react";

import { Button, Img, Text } from "components";

const MarketplaceShoppingitem = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.framefortytwo}
          className="h-40 sm:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-80 md:w-full"
          alt="frameFortyTwo"
        />
        <div className="bg-gray_900 flex flex-col items-start justify-start py-2 w-80 md:w-full">
          <div className="flex flex-col items-center justify-start px-4 py-2 w-full">
            <Text
              className="font-bold font-roboto text-left text-white_A700 w-auto"
              as="h5"
              variant="h5"
            >
              {props?.shoppingitem}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start px-4 py-2 w-full">
            <Text
              className="font-normal font-roboto not-italic text-left text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.description}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start px-4 py-2 w-full">
            <Text
              className="font-roboto text-left text-yellow_900 w-auto"
              as="h2"
              variant="h2"
            >
              {props?.dccounter}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start px-4 w-full">
            <Button
              className="cursor-pointer flex-1 font-normal font-roboto leading-[normal] not-italic text-center text-cyan_300 text-sm w-full"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineCyan300"
            >
              {props?.addToCart}
            </Button>
            <Button
              className="cursor-pointer flex-1 font-normal font-roboto leading-[normal] not-italic text-center text-sm text-white_A700 w-full"
              shape="RoundedBorder4"
              size="sm"
              variant="FillCyan300"
            >
              {props?.buyNow}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

MarketplaceShoppingitem.defaultProps = {
  framefortytwo: "images/img_frame42.png",
  shoppingitem: "T-Shirt",
  description: "Eat - Sleep - Code - Repeat",
  dccounter: "10 DC",
  addToCart: "Add to Cart",
  buyNow: "Buy Now",
};

export default MarketplaceShoppingitem;
