// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Add active class to current nav item
    const currentLocation = location.pathname
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link")
  
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentLocation.substring(currentLocation.lastIndexOf("/") + 1)) {
        link.classList.add("active")
      } else if (
        currentLocation.substring(currentLocation.lastIndexOf("/") + 1) === "" &&
        link.getAttribute("href") === "index.html"
      ) {
        link.classList.add("active")
      } else {
        link.classList.remove("active")
      }
    })
  })
  