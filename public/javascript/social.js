// Social Section
const socialSection = document.getElementById("socialSection");

// Stored Social Data
const socialData = [
    {
        name: "github",
        icon: "<i class='bx bxl-github'></i>",
        link: "https://github.com/robiuzzaman4"
    },
    {
        name: "twitter",
        icon: "<i class='bx bxl-twitter'></i>",
        link: "https://twitter.com/robiuzzaman4"
    },
    {
        name: "linkedin",
        icon: "<i class='bx bxl-linkedin-square'></i>",
        link: "https://www.linkedin.com/in/robiuzzaman4/"
    },
    // {
    //     name: "instagram",
    //     icon: "<i class='bx bxl-instagram-alt'></i>",
    //     link: "https://www.instagram.com/"
    // }
];

// Generate Social Card
const generateSocial = () => {
    return (socialSection.innerHTML = socialData.map((e) => {
        let {icon, link} = e;
        return `
        <a href="${link}" target="_blank" class="h-8 w-8 rounded-full flex items-center justify-center text-2xl hover:text-sky-500 transition-all bg-zinc-50/30 dark:bg-zinc-800/30 shadow">
            ${icon}
        </a>`
    }).join(""));
};

// Invoke Function
generateSocial();