import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export const createOrder = async (orderData) => {
  try {
    const orderRef = await addDoc(collection(db, "orders"), {
      ...orderData,
      orderStatus: "Pending",
      paymentStatus: "Pending",
      createdAt: serverTimestamp(),
    });

    return {
      success: true,
      orderId: orderRef.id,
    };
  } catch (error) {
    console.error("Error creating order:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};