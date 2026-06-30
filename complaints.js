import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

window.submitComplaint = async function () {

    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const complaint = document.getElementById("complaint").value;

    if (!name || !category || !complaint) {
        alert("Please fill all fields");
        return;
    }

    try {

        await addDoc(collection(db, "complaints"), {

            name,
            category,
            complaint,
            status: "Pending",
            createdAt: new Date()

        });

        alert("Complaint Saved!");

        document.getElementById("name").value = "";
        document.getElementById("category").value = "";
        document.getElementById("complaint").value = "";

        loadComplaints();

    }

    catch (error) {

        console.error(error);
        alert("Error saving complaint");

    }

}

async function loadComplaints() {

    const complaintsList =
        document.getElementById("complaintsList");

    const selectedCategory =
        document.getElementById("filterCategory").value;

    const searchText =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    const dashboard =
        document.getElementById("dashboard");

    let total = 0;
    let roads = 0;
    let water = 0;
    let electricity = 0;
    let garbage = 0;
    let streetlights = 0;

    complaintsList.innerHTML = "";

    const querySnapshot =
        await getDocs(collection(db, "complaints"));

    querySnapshot.forEach((doc) => {

        const data = doc.data();

        if (!data.category) {
            data.category = "Uncategorized";
        }

        if (
            selectedCategory !== "All" &&
            data.category !== selectedCategory
        ) {
            return;
        }

        const matchesSearch =

            data.name.toLowerCase().includes(searchText) ||

            data.category.toLowerCase().includes(searchText) ||

            data.complaint.toLowerCase().includes(searchText);

        if (!matchesSearch) {
            return;
        }

        total++;

        if (data.category === "Roads") roads++;
        if (data.category === "Water") water++;
        if (data.category === "Electricity") electricity++;
        if (data.category === "Garbage") garbage++;
        if (data.category === "Streetlights") streetlights++;

        complaintsList.innerHTML += `

        <div class="complaint-card">

            <h3>${data.name}</h3>

            <p><strong>Category:</strong> ${data.category}</p>

            <p>${data.complaint}</p>

            <p><strong>Status:</strong> ${data.status || "Pending"}</p>

            <hr>

        </div>

        `;

    });

    dashboard.innerHTML = `

        <h3>Total Complaints: ${total}</h3>

        <div class="stats">

            <p>🛣 Roads: ${roads}</p>

            <p>💧 Water: ${water}</p>

            <p>⚡ Electricity: ${electricity}</p>

            <p>🗑 Garbage: ${garbage}</p>

            <p>💡 Streetlights: ${streetlights}</p>

        </div>

    `;

}

loadComplaints();

document
    .getElementById("filterCategory")
    .addEventListener("change", loadComplaints);

document
    .getElementById("searchBox")
    .addEventListener("input", loadComplaints);