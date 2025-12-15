import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";


function Dashboard({ user }) {
  return (
    <div>
      {user === "admin" && <AdminDashboard />}
      {user === "user" && <UserDashboard />}
    </div>
  );
}

export default Dashboard;


