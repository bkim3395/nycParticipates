// d3.json("data/city_districts.json").then((data) => {
//     console.log(data);
// })

// console.log("testing")

// let projection = d3.geoEqualEarth()
// let path = d3.geoPath(projection);

// let svg = d3.select("body").append("svg")
//             .attr("width", 500)
//             .attr("height", 500);

document.addEventListener("DOMContentLoaded", () => {
    let width = 700;
    let height = 500;
    let svg = d3.select("div#map-container")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 " + width + " " + height ).style("background", "#c9e8fd")
                .classed("svg-content", true);

    let projection = d3.geoEquirectangular()
                        .translate([width/2, height/2])
                        .scale(69000)
                        .center([-73.985974, 40.712776]);
    // 40.712776, -74.005974
    let path = d3.geoPath().projection(projection);

    let cityMap = d3.json("data/city_districts.json");

    cityMap.then((data) => {
        svg.selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("class", (d) => ("district-" + d.id))
            .attr("d", path);
        
    });

    // Promise.all(([cityMap]).then((values) => {
    //     svg.selectAll("path")
    //         .data(values[0].features)
    //         .enter()
    //         .append("path")
    //         .attr("class", "districts")
    //         .attr("d", path);
        
    // }));

})