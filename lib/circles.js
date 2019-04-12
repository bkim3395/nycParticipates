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
            console.log(data);
        });

        // projects.then((data) => {


        //     d3.select("svg")
        //       .selectAll("circle")
        //       .data(data, (d, i) => (d["Vote Year"]))
        //       .enter()
        //       .append("circle")
        //       .attr("cx", (d) =>    

        // })  
    }) 
}