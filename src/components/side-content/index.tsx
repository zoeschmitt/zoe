// Component inspired from Brittany Chiang's website https://brittanychiang.com/
import classnames from "classnames";
import "./sideContent.scss";

const CSS_PREFIX = "side";

type Props = {
  children?: React.ReactNode;
  right?: boolean;
  className?: string;
};

const SideContent = (props: Props) => {
  const { children, right, className } = props;
  return (
    <div
      className={classnames(CSS_PREFIX, className, {
        [`${CSS_PREFIX}--right`]: right,
      })}
    >
      <div className="socials">{children}</div>
    </div>
  );
};

export default SideContent;
