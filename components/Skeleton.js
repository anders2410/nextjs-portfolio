import React from "react";

// The fallback component. Is shown while Next.js is fetching data from Contentful.
const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="s-banner"></div>
      <div className="s-header"></div>
      <div className="s-content"></div>
      <div className="s-content"></div>
      <div className="s-content"></div>
    </div>
  );
};

export default Skeleton;
