import React from "react";
import classnames from "classnames";
import "../../styles/global.scss";

const CSS_PREFIX = "row";

type RowProps = {
  children: React.ReactNode;
  className?: string;
};

const Row = (props: RowProps) => {
  const { children, className } = props;
  return <div className={classnames(CSS_PREFIX, className)}>{children}</div>;
};

export default Row;
