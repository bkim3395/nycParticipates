import projectInfo from './project_info'
import categoryHarmonizer from './category'

export default (district) => {

    //District is just an integer corresponding to its number

    //RESET//
    $("#details-container").empty();
    let circles = d3.selectAll("circle")
    circles.style("fill", (d) => { return (d.Winner === "1" ? "green" : "red"); })
    ////////

    $("#details-container").append(`<div class="city-district-title">
                                        <h2>COUNCIL DISTRICT</h2>
                                        <h1>${district}</h1>
                                        <span>Please click the proposal for more details.</span>
                                    </div>`);
    $("#details-container").append(`<ul class="list-proposals"></ul>`);

    let projects = d3.csv("data/participatory_budgeting_projects.csv");

    projects.then((data) => {
        let list;

        if($("#category-selector").val() === "All"){
            list = d3.select(".list-proposals")
                .selectAll("li")
                .data(data.filter((d) => {
                    return (
                        (`${district}` === d["Council District"])
                        &&
                        ($("#year-selector :selected").val() === d["Vote Year"])
                    );
                }));
        }
        else{
            list = d3.select(".list-proposals")
                .selectAll("li")
                .data(data.filter((d) => {
                    return (
                        (`${district}` === d["Council District"])
                        &&
                        ($("#year-selector :selected").val() === d["Vote Year"])
                        &&
                        ($("#category-selector").val() === categoryHarmonizer(d["Category"]))
                    );
                }));
        }
        

        list.enter()
            .append("li")
            .text((d) => { return(d.Title); })
            .style("color", (d) => { return(d.Winner === "1" ? "green" : "red"); })
            .on("click", (d) => { 
                projectInfo(d); });
        })
}