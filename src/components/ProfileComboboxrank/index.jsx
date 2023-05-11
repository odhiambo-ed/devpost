import React from "react";

import { Img, SelectBox } from "components";

const participantsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProfileComboboxrank = (props) => {
  return (
    <>
      <div className={props.className}>
        <SelectBox
          className="font-roboto font-semibold leading-[normal] text-blue_gray_100 text-left text-sm w-full"
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
          placeholder="participants"
          shape="RoundedBorder4"
          isMulti={false}
          options={participantsOptionsList}
          name="frameForty"
          variant="OutlineBluegray400_1"
        />
      </div>
    </>
  );
};

ProfileComboboxrank.defaultProps = {};

export default ProfileComboboxrank;
