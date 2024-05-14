
document.getElementById("loginBtn").addEventListener("click", function() {
    // login.html sayfasına yönlendirme yapar
    window.location.href = "login.html";
});
function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   var a = document.getElementById("loginBtn");
        var b = document.getElementById("registerBtn");
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        function login() {
            x.style.left = "4px";
            y.style.right = "-520px";
            a.className += " white-btn";
            b.className = "btn";
            x.style.opacity = 1;
            y.style.opacity = 0;
        }
        function register() {
            x.style.left = "-510px";
            y.style.right = "5px";
            a.className = "btn";
            b.className += " white-btn";
            x.style.opacity = 0;
            y.style.opacity = 1;
        }

        document.getElementById("downloadBtn").addEventListener("click", function() {
            // Create a new anchor element
            var link = document.createElement("a");
            // Set its attributes
            link.href = "cv.pdf"; // Replace "cv.pdf" with the path to your CV file
            link.download = "ozgecmis.pdf"; // Rename the downloaded file if needed
            // Simulate click on the anchor element
            document.body.appendChild(link);
            link.click();
            // Clean up
            document.body.removeChild(link);
        });
        document.getElementById("memleketimDropdown").addEventListener("click", function() {
            document.getElementById("memleketimContent").classList.toggle("show");
        });