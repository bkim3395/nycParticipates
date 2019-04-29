# NYC Participates!

[Live Site](http://bumsookim.net/nycParticipates/)

NYC Participates is a data visualization of NYC Participatory Budgeting Projects between 2012 and 2017.

## Technologies Used
+ Javascript
+ jQuery
+ D3.js
+ GeoJSON

## Features

[Feature_1]:https://raw.githubusercontent.com/bkim3395/nycParticipates/master/images/image_1.gif "Feature_1"
![alt-text][Feature_1]

The user can select the projects by specific year, categories, and city council districts. The circles, representing proposed projects, will be drawn according to the selection. Green circle indicates passed proposal while red circle indicated failed proposal. The map of city council districts is drawn using GeoJSON data from [NYC government website](https://www1.nyc.gov/site/planning/data-maps/open-data/districts-download-metadata.page). When mouse hovers over the district, the district turns white. Clicking on the district will show the list of all projects that satisfy the user's filter. The green project indicates passed proposal while the red project indicates failed proposal.

Clicking on the project renders the information about the project, such as category, the year it was voted on, description, address, the votes it received and the cost of the project.


[Feature_2]:https://raw.githubusercontent.com/bkim3395/nycParticipates/master/images/Feature_3.gif "Feature_2"
![alt-text][Feature_2]

The user can select specific project of interest by clicking an corresponding circle. The app will show information about the specific project and the circle will turn white. Pressing the "Go Back" button will render the information about the project's district. The circle becomes larger when mouse hovers over and returns to original size when mouse leaves.

## Implementation

The map is drawn with D3.js. It reads the GeoJSON and draws the Paths inside SVG accordingly.

```javascript
 let cityMap = d3.json("data/city_districts.json");

    return (cityMap.then((data) => {
    svg.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("class", (d) => ("district-" + d.properties.CounDist))
        .attr("d", path)
        .attr("cursor", "pointer")
        .on("mouseenter", (d)=>{
                            d3.select(`.district-${d.properties.CounDist}`).attr("fill", "white")
                            })
        .on("mouseleave", (d)=>{
                            d3.select(`.district-${d.properties.CounDist}`).attr("fill", "black")
                            })
        .on("click", (d) => {
                            districtInfo(d.properties.CounDist);
                           })       
    }));
```

Likewise, D3.js reads the CSV data containing information about the projects between 2012 and 2017, retrives the latitude and longitude of each projects and draws the circles representing the projects on top of the paths representing the council districts.

```javascript
 selection.enter()
        .append("circle")
        .attr("cx", (d) => (projection([d.Longitude, d.Latitude])[0]))
        .attr("cy", (d) => (projection([d.Longitude, d.Latitude])[1]))
        .attr("r", "2px")
        .attr("cursor", "pointer")
        .attr("class", (_, i) => { return (`circle-${i}`) })
        .attr("fill", (d) => { return (d.Winner === "1" ? "green" : "red"); })
        .on("click", (d) => {
            if ($('.selectDist').length !== 0){
                $('.selectDist').removeClass("selectDist");
            }
            $(`.district-${d["Council District"]}`).addClass("selectDist");
            projectInfo(d);
        })
        .on("mouseover", function(d){
            d3.select(this).attr("r", "7px");
        })
        .on("mouseout", function(d){
            d3.select(this).attr("r", "2px");
        })
```