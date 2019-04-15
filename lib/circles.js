// d3.json("data/city_districts.json").then((data) => {
//     console.log(data);
// })

// console.log("testing")

// let projection = d3.geoEqualEarth()
// let path = d3.geoPath(projection);

// let svg = d3.select("body").append("svg")
//             .attr("width", 500)
//             .attr("height", 500);

import projectInfo from './project_info'
import categoryHarmonizer from './category';

export default (projection, path) => {

    circleGen(projection);

    $("#year-selector").on("click", ( ) => {
        circleGen(projection);
    })

    $("#category-selector").on("click", ( ) => {
        circleGen(projection);
    })
}

const circleGen = (projection) => {

    ///RESET///
        $("#details-container").empty();
        $("#details-container").append(`<div id="initial-details-container">
            <img src="images/NYPBC-logo.png"></img>
            <img src="images/NYC-Emblem.png"></img>
            </div>`);
        //////////


        let projects = d3.csv("data/participatory_budgeting_projects.csv");
        
        projects.then((data) => {
            let selection;

            if (($("#category-selector").val() === "All") && ($("#year-selector").val() === "Year")) {
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data,
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]))); })
            }
            else if ($("#category-selector").val() === "All") {
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data.filter((d) => { return ($("#year-selector").val() === d["Vote Year"]); }),
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]))); })
            }
            else if($("#year-selector").val() === "Year"){
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data.filter((d) => {
                        return ($("#category-selector").val() === categoryHarmonizer(d["Category"]));
                    }),
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]))); })
            }
            else {
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data.filter((d) => {
                        return (($("#year-selector").val() === d["Vote Year"]) &&
                            ($("#category-selector").val() === categoryHarmonizer(d["Category"])));
                    }),
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]))); })
            }



            selection.enter()
                .append("circle")
                .attr("cx", (d) => (projection([d.Longitude, d.Latitude])[0]))
                .attr("cy", (d) => (projection([d.Longitude, d.Latitude])[1]))
                .attr("r", "2px")
                .attr("cursor", "pointer")
                .attr("class", (_, i) => { return (`circle-${i}`) })
                .attr("fill", (d) => { return (d.Winner === "1" ? "green" : "red"); })
                .on("click", (d) => {
                    projectInfo(d);
                })

            selection.exit()
                .remove()
        })
}