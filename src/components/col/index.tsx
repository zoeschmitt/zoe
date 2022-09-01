import React from "react";
import classnames from "classnames";
import "../../styles/global.scss";

const CSS_PREFIX = "col";

type ColProps = {
  children: React.ReactNode;
  className?: string;
};

const Col = (props: ColProps) => {
  const { children, className } = props;
  return <div className={classnames(CSS_PREFIX, className)}>{children}</div>;
};

export default Col;
