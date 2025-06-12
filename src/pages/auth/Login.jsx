import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form>
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
          <button className="w-full bg-blue-500 text-white py-2 rounded">
            Login
          </button>
          <p className="mt-2 hover:text-red-400">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
