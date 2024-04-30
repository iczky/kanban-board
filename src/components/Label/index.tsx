interface LabelProps {
  label: string;
}

const Label: React.FC<LabelProps> = ({ label }) => {
  return (
    <div className="flex space-x-2">
      <div
        className={`px-3 py-1 text-base text-slate-950 rounded-[20px] w-fit ${
          label === "Not Started"
            ? "bg-teal-400"
            : label === "In Progress"
            ? "bg-blue-500"
            : label === "Blocked"
            ? "bg-rose-700"
            : label === "Done"
            ? "bg-green-600"
            : "bg-gray-300"
        }`}>
        {label}
      </div>
    </div>
  );
};

export default Label;
