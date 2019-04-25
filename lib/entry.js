import mapgen from './mapgen';
import circles from './circles';


//Cylindrical Projections
//Geo path generator

document.addEventListener("DOMContentLoaded", () => {

    let width = 700;
    let height = 500;
    let projection = d3.geoEquirectangular()
                        .translate([width/2, height/2])
                        .scale(69000)
                        .center([-73.985974, 40.712776]);
                        // 40.712776, -74.005974

    let path = d3.geoPath().projection(projection);

    mapgen(width, height, projection, path).then(() => {
        circles(projection, path);
    })
})

// Order of the Program:
// 1: Set up Projection and then geoPath() <Cylindrical Projection>
// 2: Draw Districts
// 3: After districts are all drawn, draw Circles and set up two listeners for the circles.
// 3 (In Detail): Check the value of two SELECT element and create selector accordingly.
///////////////
// 4: If circle is clicked, call project_info. If District is clicked, call district_info.
//    Give selectDist to a selected district to keep track of which district has been clicked. (Used in districtInfo)
// 5: In District_info: Look at the values of two select elements again and create selector accordingly.
// 6: In projectInfo, which can be gotten from district info or circle, select a circle with same lat/lng as project
//    and make them white. Visualize information about the project.

// Enter-Exit Mechanism:
// 1. Create Selection for elements that exist or will exist.
// 2. Create New elements in enter() (New Data)
// 3. Remove Outdated elements in exit()