# belly-button-challenge
[HTML VIEW](https://candidamg.github.io/belly-button-challenge/)

An interactive dashboard was built with javascript to explore the Belly Button Biodiversity, which catalogs the microbes that colonize human navels.
[link](http://robdunnlab.com/projects/belly-button-biodiversity/).

On this assignment D3 library is used to read the [Jason data link](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json). 

The horizontal bar chart displays the top 10 OTUs found depending on the selection in the dropdown menu. The graph is represented by the sample_values vs otu_ids.

The bubble chart represents the otu_ids vs sample_values, also showing the results depending on the dropdown menu subject.

The demographic information panel updates whenever a new Subject ID is selected.

![alt text](https://github.com/candidamg/belly-button-challenge/blob/main/html_dashboard.PNG)

### REFERENCES:
* bubble chart: https://plotly.com/javascript/bubble-charts/
* colorscale for bubble chart: https://plotly.com/javascript/colorscales/
* Iterating through an object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#iterating_through_an_object:~:text=Iterating%20through%20an%20Object
* Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
