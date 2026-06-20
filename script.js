import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

window.submitComplaint = async function () {

    const name =
        document.getElementById("name").value;

    const category =
        document.getElementById("category").value;
    
        const complaint =
        document.getElementById("complaint").value;

    if (!name || !category || !complaint) {
        alert("Please fill all fields");
        return;
    }

    try {

        await addDoc(
            collection(db, "complaints"),
            {
                name: name,
                category: category,
                complaint: complaint,
                createdAt: new Date()
            }
        );

       alert("Complaint Saved!");

document.getElementById("name").value = "";
document.getElementById("category").value = "";
document.getElementById("complaint").value = "";

loadComplaints();

    } catch (error) {

        console.error(error);

        alert("Error saving complaint");
    }
}
async function loadComplaints() {

    const complaintsList =
        document.getElementById("complaintsList");


    const selectedCategory =
        document.getElementById("filterCategory").value;
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

    total++;

    if (data.category === "Roads")
        roads++;

    if (data.category === "Water")
        water++;

    if (data.category === "Electricity")
        electricity++;

    if (data.category === "Garbage")
        garbage++;

    if (data.category === "Streetlights")
        streetlights++;

    if (!data.category) {
    data.category = "Uncategorized";
}

    if (
        selectedCategory !== "All" &&
        data.category !== selectedCategory
    ) {
        return;
    }

    complaintsList.innerHTML += `
    <div class="complaint-card">
                <h3>${data.name}</h3>
                <p><strong>Category:</strong> ${data.category}</p>
                <p>${data.complaint}</p>
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
window.findSchemes = function () {

    const userType =
        document.getElementById("userType").value;

    const results =
        document.getElementById("schemeResults");

    let schemes = [];

    if (userType === "Student") {

         schemes = [
    {
        name: "National Scholarship Portal",
        eligibility: "Students pursuing education",
        benefit: "Access multiple scholarships"
    },
    {
        name: "PM Yasasvi Scholarship",
        eligibility: "Meritorious students",
        benefit: "Financial support for studies"
    },
    {
        name: "Post Matric Scholarship",
        eligibility: "Students after Class 10",
        benefit: "Education assistance"
    }
];
    }

    else if (userType === "Farmer") {

        schemes = [
    {
        name: "PM Kisan",
        eligibility: "Small and marginal farmers",
        benefit: "Income support"
    },
    {
        name: "Kisan Credit Card",
        eligibility: "Eligible farmers",
        benefit: "Low-interest agricultural loans"
    },
    {
        name: "Soil Health Card",
        eligibility: "All farmers",
        benefit: "Soil quality recommendations"
    }
];
    }

    else if (userType === "Woman") {

        schemes = [
        {
            name: "Beti bachao Beti padhao",
            eligibility: "All girls under the age of 10",
            benefit:"Development of girls"
        },
        {
            name: "Sukanya Samriddhi Yojna",
            eligibility: "All girls under the age of 10",
            benefit:"Future financial planning",
            
        },
        {
            name: "PM Matru Vandana Yojna",
            eligibility: "Pregnant women",
            benefit:"Maternity leave benefits"
        }
        ];
    }

    else if (userType === "Senior Citizen") {

        schemes = [
            {
                name:"Atal Pension Yojana",
                eligibility:"Between the ages of 18 to 40",
                benefit : "Social Security Scheme"
            },
            {
                name: "Senior Citizen Savings Scheme",
                eligibility:"Above 60 years old",
                benefit:" Retirement Scheme"
            },

        ];
    }

    else if (userType === "Job Seeker") {

       schemes = [
    {
        name: "Skill India",
        eligibility: "Above 14 years old",
        benefit: "Skill development"
    },
    {
        name: "PM Kaushal Vikas Yojna",
        eligibility: "Ages between 15 to 45",
        benefit: "Skill training and certification"
    },
    {
        name: "National Career Service",
        eligibility: "Above 14 years old",
        benefit: "Career Counselling"
    }
];
    }

    results.innerHTML = `
    <h3>Recommended Schemes</h3>

    ${schemes.map(s => `
        <div class="complaint-card">
            <h4>${s.name}</h4>
            <p><strong>Eligibility:</strong> ${s.eligibility}</p>
            <p><strong>Benefit:</strong> ${s.benefit}</p>
        </div>
    `).join("")}
`;
    
}


document
    .getElementById("filterCategory")
    .addEventListener("change", loadComplaints);
    function changeLanguage(language) {

    if (language === "hi") {

        document.getElementById("mainTitle")
            .innerText = "सिविकसेंस";

        document.getElementById("schemeHeading")
            .innerText = "सरकारी योजना सहायक";

        document.getElementById("dashboardHeading")
            .innerText = "डैशबोर्ड";

        document.getElementById("complaintsHeading")
            .innerText = "सभी शिकायतें";
        document.getElementById("complaintHeading")
    .innerText = "शिकायत दर्ज करें";

document.getElementById("schemeHeading")
    .innerText = "सरकारी योजना सहायक";

document.getElementById("filterHeading")
    .innerText = "शिकायत फ़िल्टर करें";
    document.getElementById("name")
    .placeholder = "आपका नाम";

document.getElementById("complaint")
    .placeholder = "अपनी समस्या बताएं";
    }

    else {

        document.getElementById("mainTitle")
            .innerText = "CivicSense";

        document.getElementById("schemeHeading")
            .innerText = "Government Scheme Assistant";

        document.getElementById("dashboardHeading")
            .innerText = "Dashboard";

        document.getElementById("complaintsHeading")
            .innerText = "All Complaints";
         document.getElementById("complaintHeading")
    .innerText = "Submit a Complaint";

document.getElementById("schemeHeading")
    .innerText = "Government Scheme Assistant";

document.getElementById("filterHeading")
    .innerText = "Filter Complaints";
    document.getElementById("name")
    .placeholder = "Your Name";

document.getElementById("complaint")
    .placeholder = "Describe your issue";
    }
}document
    .getElementById("languageSelect")
    .addEventListener("change", function () {

        changeLanguage(this.value);

    });