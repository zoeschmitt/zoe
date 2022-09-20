import "./dialog.scss";

const Dialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dialog">
      <div className="bg"></div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Dialog;
