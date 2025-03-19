const ForgotPassword = () => {
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-center">Forgot Password</h2>
        <input type="email" placeholder="Enter your email" className="w-full p-2 my-2 border rounded" />
        <button className="w-full bg-orange-500 text-white py-2 rounded">Reset Password</button>
      </div>
    );
  };
  
  export default ForgotPassword;
  