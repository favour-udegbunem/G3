import { BrowserRouter, Routes, Route } from "react-router-dom";

import OrderPage from "./pages/OrderPage";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main G3 Website */}
        <Route path="/" element={<OrderPage />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;