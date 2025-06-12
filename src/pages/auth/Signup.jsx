const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Signup</h2>
        <form>
          <input
            className="w-full p-2 border rounded mb-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full p-2 border rounded mb-3"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full p-2 border rounded mb-3"
            type="password"
            placeholder="Password"
          />
          <button className="w-full bg-green-500 text-white py-2 rounded">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
