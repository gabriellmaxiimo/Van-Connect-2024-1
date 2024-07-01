function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredData = data.filter(result => {
        return result.title.toLowerCase().includes(searchTerm) || result.description.toLowerCase().includes(searchTerm);
    });
    displayResults(filteredData);
}

function displayResults(results) {
    resultsContainer.innerHTML = ""; 

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
    }
function handleSearch(event) {
    if (event.key === "Enter") {
        search();
    }
}

document.getElementById("searchInput").addEventListener("keypress", handleSearch);


    results.forEach(result => {
        const resultCard = document.createElement("div");
        resultCard.classList.add("result-card", "card", "mb-3", "col-md-4", "col-sm-6", "col-xs-12"); 
        resultCard.innerHTML = `
            <div class="card-header">${result.title}</div>
            <div class="card-body">
                <p class="card-text">${result.description}</p>
                <img src="${result.imageUrl}" class="card-img-top" alt="${result.title}">
            </div>`;
        resultCard.addEventListener("click", () => {
            window.location.href = `details.html?id=${result.id}`;
        });
        resultsContainer.appendChild(resultCard);
    });
}

displayResults(data);
