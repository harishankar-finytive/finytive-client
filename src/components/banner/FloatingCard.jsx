const FloatingCard = ({ position, title, stats, text, icon, children }) => {
  return (
    <div
      className={`absolute ${position} bg-white rounded-xl shadow-lg p-4 text-sm`}
    >
      {/* Title */}
      {title && (
        <div className="mb-2 font-semibold text-gray-800">
          {title}
        </div>
      )}

      {/* Stats */}
      {stats && (
        <div className="space-y-1 text-gray-600">
          {stats.map((item, index) => (
            <div key={index} className="flex justify-between gap-4">
              <span>{item.label}</span>
              <span className="font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Icon + Text Row */}
      {text && (
        <div className="flex items-center gap-3 text-gray-700 mt-2 max-w-[220px]">
          
          {/* Icon */}
          {icon && (
            <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-brandOrange text-white rounded-full text-xs font-bold">
              ✓
            </span>
          )}

          {/* Text */}
          <span className="leading-snug">
            {text}
          </span>
        </div>
      )}

      {children}
    </div>
  );
};

export default FloatingCard;
