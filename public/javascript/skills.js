// Skills Section
const skillsSection = document.getElementById("skillsSection");

// Stored Skills Data
const skillsData = [
    {
        name: "JavaScript",
        icon: "./icons/javascript.svg",
        badge: "Junior",
        badgeClr: "juniorClr" // From ./src/input.css [You should must add this for badge color]
    },
    {
        name: "Tailwind Css",
        icon: "./icons/tailwindcss.svg",
        badge: "Expert",
        badgeClr: "expertClr" // From ./src/input.css [You should must add this for badge color]
    },
    {
        name: "Sass",
        icon: "./icons/sass.svg",
        badge: "Mid label",
        badgeClr: "midClr" // From ./src/input.css [You should must add this for badge color]
    },
    {
        name: "Html",
        icon: "./icons/html.svg",
        badge: "Expert",
        badgeClr: "expertClr" // From ./src/input.css [You should must add this for badge color]
    },
    {
        name: "Css",
        icon: "./icons/css.svg",
        badge: "Expert",
        badgeClr: "expertClr" // From ./src/input.css [You should must add this for badge color]
    },
    {
        name: "Bootstrap",
        icon: "./icons/bootstrap.svg",
        badge: "Expert",
        badgeClr: "expertClr" // From ./src/input.css [You should must add this for badge color]
    }
];

// Generate Skills Card
const generateSkills = () => { 
    return (skillsSection.innerHTML = skillsData.map((e) => {
        let {name, icon, badge, badgeClr} = e;
        return `
        <div class="h-12 w-auto border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
                <img class="h-6 w-6" src="${icon}" alt="" srcset="">
                <p class="font-medium">${name}</p>
            </div>
            <span class="${badgeClr} text-xs font-medium">${badge}</span>
        </div> `
    }).join(""))
}

// Invoke Function
generateSkills();