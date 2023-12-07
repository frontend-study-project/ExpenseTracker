import React from "react";
import CircleLoader from "react-spinners/FadeLoader";

const Loading = () => {
  return (
    <div className="contentWrap">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircleLoader
          color="#3182ce"
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    </div>
  );
};

export default Loading;
