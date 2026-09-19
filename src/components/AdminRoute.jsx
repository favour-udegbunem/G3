import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

const AdminRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });

    return () => unsubscribe();
  }, []);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFF8F5]">
        <p className="text-sm font-semibold text-gray-600">
          Checking access...
        </p>
      </div>
    );
  }

  if (!user) {
    window.location.href = "/admin/login";
    return null;
  }

  return children;
};

export default AdminRoute;