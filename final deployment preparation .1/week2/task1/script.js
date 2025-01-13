const categoriesData = [
    { name: "Food", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnosz32Wrbra_9s3WGk-IhI7Gtw7zx-FLidw&s", link: "food.html" },
    { name: "Healthcare", icon: "https://miro.medium.com/v2/resize:fit:750/1*mT7dEi4y1VaA87SUdPojwg.png", link: "healthcare.html" },
    { name: "Hotels", icon: "https://cdn.prod.website-files.com/62c2a83de7fe5c17eb65b6f7/6388d0c91ba8f340debef782_Bq3Y_OsUoP0w3wpy6f7ypDCp9lIBejaRDa9J3PMsxe-CeSxJiFtPpIDgEyzCZNoKSfE4nfuPZj9DQCNNKyKkVexhVEEMPf8TLxG3LEhh3zefIPs1eEKj88ohtH7QC3Xh_jL4o6RddZkifvnKo6cVIbaRB_UygMxsSSyv3qqjO_i33q7C-Jbi7LKgnb6s.png", link: "hotels.html" },
    { name: "Education", icon: "https://f.hubspotusercontent40.net/hubfs/364394/what-are-hybrid-classes-how-to-be-successful-Inline1.jpg", link: "education.html" }
];

function displayCategories() {
    const categoriesContainer = document.getElementById('categories');
    categoriesData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `
            <a href="${category.link}">
                <img src="${category.icon}" alt="${category.name} icon">
                <h2>${category.name}</h2>
            </a>
        `;
        categoriesContainer.appendChild(categoryDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayCategories);
//unit test
test('should display categories correctly', () => {
    document.body.innerHTML = `<div id="categories"></div>`;
    displayCategories();
    
    const categoryElements = document.querySelectorAll('.category');
    expect(categoryElements.length).toBe(categoriesData.length);
    
    categoriesData.forEach((category, index) => {
        expect(categoryElements[index].querySelector('h2').textContent).toBe(category.name);
        expect(categoryElements[index].querySelector('a').getAttribute('href')).toBe(category.link);
    });
});