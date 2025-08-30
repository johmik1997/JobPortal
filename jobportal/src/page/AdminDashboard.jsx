import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
  selectAllUsers,
} from "../features/users/usersApiSlice";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useSelector } from "react-redux";
const AdminDashboard = () => {
  const {
    isLoading,
    isError,
    error,
    refetch,
  } = useGetUsersQuery("usersList", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
const usersResult = useGetUsersQuery();
const users = useSelector(state =>
  selectAllUsers(state)
);// <-- FIX: get users via selector
  const [deleteUser] = useDeleteUserMutation();

  console.log("All users:", users);


  const handleEdit = (user) => {
    alert(`Edit user: ${user.username}`);
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser({ id: userId }).unwrap();
        alert("User deleted successfully");
        refetch();
      } catch (err) {
        console.error("Delete failed", err);
        alert("Failed to delete user");
      }
    }
  };

  if (isLoading) return <p className="p-6 text-center">Loading users...</p>;
  if (isError)
    return (
      <p className="p-6 text-center text-red-500">
        {error?.data?.message || "Failed to load users."}
      </p>
    );

  // Stats
const activeCount = users?.filter(u => u.activeStatus).length || 0;
const inactiveCount = users?.filter(u => !u.activeStatus).length || 0;
const totalUsers=activeCount + inactiveCount;
  const chartData = [
    { name: "Active Users", value: activeCount },
    { name: "Inactive Users", value: inactiveCount },
  ];

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-500">Total Users</p>
            <h2 className="text-2xl font-bold">{totalUsers}</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-500">Active Users</p>
            <h2 className="text-2xl font-bold">{activeCount}</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-500">Inactive Users</p>
            <h2 className="text-2xl font-bold">{inactiveCount}</h2>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2 border">Username</th>
                  <th className="px-4 py-2 border">Role</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
             <tbody>
  {users?.map(user => (
    <tr key={user._id} className="hover:bg-gray-100">
      <td className="px-4 py-2 border">{user.username}</td>
      <td className="px-4 py-2 border">{user.roles?.join(", ") || "N/A"}</td>
      <td className="px-4 py-2 border">{user.activeStatus ? "Active" : "Inactive"}</td>
      <td className="px-4 py-2 border space-x-2">
      
        <button
          onClick={() => handleDelete(user._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>

        {/* Users Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Status Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#34D399" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
