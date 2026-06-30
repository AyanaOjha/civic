function changeLanguage(language) {

    if (language === "hi") {

        document.getElementById("mainTitle").innerText = "सिविकसेंस";

        document.getElementById("complaintHeading").innerText =
            "शिकायत दर्ज करें";

        document.getElementById("schemeHeading").innerText =
            "सरकारी योजना सहायक";

        document.getElementById("dashboardHeading").innerText =
            "डैशबोर्ड";

        document.getElementById("filterHeading").innerText =
            "शिकायत फ़िल्टर करें";

        document.getElementById("complaintsHeading").innerText =
            "सभी शिकायतें";

        document.getElementById("name").placeholder =
            "आपका नाम";

        document.getElementById("complaint").placeholder =
            "अपनी समस्या बताएं";

    }

    else {

        document.getElementById("mainTitle").innerText =
            "CivicSense";

        document.getElementById("complaintHeading").innerText =
            "Submit a Complaint";

        document.getElementById("schemeHeading").innerText =
            "Government Scheme Assistant";

        document.getElementById("dashboardHeading").innerText =
            "Dashboard";

        document.getElementById("filterHeading").innerText =
            "Filter Complaints";

        document.getElementById("complaintsHeading").innerText =
            "All Complaints";

        document.getElementById("name").placeholder =
            "Your Name";

        document.getElementById("complaint").placeholder =
            "Describe your issue";
    }
}

document
    .getElementById("languageSelect")
    .addEventListener("change", function () {

        changeLanguage(this.value);

    });