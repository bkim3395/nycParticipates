import mapgen from './mapgen';
import circles from './circles';

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