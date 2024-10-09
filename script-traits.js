document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const traitIndex = urlParams.get("trait");
    const traits = [
        {
            title: "Openness",
            description:
                "Openness (also referred to as openness to experience) describes a person tendency to think abstractly. Those who are high in Openness tend to be creative, adventurous, and intellectual. They enjoy playing with ideas and discovering novel experiences. Those who are low in Openness tend to be practical, traditional, and focused on the concrete. They tend to avoid the unknown and follow traditional ways.<br>In the brain, Openness seems to be related to the degree to which certain brain regions are interconnected. Those high in Openness seem to have more connection between disparate brain regions, which may explain why they are more likely to see connections where others do not. Conversely, people low in this personality trait are often much more traditional and may struggle with abstract thinking.",
            cardPros:
            {
                title: "Pros",
                list: ["Imagination", "Creativity", "Curiosity"]
            },
            cardCons:
            {
                title: "Cons",
                list: ["Overthinking", "Disorganization", "Impulsiveness"]
            },
            img: "assets/ilustration/openness-il.png",
            imgDescription: "Symbolizing new ideas and creativity",
        },
        {
            title: "Conscientiousness",
            description:
                "Among each of the personality traits, conscientiousness is one defined by high levels of thoughtfulness, good impulse control, and goal-directed behaviors. Conscientiousness describes a person level of goal orientation and persistence. Those who are high in Conscientiousness are organized and determined, and are able to forego immediate gratification for the sake of long-term achievement. Those who are low in this trait are impulsive and easily sidetracked.<br>In the brain, Conscientiousness is associated with frontal lobe activity. The frontal lobe can be thought of as the executive brain, moderating and regulating the more animal and instinctual impulses from other areas of the brain. For example, while we might instinctually want to eat a piece of cake thats in front of us, the frontal lobe steps in and says: no, that is not healthy, and it doesnt fit in with our diet goals. People who are high in Conscientiousness are more likely to use this brain region to control their impulses and keep themselves on track.",
            cardPros: 
            {
                title: "Pros",
                list: ["Organization", "Responsibility", "Goal-Directed"],
            },
            cardCons:
            {
                title: "Cons",
                list: ["Perfectionism", "Stubbornness", "Overly Cautious"],
            },
            img: "assets/ilustration/conscientiousness-il.png",
            imgDescription: "Symbolizing organization and planning",
        },
        {
            title: "Extraversion",
            description:
                "Extraversion (or extroversion) is a personality trait characterized by excitability, sociability, talkativeness, assertiveness, and high amounts of emotional expressiveness. Extraverts engage actively with others to earn friendship, admiration, power, status, excitement, and romance. Introverts, on the other hand, conserve their energy, and do not work as hard to earn these social rewards.<br>In the brain, Extraversion seems to be related to dopamine activity. Dopamine can be thought of as the reward neurotransmitter, and is the main chemical associated with our instinct to pursue a goal. The classic example is a rat in a maze, whose brain pumps out dopamine as he frantically seeks the cheese. Extraverts tend to have more dopamine activity, indicating that they are more responsive to the potential for a reward. Introverts have less dopamine activity, and so are less likely to put themselves out to chase down rewards.",
            cardPros: 
            {
                title: "Pros",
                list: ["Sociable", "Energetic", "Optimistic"]
            },
            cardCons:
            {
                title: "Cons",
                list: ["Impulsivity", "Inattention", "Overbearing"]
            },
            img: "assets/ilustration/extraversion-il.png",
            imgDescription: "Symbolizing sociability and interaction",
        },
        {
            title: "Agreeableness",
            description:
                "This personality trait includes attributes such as trust, altruism, kindness, affection, and other prosocial behaviors. Agreeableness describes the extent to which a person prioritizes the needs of others over their own needs. People who are high in Agreeableness experience a great deal of empathy and tend to get pleasure out of serving and taking care of others. People who are low in Agreeableness tend to experience less empathy and put their own concerns ahead of others.<br>In the brain, high Agreeableness has been associated with increased activity in the superior temporal gyrus, a region responsible for language processing and the recognition of emotions in others.",
            cardPros: 
            {
                title: "Pros",
                list: ["Empathetic", "Trusting", "Supportive"]
            },
            cardCons:
            {
                title: "Cons",
                list: ["Naivety", "Conflict-Avoidance", "Overly Compliant"],
            },
            img: "assets/ilustration/agreeableness-il.png",
            imgDescription: "Symbolizing kindness and cooperation",
        },
        {
            title: "Neuroticism",
            description:
                "Neuroticism is a personality trait characterized by sadness, moodiness, and emotional instability. This trait can be thought of as an alarm system. People experience negative emotions as a sign that something is wrong in the world. Fear is a response to danger, guilt a response to having done something wrong. However, not everyone has the same reaction to a given situation. High Neuroticism scorers are more likely to react to a situation with strong negative emotions. Low Neuroticism scorers are more likely to brush off their misfortune and move on.<br>In the brain, Neuroticism appears to relate to the interconnection of several regions, including regions involved in processing negative stimuli (such as angry faces or aggressive dogs) and dealing with negative emotions. One study found an association between high Neuroticism and altered serotonin processing in the brain.",
            cardPros:
            {
                title: "Pros",
                list: ["Sensitive", "Intuitive", "Self-Aware"]
            },
            cardCons:
            {
                title: "Cons",
                list: ["Anxiety", "Mood Swings", "Overthinking"]
            },
            img: "assets/ilustration/neuroticism-il.png",
            imgDescription: "Symbolizing emotional instability",
        },
    ];

    const traitContent = document.getElementById("trait-content");
    const traitCardPros = document.querySelector(".card-pros");
    const traitCardCons = document.querySelector(".card-cons");
    const traitImage = document.querySelector(".trait-image");
    const traitImageDesc = document.querySelector(".image-description");

    if (traitIndex !== null && traitIndex >= 0 && traitIndex < traits.length) {
        const trait = traits[traitIndex];
        let prosList = "";
        let consList = "";
        trait.cardPros.list.forEach((point) => {
            prosList += `<li>${point}</li>`;
        });
        trait.cardCons.list.forEach((point) => {
            consList += `<li>${point}</li>`;
        });

        traitContent.querySelector(".title-description").innerHTML = `
            <h2>${trait.title}</h2>
            <p>${trait.description}</p>`;   
        traitCardPros.innerHTML = `
            <div>
            <h3>${trait.cardPros.title}</h3>
            <ul>${prosList}</ul>
            </div>`;
        traitCardCons.innerHTML = `
            <div>
            <h3>${trait.cardCons.title}</h3>
            <ul>${consList}</ul>
            </div>`;
        traitImage.src = trait.img;
        traitImage.alt = trait.title;
        traitImageDesc.textContent = trait.imgDescription;
    } else {
        traitContent.innerHTML = "<p>Trait not found.</p>";
    }
    });

    function goBack() {
    window.history.back();
}
