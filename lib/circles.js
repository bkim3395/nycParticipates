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
import districtInfo from './district_info'
import categoryHarmonizer from './category';

export default (projection, path) => {

    circleGen(projection);

    $("#year-selector").on("input", ( ) => {
        circleGen(projection);
    })

    $("#category-selector").on("input", ( ) => {
        circleGen(projection);
    })


    $("#status-selector").on("input", () => {
        circleGen(projection);
    })
}

const circleGen = (projection) => {
    ///RESET///
    ///We Call DistrictInfo if selectDist class exists.
    if(($(".list-proposals").length !== 0) || ($(".project-details").length !== 0)){
        let classArr = $(".selectDist").attr("class").split(' ');
        let districtNum;
        classArr.forEach((className) => {
            if(className.includes("district-")){
                let arr = className.split('-');
                districtNum = arr[1];
            }
        }) 
        districtInfo(districtNum);
    }
    // else{
    //     $("#details-container").empty();
    //     $("#details-container").append(`<div id="initial-details-container">
    //         <img src="images/NYPBC-logo.png"></img>
    //         <img src="images/NYC-Emblem.png"></img>
    //         </div>`);
    // }
    //////////


        let projects = d3.csv("data/participatory_budgeting_projects.csv");
        
        projects.then((data) => {
            let selection;

            if (($("#category-selector").val() === "All") && ($("#year-selector").val() === "Year")
                                                        && ($("#status-selector").val() === "All"))  {
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data,
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]), d["Winner"])); })
            }
            else if (($("#category-selector").val() === "All") && ($("#status-selector").val() === "All")){
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data.filter((d) => { return ($("#year-selector").val() === d["Vote Year"]); }),
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]), d["Winner"])); })
            }
            else if (($("#year-selector").val() === "Year") && ($("#status-selector").val() === "All")){
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data.filter((d) => {
                        return ($("#category-selector").val() === categoryHarmonizer(d["Category"]));
                    }),
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]), d["Winner"])); })
            }
            else if (($("#year-selector").val() === "Year") && ($("#category-selector").val() === "All")) {
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data.filter((d) => {
                        return ($("#status-selector").val() === d["Winner"]);
                    }),
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]), d["Winner"])); })
            }
            else if ($("#status-selector").val() === "All"){
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data.filter((d) => {
                        return (($("#year-selector").val() === d["Vote Year"]) &&
                            ($("#category-selector").val() === categoryHarmonizer(d["Category"])));
                    }),
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]), d["Winner"])); })
            }
            else if ($("#year-selector").val() === "Year"){
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data.filter((d) => {
                        return (($("#status-selector").val() === d["Winner"]) &&
                            ($("#category-selector").val() === categoryHarmonizer(d["Category"])));
                    }),
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]), d["Winner"])); })
            }
            else if ($("#category-selector").val() === "All") {
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data.filter((d) => {
                        return (($("#status-selector").val() === d["Winner"]) &&
                            ($("#year-selector").val() === d["Vote Year"]));
                    }),
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]), d["Winner"])); })
            }
            else{
                selection = d3.select("svg")
                    .selectAll("circle")
                    .data(data.filter((d) => {
                        return (($("#status-selector").val() === d["Winner"]) &&
                            ($("#year-selector").val() === d["Vote Year"]) &&
                            ($("#category-selector").val() === categoryHarmonizer(d["Category"])));
                    }),
                        (d) => { return (d["Vote Year"].concat(categoryHarmonizer(d["Category"]), d["Winner"])); })
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

            selection.exit()
                .remove()
        })
}