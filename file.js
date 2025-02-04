function opentab(tabname) {
    // Get all tab links and tab contents
    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");

    // Clear active-link class from all tab links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Hide all tab contents and remove active-tab class
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active-link class to the clicked tab and show corresponding content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
