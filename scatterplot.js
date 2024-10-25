// Load the data
const iris = d3.csv("iris.csv").then(function(data) {
    // Convert string values to numbers
    data.forEach(function(d) {
        d.PetalLength = +d.PetalLength;
        d.PetalWidth = +d.PetalWidth;
    });
// Define the dimensions and margins for the SVG 
    const margin = {top:30, right: 40, bottom: 50, left:60}; 
    const width = 600 - margin.left - margin.right; 
    const height = 400 - margin.top - margin.bottom; 

// Create the SVG container 
    const svg = d3.select("#scatterplot").append("svg") 
        .attr("width", width + margin.left + margin.right) 
        .attr("height", height + margin.top + margin.bottom + 20) 
        .append("g") 
        .attr("transform", "translate(" + margin.left + ","+ margin.top + ")"); 

// Set up scales for x and y axes 
    const xScale = d3.scaleLinear() 
        .domain([d3.min(data, d => d.PetalWidth) - 0.5, d3.max(data, d => d.PetalWidth) + 0.5]) 
        .range([0, width]); 
    
    const yScale = scaleLinear() 
        .domain([0,d3.max(data, d => d.PetalLength) + 0.5]) 
        .range([height, 0]);
// Add scales
// Add circles for each data point
// Add x-axis label
// Add y-axis label
// Add legend
