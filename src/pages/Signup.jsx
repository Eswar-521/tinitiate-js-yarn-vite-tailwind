import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-center">Sign Up</h2>
      <input type="text" placeholder="Full Name" className="w-full p-2 my-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-2 my-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full p-2 my-2 border rounded" />
      <button className="w-full bg-green-500 text-white py-2 rounded">Sign Up</button>
      <div className="text-center mt-2">
        <Link to="/login" className="text-blue-600">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
