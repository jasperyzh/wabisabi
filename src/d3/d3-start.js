import * as d3 from "d3";

document.body.insertAdjacentHTML('afterbegin',
    `<pre>d3-start</pre>
    <svg id="testsvg"></svg>`
);

const testsvg = d3.select('#testsvg');

testsvg.append('circle')
    .attr('cx', '50%').attr('cy', '50%').attr('r', 20).style('fill', 'green');