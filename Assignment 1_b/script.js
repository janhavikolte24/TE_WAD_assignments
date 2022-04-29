document.getElementById("searchBtn").onclick = function () {
  myFunction();
};

function myFunction() {
  let x = document.getElementById("search").value;
  console.log(x);
}

let logdata = [];
let contactdata = [];
if (localStorage) {
  $(document).ready(function () {
    $(".save").click(function () {
      // Get input name
      var Name = $("#Name").val();
      var Email = $("#Email").val();
      var Password = $("#Password").val();

      console.log(Name);

      logdata.push({ Name, Email, Password });
      localStorage.setItem("logdata", JSON.stringify(logdata));
      alert("Your name is saved.");
    });
    $(".retrieve").click(function () {
      // Retrieve data

      console.log(JSON.parse(localStorage.getItem("logdata")));
    });

    $(".contactForm").click(function () {
      var Name = $("#form34").val();
      var Email = $("#form29").val();
      var Subject = $("#form32").val();
      var Message = $("#form8").val();

      contactdata.push({ Name, Email, Subject, Message });
      localStorage.setItem("contactdata", JSON.stringify(contactdata));
      alert("Your message is saved.");
      // Retrieve data

      console.log(JSON.parse(localStorage.getItem("contactdata")));
    });
  });
} else {
  alert("Local Storage not supported!");
}
