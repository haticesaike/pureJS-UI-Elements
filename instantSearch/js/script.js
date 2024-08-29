document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("searchIcon");
    const searchPanel = document.getElementById("searchPanel");
    const closePanel = document.getElementById("closePanel");

    searchIcon.addEventListener("click", function () {
        searchPanel.style.display = "flex";
    });

    closePanel.addEventListener("click", function () {
        searchPanel.style.display = "none";
    });
});

