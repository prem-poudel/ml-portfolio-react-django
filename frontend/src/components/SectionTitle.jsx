const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-black mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-24 h-1 mx-auto bg-teal-500 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
