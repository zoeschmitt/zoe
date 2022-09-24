import "./chip.scss";

type Props = {
  text: string;
};

const Chip = (props: Props) => {
  const { text } = props;

  return (
    <div className="chip">
      {text}
    </div>
  );
};

export default Chip;
