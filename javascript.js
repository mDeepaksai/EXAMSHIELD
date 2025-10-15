const elements = document.querySelectorAll(".nav a,.get-started,.call")

elements.forEach(el =>
{
    el.addEventListener("mouseenter", () =>
    {
        el.style.transform = "scale(1.2)"
        el.style.transition = "transform 1s ease"
    });
    el.addEventListener("mouseleave", () =>
    {
        el.style.transform = "scale(1)"
    });
});
const circle = document.querySelectorAll(".nav .image img");

circle.forEach(el =>
{
    el.addEventListener("mouseenter", () =>
    {
        el.style.transform = "rotate(360deg)"
        el.style.transition = "transform 1s ease"
    });
    el.addEventListener("mouseleave", () =>
    {
        el.style.transform = "scale(1) rotate(0deg)"
    });
});
const btn = document.createElement("button")
btn.textContent = "↑"
btn.classList.add("btn")
btn.style.position = "fixed"
btn.style.bottom = "100px"
btn.style.right = "100px"
btn.style.display = "none"
document.body.appendChild(btn)
window.addEventListener("scroll", () =>
{
    if (window.scrollY > 150)
        btn.style.display = "block"
    else
        btn.style.display = "none"
})
btn.addEventListener("click", () =>
{
    window.scrollTo({ top: 0, behavior: "smooth" })
})
const darkmode = document.getElementById("darkModeBtn");

darkmode.addEventListener("click", () =>
{
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark"))
    {
        darkmode.textContent = "☀️ Light Mode";
    } else
    {
        darkmode.textContent = "🌙 Dark Mode";
    }
});

