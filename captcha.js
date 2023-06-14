// Generate a random captcha
function generateCaptcha() {
    var captcha = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

// Refresh the captcha
function refreshCaptcha() {
    var captchaInput = document.getElementById("captcha-form");
    var captchaPreview = document.querySelector(".captcha .preview");
    var captcha = generateCaptcha();

    captchaInput.value = "";
    captchaPreview.textContent = captcha;
}

// Validate the captcha
function validateCaptcha() {
    var captchaInput = document.getElementById("captcha-form");
    var captchaPreview = document.querySelector(".captcha .preview");

    if (captchaInput.value.toLowerCase() === captchaPreview.textContent.toLowerCase()) {
        alert("Captcha validation successful. Submitting form...");
        // You can submit the form or perform other actions here
    } else {
        alert("Captcha validation failed. Please try again.");
        refreshCaptcha();
    }
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", function() {
    var captchaRefreshBtn = document.querySelector(".captcha-refresh");
    var loginBtn = document.getElementById("login-btn");

    captchaRefreshBtn.addEventListener("click", refreshCaptcha);
    loginBtn.addEventListener("click", validateCaptcha);
});

// Generate the initial captcha
refreshCaptcha();
