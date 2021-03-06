import districtInfo from './district_info'
import categoryHarmonizer from './category'

export default (project) => {

    // project is an object containing all info of specified object.    

    $("#details-container").empty();

    let circles = d3.selectAll("circle");
    circles.style("fill", (d) => { return (d.Winner === "1" ? "green" : "red"); })
    circles.filter( (d) => {
        return(
            (d.Latitude === project.Latitude) &&
            (d.Longitude === project.Longitude)
        );
    }) 
            .style("fill", "white");

    let winner = project.Winner === "1" ? "Passed" : "Failed";
    let title = project.Title !== "" ? project.Title : "N/A";
    let category = categoryHarmonizer(project.Category);
    let description = project.Description !== "" ? project.Description : "N/A";
    let year = project["Vote Year"] !== "" ? project["Vote Year"] : "N/A";
    let address = project.Address !== "" ? project.Address : "N/A";
    let votes = project.Votes !== "" ? project.Votes : "N/A";
    let cost = project.Cost !== "" ? project.Cost : "N/A";

    $("#details-container").append('<div class="project-details"></div>');
    $(".project-details").append(`<h2>${title}</h2>`);
    $(".project-details").append(`<span>Category: ${category}</span>`);
    $(".project-details").append(`<span>Vote Year: ${year}</span>`);
    $(".project-details").append(`<span>Description: ${description}</span>`);
    $(".project-details").append(`<span>Address: ${address}</span>`);
    $(".project-details").append(`<span>Status: ${winner}</span>`);
    $(".project-details").append(`<span>Votes Received: ${votes}</span>`);
    $(".project-details").append(`<span>Cost of the program: $${cost}</span>`);
    $(".project-details").append('<div class="button-cover"><button type="button" class="details-button">Go Back</button><div>')


    $(".details-button").on("click", (e) => {
        e.preventDefault();
        districtInfo(project["Council District"]);
    })
}