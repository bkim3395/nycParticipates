// let cityDistricts;

// $.getJSON("lib/pbp.json", (json) => {
//     cityDistricts = json;
// })

// console.log(cityDistricts[0][Title])

// let data;
// d3.json('http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycc/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson', (error,mapData) => {
//     console.log(mapData[type]);
// })
    // let features = mapData.features;

    // mapLayer.selectAll('path')
    //     .data(features)
    //     .enter().append('path')
    //     .attr('d', path)
    //   .attr('vector-effect', 'non-scaling-stroke')
    //   .style('fill', fillFn)
    //   .on('mouseover', mouseover)
    //   .on('mouseout', mouseout)
    //   .on('click', clicked);
// })

// let width = 1000;
// let height = 1000;
// let centered;

// let projection = d3.geo.mercator()
//                 .scale(500)
//                 .center([-74,4.5])
//                 .translate([width / 2, height / 2])

// let path = d3.geo.path().
//             projection(projection)

// let svg = d3.select('svg').
//             attr('width', width)
//             .attr('height', height)

// var g = svg.append('g');

// var effectLayer = g.append('g')
//   .classed('effect-layer', true);

// var mapLayer = g.append('g')
//   .classed('map-layer', true);

// var dummyText = g.append('text')
//   .classed('dummy-text', true)
//   .attr('x', 10)
//   .attr('y', 30)
//   .style('opacity', 0);

// var bigText = g.append('text')
//   .classed('big-text', true)
//   .attr('x', 20)
//   .attr('y', 45);