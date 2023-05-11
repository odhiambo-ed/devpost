import React from "react";

import { Text } from "components";

const ProjectPagePresentationColumndescription = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-normal font-roboto not-italic text-black_900 text-left"
          as="h5"
          variant="h5"
        >
          {props?.description}
        </Text>
      </div>
    </>
  );
};

ProjectPagePresentationColumndescription.defaultProps = {
  description: (
    <>
      The idea for 1View came from the existing user feedback and issues they
      have on the monday community and #mydreamapp inspiration board.
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
      1View was implemented to solve all these issues and more by keeping
      simplicity as its core. Users can create tailor-made data rich views for
      their own requirements. 1View will help them to do more in less time by
      building their dream view.
    </>
  ),
};

export default ProjectPagePresentationColumndescription;
