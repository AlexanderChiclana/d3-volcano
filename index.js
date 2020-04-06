// 'use strict';
// import { select, json, geoPath, geoNaturalEarth1, zoom, event, min, max, csv, format, sliderHorizontal  } from 'd3';
// import 'd3-simple-slider'
// import { feature } from 'topojson';

// // user require with a reference to bundle the file and use it in this file
// // var example = require('./example');

// import 'bootstrap';

// // allows usage of new JS features
// require('babel-polyfill');

// // load manifests
// // scripts
// require('./assets/scripts/app.js');

// // styles
// require('./assets/styles/index.scss');

// const svg = select('svg');

// const projection = geoNaturalEarth1()
//   .center([0, 0])
//   .scale(250)
//   .translate([ 900, 400 ])

// const pathGenerator = geoPath().projection(projection);

// const g = svg.append('g');


// g.append('path')
//   .attr('class', 'sphere')
//   .attr('d', pathGenerator({ type: 'Sphere' }))
//   .attr('z', '2');

// svg.call(
//   zoom().on('zoom', () => {
//     g.attr('transform', event.transform)
//   })
// );

// let aa = [-122.490402, 37.786453];
// let bb = [-140.389809, 33.72728];


// json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
//   // parses the world atlast package into json
//   .then(data => {
//     // feature function accepts the world atlas data and converts it into SVG paths, setting those paths into the countries variable
//     const countries = feature(data, data.objects.countries);
//     console.log(data);

//     const paths = g.selectAll('path').data(countries.features);

//     // draws the paths for each country
//     paths
//       .enter()
//       .append('path')
//       .attr('class', 'country')
//       .attr('d', d => pathGenerator(d))
//       .attr('z', '2')

//     // draws dots for each volcano

//     const volcanoes = []


//     const renderVolcanoes = data => {
//       console.log(data)
//       g.selectAll('circle')
//         .data(data).enter()
//         .append('circle')
//         .attr('cx', function (d) { return projection([d.Longitude, d.Latitude])[0] })
//         .attr('cy', function (d) { return projection([d.Longitude, d.Latitude])[1] })
//         .attr('r', '5px')
//         .attr('fill', 'red')
//         .attr('z', '5')
//         .attr('class', 'volcano-dot')
//         .on('click', function (d) {
//           console.log(d)
//           window.alert(d)
//         })
//     }

//     csv('./significantvolcanoeruptions.csv').then(
//       data => {
//         // console.log(data)
//         data.forEach(d => {
//           // console.log(d)
//           d.Latitude = +d.Latitude
//           d.Longitude = +d.Longitude
//         })
//         renderVolcanoes(data)
//       }
//     )
//   })
//   // selectAll('svg').attr("transform", "scale(2)");

// //   console.log(d3)
// // const slider = d3
// //   .sliderHorizontal()
// //   .min(-4000)
// //   .max(2020)
// //   .step(10)
// //   .width(3000)
// //   .displayValue(false)
// //   .on('onchange', val => {
// //     d3.select('#value').text(val)
// //   })

//   // d3.select('#slider')
//   //         .append('svg')
//   //         .attr('width', 500)
//   //         .attr('height', 100)
//   //         .append('g')
//   //         .attr('transform', 'translate(30,30)')
//   //         .call(slider);
