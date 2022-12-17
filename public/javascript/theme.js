// Theme button
const themeBtn = document.getElementById("themeBtn");

// Icons
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

// User theme on localStorage
const userTheme = localStorage.getItem("theme");

// System theme
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Theme Checking
const checking = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        
        // Icon checking
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    } else {
        document.documentElement.classList.remove("dark");

        // Icon checking
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    }
};

// Apply Theme 
const switching = () => {
        
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
            
        // Icon switching
        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
            
        // Icon switching
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
    }
};

// Add EventListener On Theme Button
themeBtn.addEventListener("click", () => {
    switching();    
});

// Invoke Function
checking();