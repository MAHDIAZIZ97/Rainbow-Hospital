import { useState } from "react";

const AllAppointment = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const staffData = [
    { id: 1, name: "Alice Johnson", role: "Doctor", department: "Cardiology" },
    { id: 2, name: "Bob Smith Jackob", role: "Nurse", department: "Emergency" },
    { id: 3, name: "Charlie Davis", role: "Surgeon", department: "Orthopedics" },
    { id: 4, name: "Diana Ross", role: "Receptionist", department: "Front Desk" },
  ];

  const sortedStaff = [...staffData].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const filteredStaff = sortedStaff.filter((staff) =>
    staff.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">All Appointment List</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search appointment..."
        className="border rounded p-2 w-full md:w-1/2 mb-4 outline-0"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th
                className="border px-4 py-2 cursor-pointer whitespace-nowrap"
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              >
                Pt.Name 🔽
              </th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">App.Date</th>
              <th className="border px-4 py-2 whitespace-nowrap">Doctor Name</th>
              <th className="border px-4 py-2 whitespace-nowrap">Mobile No</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Action</th>
              <th className="border px-4 py-2">Status</th>
             
            </tr>
          </thead>
          <tbody className="text-[12px]">
            {filteredStaff.length > 0 ? (
              filteredStaff.map((staff) => (
                <tr key={staff.id} className="text-center hover:bg-gray-100">
                  <td className="border px-4 py-2">{staff.id}</td>
                  <td className="border px-4 py-2">{staff.name}</td>
                  <td className="border px-4 py-2">22</td>
                  <td className="border px-4 py-2">Male</td>
                  <td className="border px-4 py-2">Dr.Test</td>
                  <td className="border px-4 py-2">7001956990</td>
                  <td className="border px-4 py-2">Somewhere,SomeTown,SomeDist,199888</td>
                  <td className="border px-4 py-4 justify-center flex">
                    <button 
                      className="px-2 py-1 mx-1 border-1 border-green-500 rounded-full cursor-pointer"
                      onClick={() => {confirm("Are you sure you want to Confirm booking??")}}
                      >✅</button>
                    <button
                     className="px-2 py-1 mx-1 border-1 rounded-full cursor-pointer border-red-500"
                     onClick={() => {confirm("Are you sure you want to Cancel booking??")}}
                     >❌</button>
                  </td>
                  <td className="border px-4 py-2 text-blue-600">Pending</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-red-500">
                  No staff found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppointment;
