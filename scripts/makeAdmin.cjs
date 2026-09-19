const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

const serviceAccount = require("../serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const email = "globalgiantgirls@gmail.com";

async function makeAdmin() {
  try {
    const auth = getAuth();

    const user = await auth.getUserByEmail(email);

    await auth.setCustomUserClaims(user.uid, {
      admin: true,
    });

    console.log("Admin access granted successfully.");
    console.log("UID:", user.uid);
    console.log("Email:", user.email);

    process.exit(0);
  } catch (error) {
    console.error("Failed to grant admin access:", error);
    process.exit(1);
  }
}

makeAdmin();