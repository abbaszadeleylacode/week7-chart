var canvas = document.getElementById('myChart');
var data = {
  labels:["Oglan","Qız"],
  datasets:[
    {
      label: "tələbələr",
      backgroundColor: "red",
      borderColor: "purple",
      borderWidth:1,
      hoverBackgroundColor: "purple",
      hoverBorderColor: "pink",
      data:[39,11,0],
    }
  ]
};
var myBarChart = Chart.Bar(canvas,{
  data:data
});