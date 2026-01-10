const AvatarGroup = ({ users = [] }) => {
  if (!users.length) return null; // safe guard

  return (
    <div>
      <p className="text-gray-700 font-medium mb-2">Meet Our Clients</p>

      <div className="flex items-center">
        {users.map((user, index) => (
          <img
            key={index}
            src={user}
            alt="client"
            className={`w-8 h-8 rounded-full border-2 border-white ${
              index !== 0 ? "-ml-3" : ""
            }`}
          />
        ))}

        <span className="-ml-3 w-8 h-8 rounded-full bg-brandOrange text-white flex items-center justify-center text-sm">
          +
        </span>
      </div>
    </div>
  );
};

export default AvatarGroup;
