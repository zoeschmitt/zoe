// Component inspired from Brittany Chiang's website https://brittanychiang.com/
import classnames from "classnames";
import "./sideContent.scss";

const CSS_PREFIX = "side";

type Props = {
  children?: React.ReactNode;
  right?: boolean;
  email?: boolean;
  className?: string;
};

const SideContent = (props: Props) => {
  const { children, right, email, className } = props;
  return (
    <div
      className={classnames(CSS_PREFIX, className, {
        [`${CSS_PREFIX}--right`]: right,
      })}
    >
      <div
        className={classnames({
          email: email,
          socials: !email,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default SideContent;
