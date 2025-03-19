import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-center">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-2 my-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full p-2 my-2 border rounded" />
      <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
      <div className="text-center mt-2">
        <Link to="/forgot-password" className="text-blue-600">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;
