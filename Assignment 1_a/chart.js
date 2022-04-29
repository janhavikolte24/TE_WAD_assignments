//pie
var ctxP = document.getElementById("pieChart").getContext("2d");
var myPieChart = new Chart(ctxP, {
  type: "pie",
  data: {
    labels: ["Comp", "IT", "ENTC"],
    datasets: [
      {
        data: [300, 250, 100],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"],
      },
    ],
  },
  options: {
    responsive: false,
  },
});
