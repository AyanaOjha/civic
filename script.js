import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

window.submitComplaint = async function () {

    const name =
        document.getElementById("name").value;

    const complaint =
        document.getElementById("complaint").value;

    if (!name || !complaint) {
        alert("Please fill all fields");
        return;
    }

    try {

        await addDoc(
            collection(db, "complaints"),
            {
                name: name,
                complaint: complaint,
                createdAt: new Date()
            }
        );

        alert("Complaint Saved!");
        loadComplaints();

        document.getElementById("name").value = "";
        document.getElementById("complaint").value = "";

    } catch (error) {

        console.error(error);

        alert("Error saving complaint");
    }
}
async function loadComplaints() {

    const complaintsList =
        document.getElementById("complaintsList");

    complaintsList.innerHTML = "";

    const querySnapshot =
        await getDocs(collection(db, "complaints"));

    querySnapshot.forEach((doc) => {

        const data = doc.data();

        complaintsList.innerHTML += `
            <div>
                <h3>${data.name}</h3>
                <p>${data.complaint}</p>
                <hr>
            </div>
        `;
    });
}
loadComplaints();