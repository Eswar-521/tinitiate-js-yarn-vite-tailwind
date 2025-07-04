import { TableProperties } from "lucide-react";

const DataTablePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-teal-700 to-cyan-700 p-8 text-white">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <TableProperties size={40} /> Data Table
        </h1>
        <div className="overflow-x-auto rounded-2xl shadow-xl backdrop-blur-md border border-white/30 bg-white/10">
          <table className="min-w-full text-center text-white/90">
            <thead>
              <tr className="bg-white/20">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4].map((id) => (
                <tr key={id} className="hover:bg-white/10 transition">
                  <td className="py-3 px-4">{id}</td>
                  <td>User {id}</td>
                  <td>{id % 2 === 0 ? "Active" : "Inactive"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTablePage;
