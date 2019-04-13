export default (district) => {
    console.log(`This is District ${district}. Data below has been transmitted.`)
    console.log(`The Year selected is ${$("#year-selector :selected").val()}.`)
    console.log(`God Bless America.`)

    $("#initial-details-container").remove();
    $(".city-district-title").remove();
    $(".list-proposals").remove();
    $("#details-container").append(`<div class="city-district-title">
                                        <h2>COUNCIL DISTRICT</h2>
                                        <h1>${district}</h1>
                                        <span>Please click the proposal for more details.</span>
                                    </div>`);
    $("#details-container").append(`<ul class="list-proposals"></ul>`);

    let projects = d3.csv("data/participatory_budgeting_projects.csv");

    projects.then((data) => {

        let list = d3.select(".list-proposals")
                .selectAll("li")
                .data(data.filter((d) => { 
                    return(
                            (`${district}` === d["Council District"])
                            && 
                            ($("#year-selector :selected").val() === d["Vote Year"])
                    ); 
                }));

        list.enter()
            .append("li")
            .text((d) => { return(d.Title); })
            .style("color", (d) => { return(d.Winner === "1" ? "green" : "red"); })
            .on("click", (d) => { console.log(d.Description) });
        })

        //Add Scrolling feature.
}