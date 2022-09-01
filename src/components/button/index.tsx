import "./button.scss";
import classnames from "classnames";

const CSS_PREFIX = "btn";
const CSS_STATE = "state";

type ButtonProps = {
  children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
};

const Button = (props: ButtonProps) => {
  const { children, active, disabled, className } = props;
  return (
    <button
      className={classnames(
        CSS_PREFIX,
        {
          [`${CSS_STATE}--active`]: Boolean(active),
          [`${CSS_STATE}--disabled`]: Boolean(disabled),
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
