/*(function () {
  emailjs.init("ec_Pr_Iu_qP2vZxCi"); // Replace with your EmailJS User ID
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_4xfjvwj", "template_y6g9up8", this).then(
      function () {
        alert("Message Sent Successfully!");
      },
      function (error) {
        alert("Failed to send message: " + JSON.stringify(error));
      }
    );
  });
*/

/* 
(function () {
  emailjs.init("ec_Pr_Iu_qP2vZxCi"); // Replace with your EmailJS User ID
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // লোডার দেখানো
  document.getElementById("submit-text").style.display = "none";
  document.getElementById("loader").style.display = "inline";

  emailjs.sendForm("service_4xfjvwj", "template_y6g9up8", this).then(
    function () {
      // লোডার বন্ধ করা
      document.getElementById("submit-text").style.display = "inline";
      document.getElementById("loader").style.display = "none";

      // "Thank You" মেসেজ দেখানো
      document.getElementById("thank-you-message").style.display = "block";

      // ফর্ম রিসেট করা
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("Failed to send message: " + JSON.stringify(error));
    }
  );
});




(function () {
  emailjs.init("ec_Pr_Iu_qP2vZxCi"); // Replace with your EmailJS User ID
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // লোডার দেখানো
  document.getElementById("submit-text").style.display = "none";
  document.getElementById("loader").style.display = "inline";

  let form = this;

  emailjs.sendForm("service_4xfjvwj", "template_y6g9up8", form).then(
    function () {
      // লোডার বন্ধ করা
      document.getElementById("submit-text").style.display = "inline";
      document.getElementById("loader").style.display = "none";

      // "Thank You" মেসেজ দেখানো
      document.getElementById("thank-you-message").style.display = "block";

      // ফর্ম রিসেট করা
      form.reset();

      // "Thank You" মেসেজ ৫ সেকেন্ড পরে অদৃশ্য করা
      setTimeout(function () {
        document.getElementById("thank-you-message").style.display = "none";
      }, 5000);
    },
    function (error) {
      alert("Failed to send message: " + JSON.stringify(error));
      // লোডার বন্ধ করা
      document.getElementById("submit-text").style.display = "inline";
      document.getElementById("loader").style.display = "none";
    }
  );
});

*/


(function () {
  emailjs.init("ec_Pr_Iu_qP2vZxCi"); // Replace with your EmailJS User ID
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // লোডার দেখানো
  document.getElementById("submit-text").style.display = "none";
  document.getElementById("loader").style.display = "inline";

  let form = this;
  let responseMessage = document.getElementById("response-message");

  emailjs.sendForm("service_4xfjvwj", "template_y6g9up8", form).then(
    function () {
      // লোডার বন্ধ করা
      document.getElementById("submit-text").style.display = "inline";
      document.getElementById("loader").style.display = "none";

      // সফল মেসেজ দেখানো
      responseMessage.style.display = "block";
      responseMessage.style.color = "white";
      responseMessage.innerHTML = "✅ Thank you! Your message has been sent successfully.";

      // ফর্ম রিসেট করা
      form.reset();

      // "Thank You" মেসেজ ৫ সেকেন্ড পরে অদৃশ্য করা
      setTimeout(function () {
        responseMessage.style.display = "none";
      }, 5000);
    },
    function (error) {
      // লোডার বন্ধ করা
      document.getElementById("submit-text").style.display = "inline";
      document.getElementById("loader").style.display = "none";

      // ব্যর্থতার মেসেজ দেখানো
      responseMessage.style.display = "block";
      responseMessage.style.color = "red";
      responseMessage.innerHTML = "❌ Failed to send message. Please try again.";
    }
  );
});