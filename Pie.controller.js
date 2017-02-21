sap.ui.define([
  'sap/ui/core/mvc/Controller',
  './pieChart'
], function (Controller, pieChart) {
  'use strict'

  return Controller.extend('sap.viz.sample.Pie.Pie', {
    onInit: function () {
      // initialize a pie chart instance
      this.chart = pieChart()
      // configure the inner and outer radius for the chart
      this.chart.innerRadius(40)
      this.chart.outerRadius(80)
    },
    draw: function () {
      // sample data
      var data = [
        {
          'name': 'jun shen',
          'score': 30,
          'color': 'red'
        },
        {
          'name': 'aaron',
          'score': 60,
          'color': 'yellow'
        },
        {
          'name': 'atige',
          'score': 137,
          'color': 'purple'
        },
        {
          'name': 'linus',
          'score': 46,
          'color': 'black'
        },
        {
          'name': 'grass',
          'score': 8,
          'color': 'green'
        }
      ]

      // configure the width and height for the chart
      this.chart.width($('#pieChart').width())
      this.chart.height($('#pieChart').height())

      // draw the chart
      d3.select('#pieChart').data([data])
        .call(this.chart)
    }
  })
})

// d3.select('#chart').append("svg:svg").data([data[0].values])