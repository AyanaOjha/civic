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
                benefit: "Educational assistance"
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
                name: "Beti Bachao Beti Padhao",
                eligibility: "Girls and women",
                benefit: "Support for education and empowerment"
            },
            {
                name: "Sukanya Samriddhi Yojana",
                eligibility: "Girls below 10 years",
                benefit: "Future financial savings"
            },
            {
                name: "PM Matru Vandana Yojana",
                eligibility: "Pregnant women",
                benefit: "Maternity benefits"
            }
        ];

    }

    else if (userType === "Senior Citizen") {

        schemes = [
            {
                name: "Atal Pension Yojana",
                eligibility: "18–40 years (pension after retirement)",
                benefit: "Monthly pension"
            },
            {
                name: "Senior Citizen Savings Scheme",
                eligibility: "Above 60 years",
                benefit: "High-interest savings"
            }
        ];

    }

    else if (userType === "Job Seeker") {

        schemes = [
            {
                name: "Skill India",
                eligibility: "Above 14 years",
                benefit: "Skill development"
            },
            {
                name: "PM Kaushal Vikas Yojana",
                eligibility: "15–45 years",
                benefit: "Free skill training"
            },
            {
                name: "National Career Service",
                eligibility: "Job seekers",
                benefit: "Career guidance and jobs"
            }
        ];

    }

    if (schemes.length === 0) {

        results.innerHTML =
            "<p>Please select a user type.</p>";

        return;
    }

    results.innerHTML = `

        <h3>Recommended Schemes</h3>

        ${schemes.map(s => `

            <div class="scheme-card">

                <h4>${s.name}</h4>

                <p><strong>Eligibility:</strong> ${s.eligibility}</p>

                <p><strong>Benefit:</strong> ${s.benefit}</p>

            </div>

        `).join("")}

    `;

};