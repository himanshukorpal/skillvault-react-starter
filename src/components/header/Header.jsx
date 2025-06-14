const Header = () => {
  const AuthFunc = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
      <img
        src="https://i.pravatar.cc/40"
        alt="User Avatar"
        className="w-10 h-10 rounded-full"
      ></img>
      <button
        onClick={AuthFunc}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
