sap.ui.define([], function () {
  return function () {
    // avabled configuration options
    var _innerRadius = 5
    var _outerRadius = 30
    var _width = 60
    var _height = 60

    // Chart
    var my = function (selection) {
      selection.each(function (d, i) {
        var arc = d3.svg.arc().outerRadius(_outerRadius).innerRadius(_innerRadius)
        var pie = d3.layout.pie().value(function (d) {
          return d.score
        })

        var g = d3.select(this).append('g')
          .attr('transform', 'translate(' + _width / 2 + ',' + _height / 2 + ')')

        g.selectAll('path')
          .data(pie(d))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function (d) {
            return d.data.color
          })
      })
    }

    // getter/setter for outerRadius
    my.outerRadius = function (outerRadius) {
      if (!arguments.length) return _outerRadius
      _outerRadius = outerRadius
      return my
    }

    // getter/setter for innerRadius
    my.innerRadius = function (innerRadius) {
      if (!arguments.length) return _innerRadius
      _innerRadius = innerRadius
      return my
    }

    // getter/setter for width
    my.width = function (width) {
      if (!arguments.length) return _width
      _width = width
      return my
    }

    // getter/setter for height
    my.height = function (height) {
      if (!arguments.length) return _height
      _height = height
      return my
    }
    return my
  }
})