import Alpine from "alpinejs";
import ApexCharts from "apexcharts";

document.addEventListener("alpine:init", () => {
  Alpine.store("darkMode", {
    dark: false,

    toggle() {
      this.dark = !this.dark;
      if (this.dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  });
});
window.Alpine = Alpine;
Alpine.start();


var options = {
  series: [
    {
      data: [168, 385, 201, 298, 187, 195, 291],
    },
  ],
  colors: ["#3C50E0"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "25%",
      endingShape: "rounded",
      borderRadius: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 4,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S", "S"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    markers: {
      radius: 99,
    },
  },
  yaxis: {
    title: false,
  },
  grid: {
    strokeDashArray: 7,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      formatter: function (val) {
        return val;
      },
    },
  },
};
var chart = new ApexCharts(document.querySelector("#chartFive"), options);
chart.render();
