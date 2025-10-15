
const form = document.querySelector("form");

form.addEventListener("submit", function (e)
{
    e.preventDefault()
    const email = document.getElementById("name");
    const password = document.getElementById("pass");
    clearErrors();

    let valid = true;

    if (email.value.trim() === "")
    {
        showError("name", "Email is required");
        valid = false;
    } else if (!email.value.includes("@"))
    {
        showError("name", "Enter a valid email");
        valid = false;
    }
    if (password.value.trim() === "")
    {
        showError("pass", "Password is required");
        valid = false;
    } else if (password.value.length < 6)
    {
        showError("pass", "Password must be at least 6 characters");
        valid = false;
    }


    if (valid)
    {
        alert("Form submitted successfully!");
        form.submit();
    }
});

function showError(inputId, message)
{
    document.getElementById(inputId + "Error").textContent = message;
    document.getElementById(inputId).classList.add("error-border");
}

function clearErrors()
{
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input").forEach(el => el.classList.remove("error-border"));
}
