// d3.json("data/city_districts.json").then((data) => {
//     console.log(data);
// })

// console.log("testing")

// let projection = d3.geoEqualEarth()
// let path = d3.geoPath(projection);

// let svg = d3.select("body").append("svg")
//             .attr("width", 500)
//             .attr("height", 500);

export default (projection, path) => {
    $("#year-selector").on("click", (e) => {
        e.preventDefault();

        console.log(`Year ${e.target.value} selected!`);

        let projects = d3.csv("data/participatory_budgeting_projects.csv");

        projects.then((data) => {
            let selection = d3.select("svg")
                                .selectAll("circle")
                                .data(data.filter((d) => { return(e.target.value === d["Vote Year"]); }),
                                        (d)=>{ return d["Vote Year"]; })
              
            selection.enter()
                    .append("circle")
                    .attr("cx", (d) => (projection([d.Longitude, d.Latitude])[0]))
                    .attr("cy", (d) => (projection([d.Longitude, d.Latitude])[1]))
                    .attr("r", "1px")
                    .attr("class", (_, i) => { return(`circle-${i}`) })
                    .attr("fill", (d)=> { return(d.Winner === "1" ? "green" : "red"); })
                                
            selection.exit()
                    .remove()
        })  
    }) 
}

// , (d, i) => (d["Vote Year"])