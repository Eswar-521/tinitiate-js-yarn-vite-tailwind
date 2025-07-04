import { Table } from "lucide-react";

const ComparisonTablePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-purple-600 to-fuchsia-700 p-8">
      <div className="max-w-5xl mx-auto text-white space-y-6">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <Table size={40} /> Comparison Table
        </h1>

        <div className="overflow-x-auto rounded-2xl shadow-xl backdrop-blur-md border border-white/30 bg-white/10">
          <table className="min-w-full text-white/90 text-center">
            <thead>
              <tr className="bg-white/20">
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">Option A</th>
                <th className="py-3 px-4">Option B</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-white/10">
                <td className="py-3 px-4">Speed</td>
                <td>Fast</td>
                <td>Moderate</td>
              </tr>
              <tr className="hover:bg-white/10">
                <td className="py-3 px-4">Cost</td>
                <td>Low</td>
                <td>Medium</td>
              </tr>
              <tr className="hover:bg-white/10">
                <td className="py-3 px-4">Support</td>
                <td>24/7</td>
                <td>Business hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTablePage;
