import React from "react";

import { Img, Text } from "components";

const ProfileAchievements1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-full items-center justify-center w-full">
          <Img
            src="images/img_ellipse16_2.png"
            className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
            alt="ellipseSixteen"
          />
        </div>
        <div className="flex flex-col h-[50px] md:h-auto items-center justify-center w-full">
          <Text
            className="font-roboto font-semibold text-center text-white_A700_33 w-auto"
            as="h6"
            variant="h6"
          >
            {props?.joinyourfirst}
          </Text>
        </div>
      </div>
    </>
  );
};

ProfileAchievements1.defaultProps = { joinyourfirst: "5 Hackathon Win" };

export default ProfileAchievements1;
