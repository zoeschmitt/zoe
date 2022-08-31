import "./page.scss";
import classnames from "classnames";

type PageProps = {
  className?: string;
  children?: React.ReactNode;
};

const Page = (props: PageProps) => {
  const { className, children } = props;
  return <div className={classnames("page", className)}>{children}</div>;
};

export default Page;
