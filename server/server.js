const app = require("express")();

const admin = require("firebase-admin");

const serviceAccount = require("./reactjs-developer-1fac9-firebase-adminsdk-xdk4b-9e6d7b16df.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://reactjs-developer-1fac9-default-rtdb.europe-west1.firebasedatabase.app",
});

app.get("/setAdmin", async (req, res) => {
  admin
    .auth()
    .setCustomUserClaims("94hy0QSPBVQnJ9D7q3kKkpyThkY2", {
      role: 'admin'
    })
    .then(() => console.log("done"));
});

app.listen(4000, () => console.log("listening on port 4000"));
