import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { createOrder } from "../services/orderService";

const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT",
];

const BANK_DETAILS = {
  bankName: "YOUR BANK NAME",
  accountNumber: "YOUR ACCOUNT NUMBER",
  accountName: "YOUR ACCOUNT NAME",
};

const WHATSAPP_NUMBER = "234XXXXXXXXXX";
const SELAR_LINK = "YOUR_SELAR_LINK";

const OrderForm = ({ product, onSuccess }) => {
  const [quantity, setQuantity] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    whatsappNumber: "",
    deliveryAddress: "",
    state: "",
    email: "",
    paymentMethod: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const unitPrice = Number(product?.price) || 0;
  const totalAmount = unitPrice * quantity;

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(current - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setMessage("");
  };

  const handlePaymentChange = (method) => {
    setFormData((current) => ({
      ...current,
      paymentMethod: method,
    }));

    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product) {
      setMessage("Please select a product.");
      return;
    }

    if (quantity < 1) {
      setMessage("Please select at least one item.");
      return;
    }

    if (!formData.firstName.trim()) {
      setMessage("Please enter your first name.");
      return;
    }

    if (!formData.lastName.trim()) {
      setMessage("Please enter your last name.");
      return;
    }

    if (!formData.phoneNumber.trim()) {
      setMessage("Please enter your phone number.");
      return;
    }

    if (!formData.deliveryAddress.trim()) {
      setMessage("Please enter your delivery address.");
      return;
    }

    if (!formData.state) {
      setMessage("Please select your delivery state.");
      return;
    }

    if (!formData.email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!formData.paymentMethod) {
      setMessage("Please select a payment method.");
      return;
    }

    setLoading(true);
    setMessage("");

    const orderData = {
      ...formData,

      products: [
        {
          id: product.id,
          name: product.name,
          quantity,
          price: unitPrice,
        },
      ],

      subtotal: totalAmount,
      totalAmount,
    };

    try {
      const result = await createOrder(orderData);

      if (result.success) {
       setMessage(
        `Order received successfully from ${formData.firstName} ${formData.lastName}. Thank you so much!`
       );

        if (onSuccess) {
          onSuccess(result);
        }

        return;
      }

      setMessage(
        result.error || "Something went wrong. Please try again."
      );
    } catch (error) {
      console.error("Order submission error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello G3, I have made payment for my order.

Order: ${product?.name || ""}
Quantity: ${quantity}
Amount: ₦${totalAmount.toLocaleString()}

I am sending my payment receipt here.`
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Quantity */}
      <div className="rounded-2xl border border-gray-200 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-bold text-gray-950">
              Quantity
            </p>

            <p className="mt-1 text-sm text-gray-500">
              ₦{unitPrice.toLocaleString()} per collection
            </p>
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={decreaseQuantity}
              className="flex h-10 w-10 items-center justify-center rounded-l-xl border border-gray-300 hover:bg-gray-50"
            >
              <Minus size={17} />
            </button>

            <span className="flex h-10 min-w-12 items-center justify-center border-y border-gray-300 px-3 font-semibold">
              {quantity}
            </span>

            <button
              type="button"
              onClick={increaseQuantity}
              className="flex h-10 w-10 items-center justify-center rounded-r-xl border border-gray-300 hover:bg-gray-50"
            >
              <Plus size={17} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm text-gray-500">
            Total
          </span>

          <span className="text-xl font-bold text-[#D84B83]">
            ₦{totalAmount.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Customer Information */}
      <div>
        <h3 className="text-xl font-bold text-gray-950">
          Your Details
        </h3>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">

          <div>
            <label className="text-sm font-semibold text-gray-950">
              First Name *
            </label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="e.g. Chioma"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-[#D84B83]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-950">
              Last Name *
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="e.g. Okafor"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-[#D84B83]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-950">
              Phone Number *
            </label>

            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="08012345678"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-[#D84B83]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-950">
              WhatsApp Number
            </label>

            <input
              type="tel"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="If different from phone number"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-[#D84B83]"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm font-semibold text-gray-950">
              Exact Delivery Address *
            </label>

            <textarea
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your complete delivery address"
              required
              className="mt-2 w-full resize-none rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-[#D84B83]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-950">
              State *
            </label>

            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 outline-none focus:border-[#D84B83]"
            >
              <option value="">
                Select state
              </option>

              {states.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-950">
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. chioma@gmail.com"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-[#D84B83]"
            />
          </div>

        </div>
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="text-xl font-bold text-gray-950">
          Select Payment Method
        </h3>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">

          {/* Bank Transfer */}
          <button
            type="button"
            onClick={() => handlePaymentChange("transfer")}
            className={`rounded-2xl border p-4 text-left transition ${
              formData.paymentMethod === "transfer"
                ? "border-[#D84B83] bg-[#FFF8F5]"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-2xl">
              🏦
            </div>

            <p className="mt-2 font-bold text-gray-950">
              Bank Transfer
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Transfer directly to the G3 account.
            </p>
          </button>

          {/* Selar */}
          <button
            type="button"
            onClick={() => handlePaymentChange("selar")}
            className={`rounded-2xl border p-4 text-left transition ${
              formData.paymentMethod === "selar"
                ? "border-[#D84B83] bg-[#FFF8F5]"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-2xl">
              💳
            </div>

            <p className="mt-2 font-bold text-gray-950">
              Pay with Selar
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Pay securely through Selar.
            </p>
          </button>

        </div>

        {/* Bank Transfer */}
        {formData.paymentMethod === "transfer" && (
          <div className="mt-5 rounded-2xl bg-gray-50 p-5">

            <p className="font-bold text-gray-950">
              💳 Transfer Payment Details
            </p>

            <div className="mt-4 space-y-2 text-sm">

              <p>
                <span className="text-gray-500">
                  Bank:
                </span>{" "}
                <strong>
                  {BANK_DETAILS.bankName}
                </strong>
              </p>

              <p>
                <span className="text-gray-500">
                  Account Number:
                </span>{" "}
                <strong>
                  {BANK_DETAILS.accountNumber}
                </strong>
              </p>

              <p>
                <span className="text-gray-500">
                  Account Name:
                </span>{" "}
                <strong>
                  {BANK_DETAILS.accountName}
                </strong>
              </p>

              <p>
                <span className="text-gray-500">
                  Amount:
                </span>{" "}
                <strong>
                  ₦{totalAmount.toLocaleString()}
                </strong>
              </p>

            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block w-full rounded-full bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-green-700"
            >
              Send Payment Receipt on WhatsApp
            </a>

          </div>
        )}

        {/* Selar */}
        {formData.paymentMethod === "selar" && (
          <div className="mt-5 rounded-2xl bg-gray-50 p-5">

            <p className="font-bold text-gray-950">
              💳 Selar Payment
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Continue to Selar to complete your payment.
            </p>

            <a
              href={SELAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block w-full rounded-full bg-gray-950 px-5 py-3 text-center font-semibold text-white hover:bg-gray-800"
            >
              Continue to Selar
            </a>

          </div>
        )}
      </div>

      {/* Message */}
      {message && (
        <div
          className={`rounded-xl p-4 text-sm ${
            message.startsWith("Order received")
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !product}
        className="w-full rounded-full bg-gray-950 px-6 py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading
          ? "Submitting Order..."
          : "🛍 Place My Order"}
      </button>
    </form>
  );
};

export default OrderForm;