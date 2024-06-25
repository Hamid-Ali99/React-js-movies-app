import React from "react";
import "./style.scss";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
