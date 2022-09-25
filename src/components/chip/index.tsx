import "./chip.scss";

type Props = {
  children: React.ReactNode;
}

const Chip = (props: Props) => {
  const { children } = props;
  return (
    <div className="chip">
      {children}
    </div>
  );
};

export default Chip;
