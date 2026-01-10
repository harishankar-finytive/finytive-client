const FloatingCard = ({ position, title, stats, text, icon, children }) => {
  return (
    <div
      className={`absolute ${position} bg-white rounded-xl shadow-lg p-4 text-sm `}
    >
      {title && (
        <div className="mb-2 font-semibold text-gray-800">
          {title}
        </div>
      )}

      {stats && (
        <div className="space-y-1 text-gray-600">
          {stats.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.label}</span>
              <span className="font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {text && (
        <div className="flex items-center gap-2 text-gray-700">
          {icon && (
            <span className="w-5 h-5 flex items-center justify-center bg-brandOrange text-white rounded-full">
              ✓
            </span>
          )}
          {text}
        </div>
      )}

      {children}
    </div>
  );
};

export default FloatingCard;
