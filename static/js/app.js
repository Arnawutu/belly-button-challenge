// Store the URL for the JSON data in a variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Initialize the webpage
function init(){ 

    // Fetch the JSON data and log it to the console
    d3.json(url).then(function(alldata){

        // Use D3 to select the dropdown menu
        let dropdownMenu = d3.select("#selDataset");

        // Retrieve all subject names from the JSON
        let names = alldata.names;

        // Populate the dropdown menu with subject names
        names.forEach(function(id){
            dropdownMenu.append("option").text(id).property("value");
        });
       
        // Pass the first subject and call the necessary functions
        chartvalues(names[0]);
        metadata(names[0]);
    });
};

// Function triggered when the subject ID changes
function optionChanged(passedvalue) {

    // Update charts and metadata for the selected subject
    chartvalues(passedvalue);
    metadata(passedvalue);
};

// Function to fetch and display data for charts
function chartvalues(passedvalue){

    // Fetch JSON data
    d3.json(url).then(function(alldata){

        // Retrieve all samples data
        let samples = alldata.samples;

        // Filter data for the selected subject
        let id = samples.filter(take=>take.id == passedvalue);

        // Extract data for all charts
        let sample_values = id[0].sample_values; 
        let otu_ids = id[0].otu_ids; 
        let otu_labels = id[0].otu_labels; 

        // Call the function to display charts
        charts(sample_values, otu_ids, otu_labels);
    });
};

// Function to display bar and bubble charts
function charts(sample_values, otu_ids, otu_labels){

    // Fetch JSON data
    d3.json(url).then(function(alldata){
                
        // Data for the bar chart
        let bar_data = [{
            type: 'bar',
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
            text: otu_labels,
            orientation: 'h'
        }];

        // Data for the bubble chart
        let bubble_data = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker:{
                color: otu_ids,
                colorscale: 'Earth',
                size: sample_values
            }
        }];
    
        // Layout for the bar chart
        let bar_layout = {
            title: 'Bar Chart',
            height: 500,
            width: 400            
        };    

        // Layout for the bubble chart
        let bubble_layout = {
            title: 'Bubble Chart',
            height: 550,
            width: 1000 
        };

        // Display the bar chart
        Plotly.newPlot('bar', bar_data, bar_layout);

        // Display the bubble chart
        Plotly.newPlot('bubble', bubble_data, bubble_layout);
    });
};

// Function to display metadata for the selected subject
function metadata(passedvalue){

    // Fetch JSON data
    d3.json(url).then(function(alldata){

        // Retrieve all metadata
        let samples = alldata.metadata;

        // Filter metadata for the selected subject
        let id = samples.filter(take=>take.id == passedvalue);

        // Select the sample metadata element and clear its content
        let sample_metadata = d3.select('#sample-metadata').html('');

        // Iterate through metadata values and display them
        Object.entries(id[0]).forEach(([key, value]) => {
            sample_metadata.append("h5").text(`${key}: ${value}`);
        });
    });
};

// Initialize the webpage
init();
