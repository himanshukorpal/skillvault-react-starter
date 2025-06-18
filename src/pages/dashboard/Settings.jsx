const Settings = () => {
  return (
    <div>
      <h1 className="text-4xl font-medium mb-8">Settings</h1>
      <div id="profile">
        <h3 className="mb-4 font-medium text-xl">Profile</h3>

        <div className="flex w-1/2 gap-8  p-4 rounded-lg items-center">
          <div className="flex-none">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              class=" w-24 h-24 rounded-full object-cover"
            ></img>
          </div>

          <div className="flex flex-1 flex-col">
            <label className="mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-300 p-1 rounded"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-[2] flex-col ">
            <label className="mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-300 p-1 rounded"
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@mail.com"
            />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 mb-5" />
      <div flex flex-col>
        <h3 className="font-medium text-xl">Account</h3>
        <div className="flex flex-col gap-3 mt-2 w-64">
          <button className=" border border-gray-300 text-black py-2 rounded">
            Change Password
          </button>
          <button className=" bg-red-500 text-black py-2 rounded">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
