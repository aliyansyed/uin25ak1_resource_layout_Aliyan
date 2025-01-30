console.log(resources);

const contentContainer = document.getElementById("content");
const categoryItems = document.querySelectorAll(".navigation li");

let activeCategory = "HTML";

function renderCategoryContent(category) {
    contentContainer.innerHTML = resources
        .filter(resource => resource.category === category)
        .map(resource => `
            <article class="resource-card">
                <h2>${resource.category}</h2>
                <p>${resource.text}</p>
                <ul>
                    ${resource.sources.map(source => 
                        `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
                    ).join("")}
                </ul>
            </article>
        `).join(""); 
}

renderCategoryContent(activeCategory);

categoryItems.forEach(categoryItem => {
    categoryItem.addEventListener("click", function() {
        categoryItems.forEach(item => item.classList.remove("selected"));
        this.classList.add("selected");
        renderCategoryContent(this.textContent.trim());
    });
});
