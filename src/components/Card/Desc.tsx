interface DescProps {
  desc: string;
}

const Desc: React.FC<DescProps> = ({ desc }) => {
  return <p className="text-sm font-normal">{desc}</p>;
};

export default Desc;
