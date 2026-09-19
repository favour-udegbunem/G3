import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/config";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersQuery = query(
          collection(db, "orders"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(ordersQuery);

        const orderData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(orderData);
      } catch (error) {
        console.error("Error loading orders:", error);
        setError("Unable to load orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-[#FFF8F5]">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <h1 className="text-2xl font-black text-gray-950">
              G<span className="text-[#D84B83]">3</span> Admin
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Customer orders and leads
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="mt-2 text-3xl font-black text-gray-950">
              {orders.length}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Pending Orders</p>
            <p className="mt-2 text-3xl font-black text-gray-950">
              {
                orders.filter(
                  (order) => order.orderStatus === "Pending"
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Paid Orders</p>
            <p className="mt-2 text-3xl font-black text-gray-950">
              {
                orders.filter(
                  (order) => order.paymentStatus === "Paid"
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Customers</p>
            <p className="mt-2 text-3xl font-black text-gray-950">
              {orders.length}
            </p>
          </div>
        </div>

        {/* Orders */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div className="border-b border-gray-100 px-6 py-5">
            <h2 className="text-xl font-bold text-gray-950">
              Customer Orders
            </h2>
          </div>

          {loading && (
            <div className="px-6 py-10 text-center text-sm text-gray-500">
              Loading orders...
            </div>
          )}

          {error && (
            <div className="px-6 py-10 text-center text-sm text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && orders.length === 0 && (
            <div className="px-6 py-10 text-center text-sm text-gray-500">
              No orders yet.
            </div>
          )}

          {!loading && !error && orders.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Customer
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Contact
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Product
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Amount
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Payment
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-5">
                        <p className="font-semibold text-gray-950">
                          {order.firstName} {order.lastName}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {order.email}
                        </p>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <p className="text-sm text-gray-700">
                          {order.phoneNumber}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {order.whatsappNumber || "—"}
                        </p>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-700">
                        {order.products?.[0]?.name || "—"}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 font-semibold text-gray-950">
                        ₦{Number(order.totalAmount || 0).toLocaleString()}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-700">
                        {order.paymentMethod || "—"}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold text-yellow-700">
                          {order.orderStatus || "Pending"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;