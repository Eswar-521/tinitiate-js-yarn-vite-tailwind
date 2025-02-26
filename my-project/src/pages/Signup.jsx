const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white shadow-lg rounded-lg p-6 mx-4 md:w-1/3 md:mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Signup</h2>
      <input type="text" placeholder="Name" className="mb-2" />
      <input type="email" placeholder="Email" className="mb-2" />
      <input type="password" placeholder="Password" className="mb-2" />
      <button className="bg-green-500 text-white w-full py-2 rounded mt-2 hover:bg-green-700">
        Signup
      </button>
    </div>
  );
};

export default Signup;
