const Home2 = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-5xl p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">
            Welcome to Home2
          </h1>
          <p className="text-lg text-gray-600 text-center mb-6">
            This is a uniquely styled second home page with a modern
          </p>
  
          {/* Feature Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-800">🔥 Advanced UI</h2>
              <p className="text-gray-700">A sleek and modern design with smooth transitions.</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-800">🚀 Fast Performance</h2>
              <p className="text-gray-700">Optimized for speed and efficiency.</p>
            </div>
            <div className="p-4 bg-purple-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-purple-800">🎨 Unique Styling</h2>
              <p className="text-gray-700">Custom design elements for a fresh look.</p>
            </div>
            <div className="p-4 bg-red-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-red-800">🔍 Easy Navigation</h2>
              <p className="text-gray-700">Seamless page transitions and accessibility.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home2;
  