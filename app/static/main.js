const chart = barchart();

const div = d3.select('#vis');

const button = d3.select('button');
button.on('click', update);

update();

function update() {
  fetch('/data')
    .then(response => response.json())
    .then(data => {
      div.datum(data).call(chart);
    });
}

