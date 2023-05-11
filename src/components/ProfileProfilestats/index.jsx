import React from "react";

import { Text } from "components";

const ProfileProfilestats = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-normal font-roboto not-italic text-center text-green_A700"
          as="h4"
          variant="h4"
        >
          {props?.p12projects}
        </Text>
      </div>
    </>
  );
};

ProfileProfilestats.defaultProps = {
  p12projects: (
    <>
      12
      <br />
      PROJECTS
    </>
  ),
};

export default ProfileProfilestats;
