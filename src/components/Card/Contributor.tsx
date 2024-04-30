interface ContributorProps {
  contributors?: string[];
}

const Contributor: React.FC<ContributorProps> = ({ contributors }) => {
  if (!contributors) {
    return null;
  }

  return (
    <div className="flex gap-1">
      {contributors.map((contributor, index) => (
        <img src={contributor} alt="Image Contributor" key={index} />
      ))}
    </div>
  );
};

export default Contributor;
