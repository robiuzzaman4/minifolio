// Repository Section
const repoSection = document.getElementById("repoSection");

// Stored Repositories Data
const repoData = [
    {
        id: "A1",
        title: "minifolio",
        link: "https://github.com/robiuzzaman4/minifolio", // Your Repositories Link
        description: "Minifolio - Developer Portfolio",
        language: "JAVASCRIPT",
        circleClr: "js-color", // From ./src/input.css
        star: 1,
        fork: 0
    },
    {
        id: "A2",
        title: "qoals-clone",
        link: "https://github.com/robiuzzaman4/qoals-clone", // Your Repositories Link
        description: "Qoals-clone is a copyed version of 'qoals.com'. I clone it's with Tailwindcss.",
        language: "HTML",
        circleClr: "html-color",
        star: 1,
        fork: 0
    },
    {
        id: "A3",
        title: "glyphsy",
        link: "https://github.com/robiuzzaman4/glyphsy", // Your Repositories Link
        description: "Glyphsy - A bundle of glyphs in text formet. incluid of copy to clipbord",
        language: "CSS",
        circleClr: "css-color",
        star: 1,
        fork: 0
    },
    {
        id: "A4",
        title: "temcal",
        link: "https://github.com/robiuzzaman4/temcal", // Your Repositories Link
        description: "'temcal' is a Temperature Converter which made with JavaScript.",
        language: "CSS",
        circleClr: "css-color",
        star: 1,
        fork: 0
    }
];

// Generate Repository Card
const generateRepo = () => {
    return (repoSection.innerHTML = repoData.map((e) => {
        let {title, description, link, language, circleClr, star, fork} = e; 
        return `
        <div class="h-40 md:h-36 w-auto py-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-col items-start justify-between gap-2">
            <div class="flex flex-col items-start gap-2">
                <div class="flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                    </svg>
                    <a class="text-sky-500 hover:underline font-medium"  href="${link}" target="_blank" >${title}</a>
                </div>
                <div class="font-medium text-zinc-500">${description}</div>
            </div>
            <div class="flex items-center justify-between gap-4">
                <div class="flex items-center justify-center gap-2">
                    <div class="h-3 w-3 rounded-full ${circleClr}"></div>
                    <p class="text-sm text-zinc-500 font-medium">${language}</p>
                </div>
                <div class="text-zinc-500 flex items-center justify-center gap-2">
                    <i class="bx bx-star"></i>
                    <p class="text-sm font-medium">${star}</p>
                </div>
                <div class="text-zinc-500 flex items-center justify-center gap-2">
                    <i class="bx bx-git-repo-forked"></i>
                    <p class="text-sm font-medium">${fork}</p>
                </div>
            </div>
        </div>`
    }).join(""));   
};

// Invoke Function
generateRepo();