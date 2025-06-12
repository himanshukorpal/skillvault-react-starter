const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
        <form>
          <input
            className="w-full p-2 border rounded mb-3"
            type="email"
            placeholder="Enter your email"
          />
          <button className="w-full bg-yellow-500 text-white py-2 rounded">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
