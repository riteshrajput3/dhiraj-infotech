import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const { data } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    setContacts(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const deleteMessage = async (id) => {
    if (!confirm("Delete this message?")) return;

    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (!error) setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Admin <span className="text-blue-600">Dashboard</span>
            </h1>
            <p className="text-slate-600 mt-1">
              Manage contact form submissions
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="mt-4 sm:mt-0 inline-flex items-center justify-center
              bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold
              shadow hover:bg-blue-700 transition-all"
          >
            Logout
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
          {contacts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500">No messages yet.</p>
            </div>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-slate-600 text-sm">
                  <th className="py-4 px-4">Name</th>
                  <th className="py-4 px-4">Email</th>
                  <th className="py-4 px-4">Phone</th>
                  <th className="py-4 px-4">Message</th>
                  <th className="py-4 px-4">Date</th>
                  <th className="py-4 px-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((c) => (
                  <tr
                    key={c.id}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="py-4 px-4 font-semibold text-slate-900">
                      {c.name}
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      {c.email}
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      {c.phone || "-"}
                    </td>
                    <td className="py-4 px-4 text-slate-700 max-w-sm truncate">
                      {c.message}
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-sm">
                      {new Date(c.created_at).toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => deleteMessage(c.id)}
                        className="inline-flex items-center justify-center
                          px-4 py-2 rounded-lg font-semibold
                          text-red-600 hover:bg-red-50 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
