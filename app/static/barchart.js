function barchart() {
  let margin = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50
  };

  let width = 800 - margin.left - margin.right;
  let height = 500 - margin.top - margin.bottom;

  function chart(selection) {
    selection.each(function(data) {
      const svg = d3.select(this)
        .selectAll('svg')
        .data([data])
        .join(
          enter => enter.append('svg')
              .call(
                s => s.append('g')
                    .attr('id', 'group')
                    .call(
                      s => s.append('g')
                        .append('text')
                          .attr('id', 'title')
                          .attr("text-anchor", "middle")
                          .attr("dominant-baseline", "hanging")
                          .attr("font-family", "sans-serif")
                          .attr("font-size", "16px")
                          .text("Scores")
                    )
                    .call(
                      s => s.append('g')
                          .attr('id', 'x-axis')
                          .call(
                            a => a.append('text')
                                .attr('id', 'label')
                          )
                    )
                    .call(
                      s => s.append('g').attr('id', 'y-axis')
                    )
              )
        );

      svg.attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)

      const g = svg.select('#group');

      g.attr("transform", `translate(${margin.left}, ${margin.top})`);

      // title

      g.select('#title')
          .attr("x", width / 2)
          .attr("y", -margin.top + 5);

      // create scales
      
      const x = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.score)]).nice()
          .range([0, width]);

      const names = data
        .sort((a, b) => d3.descending(a.score, b.score))
        .map(d => d.name);

      const y = d3.scaleBand()
          .domain(names)
          .range([0, height])
          .padding(0.2);

      // create and add axes

      const xAxis = d3.axisBottom(x);

      g.select('#x-axis')
          .attr("transform", `translate(0, ${height})`)
          .call(xAxis)
          .call(g => g.selectAll(".domain").remove())
        .select('#label')
          .attr("x", width / 2)
          .attr("y", 40)
          .attr("fill", "black")
          .attr("text-anchor", "middle")
          .text("Score");

      const yAxis = d3.axisLeft(y);

      g.select('#y-axis')
          .call(yAxis)
          .call(g => g.selectAll(".domain").remove());

      // draw bars

      g.selectAll("rect")
        .data(d => d)
        .join("rect")
          .attr("x", d => 0)
          .attr("y", d => y(d.name))
          .attr("width", d => x(d.score))
          .attr("height", d => y.bandwidth())
          .attr("fill", "steelblue");

    });
  }

  chart.size = function([w, h]) {
    if (!arguments.length) return [width, height];
    width = minDim - margin.left - margin.right;
    height = minDim - margin.top - margin.bottom;
    return chart;
  }

  return chart;
}
