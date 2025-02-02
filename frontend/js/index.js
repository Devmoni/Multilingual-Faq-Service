document.addEventListener("DOMContentLoaded", function () {
    const BASE_URL = "http://localhost:5000/api/faqs";

    const fetchFAQsBtn = document.getElementById("fetchFAQs");
    const faqListDiv = document.getElementById("faqList");
    const faqForm = document.getElementById("faqForm");

    // Fetch FAQs when the button is clicked
    fetchFAQsBtn.addEventListener("click", () => {
        const selectedLanguage = document.getElementById("language").value; // Get selected language
        console.log("Fetching FAQs for language:", selectedLanguage); // Debugging log
    
        fetch(`${BASE_URL}/lang/${selectedLanguage}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch FAQs");
                }
                return response.json();
            })
            .then(faqs => {
                console.log("Received FAQs:", faqs); // Debugging log
                faqListDiv.innerHTML = ""; // Clear previous FAQs
    
                if (faqs.length === 0) {
                    faqListDiv.innerHTML = "<p>No FAQs found for this language.</p>";
                    return;
                }
    
                faqs.forEach(faq => {
                    const faqItem = document.createElement("div");
                    faqItem.classList.add("faq-item");
                    faqItem.innerHTML = `
                        <h3>${faq.question}</h3>
                        <p>${faq.answer}</p>
                    `;
                    faqListDiv.appendChild(faqItem);
                });
            })
            .catch(error => {
                console.error("Error fetching FAQs:", error);
                faqListDiv.innerHTML = "<p>Failed to load FAQs.</p>";
            });
    });

    // Handle FAQ Submission
    faqForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const question = document.getElementById("question").value;
        const answer = document.getElementById("answer").value;
        const language = document.getElementById("faqLanguage").value;

        const formData = { question, answer, language };

        fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("FAQ added:", data);
            alert("FAQ added successfully!");
            faqForm.reset();
        })
        .catch(error => {
            console.error("Error adding FAQ:", error);
            alert("Failed to add FAQ.");
        });
    });
});
