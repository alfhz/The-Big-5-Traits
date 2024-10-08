document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const traitIndex = urlParams.get("trait");
    const traits = [
        {
        title: "Openness",
        description:
            "Openness to experience describes a dimension of personality that captures the breadth, depth, originality, and complexity of an individual's mental and experiential life.",
        card: [
            { title: "Pros", list: ["Imagination", "Creativity", "Curiosity"] },
            {
            title: "Cons",
            list: ["Overthinking", "Disorganization", "Impulsiveness"],
            },
        ],
        img: "https://via.placeholder.com/400x200?text=Openness",
        imgDescription: "Openness to experience.",
        },
        {
        title: "Conscientiousness",
        description:
            "Conscientiousness refers to the degree of self-discipline, organization, and planning involved in an individual's approach to tasks.",
        card: [
            {
            title: "Pros",
            list: ["Organization", "Responsibility", "Goal-Directed"],
            },
            {
            title: "Cons",
            list: ["Perfectionism", "Stubbornness", "Overly Cautious"],
            },
        ],
        img: "https://via.placeholder.com/400x200?text=Conscientiousness",
        imgDescription: "Conscientiousness.",
        },
        {
        title: "Extraversion",
        description:
            "Extraversion is characterized by sociability, enthusiasm, and a tendency to seek stimulation in the company of others.",
        card: [
            { title: "Pros", list: ["Sociable", "Energetic", "Optimistic"] },
            { title: "Cons", list: ["Impulsivity", "Inattention", "Overbearing"] },
        ],
        img: "https://via.placeholder.com/400x200?text=Extraversion",
        imgDescription: "Extraversion.",
        },
        {
        title: "Agreeableness",
        description:
            "Agreeableness involves being compassionate and cooperative towards others.",
        card: [
            { title: "Pros", list: ["Empathetic", "Trusting", "Supportive"] },
            {
            title: "Cons",
            list: ["Naivety", "Conflict-Avoidance", "Overly Compliant"],
            },
        ],
        img: "https://via.placeholder.com/400x200?text=Agreeableness",
        imgDescription: "Agreeableness.",
        },
        {
        title: "Neuroticism",
        description:
            "Neuroticism relates to the tendency to experience negative emotions and emotional instability.",
        card: [
            { title: "Pros", list: ["Sensitive", "Intuitive", "Self-Aware"] },
            { title: "Cons", list: ["Anxiety", "Mood Swings", "Overthinking"] },
        ],
        img: "https://via.placeholder.com/400x200?text=Neuroticism",
        imgDescription: "Neuroticism.",
        },
    ];

    const traitContent = document.getElementById("trait-content");
    const traitImage = document.getElementById("trait-image");

    if (traitIndex !== null && traitIndex >= 0 && traitIndex < traits.length) {
        const trait = traits[traitIndex];
        let prosConsHtml = "";

        trait.card.forEach((item) => {
        prosConsHtml += `<h3>${item.title}</h3><ul>`;
        item.list.forEach((point) => {
            prosConsHtml += `<li>${point}</li>`;
        });
        prosConsHtml += "</ul>";
        });

        traitContent.innerHTML = `
                <h2>${trait.title}</h2>
                <p>${trait.description}</p>
                ${prosConsHtml}
            `;
        traitImage.src = trait.img; // Set the image source
        traitImage.p = trait.imgDescription; // Set the alt text for the image
    } else {
        traitContent.innerHTML = "<p>Trait not found.</p>";
    }
    });

    // Function to go back to the previous page
    function goBack() {
    window.history.back();
}
