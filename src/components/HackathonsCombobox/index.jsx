import React from "react";

import { Img, SelectBox } from "components";

const ascendingRewardAmountOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HackathonsCombobox = (props) => {
  return (
    <>
      <div className={props.className}>
        <SelectBox
          className="font-normal font-roboto leading-[normal] not-italic text-blue_gray_100 text-left text-sm w-full"
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
          placeholder="Ascending reward amount "
          shape="RoundedBorder4"
          isMulti={false}
          options={ascendingRewardAmountOptionsList}
          name="frameForty"
          variant="OutlineBluegray400"
        />
      </div>
    </>
  );
};

HackathonsCombobox.defaultProps = {};

export default HackathonsCombobox;
