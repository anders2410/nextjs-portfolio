import React from "react";

// The fallback component. Is shown while Next.js is fetching data from Contentful.
const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="s-banner" />
      <div className="s-header" />
      <div className="s-content" />
      <div className="s-content" />
      <div className="s-content" />
    </div>
  );
};

export default Skeleton;
