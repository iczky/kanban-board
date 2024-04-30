interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="text-lg font-semibold text-slate-950">{title}</h1>;
};

export default Title;
