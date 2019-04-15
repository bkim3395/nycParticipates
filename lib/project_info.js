import districtInfo from './district_info'

export default (project) => {

    // project is an object containing all info of specified object.    

    console.log(project.Description);

    $("#initial-details-container").remove();
    $(".city-district-title").remove();
    $(".list-proposals").remove();

    let circles = d3.selectAll("circle");
    circles.filter( (d) => {
        return(
            (d.Latitude === project.Latitude) &&
            (d.Longitude === project.Longitude)
        );
    }) 
            .style("fill", "white");

    let winner = project.Winner === "1" ? "Passed" : "Failed";
    let title = project.Title !== "" ? project.Title : "N/A"
    let category = project.Category !== "" ? project.Category : "N/A"
    let description = project.Description !== "" ? project.Description : "N/A"
    let address = project.Address !== "" ? project.Address : "N/A"    
    let votes = project.Votes !== "" ? project.Votes : "N/A"
    let cost = project.Cost !== "" ? project.Cost : "N/A"

    $("#details-container").append('<div class="project-details"></div>');
    $(".project-details").append(`<h1>${title}</h1>`);
    $(".project-details").append(`<span>Category: ${category}</span>`);
    $(".project-details").append(`<span>Description: ${description}</span>`);
    $(".project-details").append(`<span>Address: ${address}</span>`);
    $(".project-details").append(`<span>Status: ${winner}</span>`);
    $(".project-details").append(`<span>Votes Received: ${votes}</span>`);
    $(".project-details").append(`<span>Cost of the program: $${cost}</span>`);
    $(".project-details").append('<button type="button" class="details-button">Go Back</button> ')


    $(".details-button").on("click", (e) => {
        e.preventDefault();
        districtInfo(project["Council District"]);
    })
}