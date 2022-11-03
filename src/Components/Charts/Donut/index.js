import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import './LineChart/index.css';
var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
export const doughnutChart = ({})=>{
    var oilData = {
    labels: [
        "Youtube",
        "Facebook",
        "Instagram",
        "TikTok",
        "Twitter"
    ],
    datasets: [
        {
            data: [92, 92, 88, 86, 84],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ],
            borderColor: "black",
            borderWidth: 2
        }]
};

var chartOptions = {
  rotation: -Math.PI,
  cutoutPercentage: 30,
  circumference: Math.PI,
  legend: {
    position: 'left'
  },
  animation: {
    animateRotate: false,
    animateScale: true
  }
};

var doughnutChart = new Chart(oilCanvas, {
  type: 'doughnut',
  data: oilData,
  options: chartOptions
});
}