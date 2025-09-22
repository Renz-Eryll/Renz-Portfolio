const TitleHeader = ({ title, sub }) => {
  return (
    <div className="text-center mb-10">
      <p className="text-purple-400 text-sm font-medium mb-2">{sub}</p>
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default TitleHeader;
