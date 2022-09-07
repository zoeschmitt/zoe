import "./button.scss";
import classnames from "classnames";

const CSS_PREFIX = "btn";
const CSS_STATE = "state";

type ButtonProps = {
  children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  secondary?: boolean;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  const {
    children,
    active,
    disabled,
    className,
    secondary,
    onClick,
    ...remaningProps
  } = props;
  return (
    <button
      className={classnames(
        CSS_PREFIX,
        {
          [`${CSS_PREFIX}--secondary`]: Boolean(secondary),
          [`${CSS_STATE}--active`]: Boolean(active),
          [`${CSS_STATE}--disabled`]: Boolean(disabled),
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...remaningProps}
    >
      {children}
    </button>
  );
};

export default Button;
