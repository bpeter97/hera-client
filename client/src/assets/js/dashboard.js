/*!
 * Shards Dashboards v1.1.0
 * Copyright 2011-2018 DesignRevision
 * SEE LICENSE FILE
 */
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory()
    : typeof define === "function" && define.amd
    ? define(factory)
    : factory();
})(this, function() {
  "use strict";

  if (typeof Chart === "undefined") {
    throw new Error(
      "Shards Dashboard requires the Chart.js library in order to function properly."
    );
  }

  window.ShardsDashboards = window.ShardsDashboards
    ? window.ShardsDashboards
    : {};

  $.extend($.easing, {
    easeOutSine: function easeOutSine(x, t, b, c, d) {
      return c * Math.sin((t / d) * (Math.PI / 2)) + b;
    }
  });

  /**
   * Chart.js - Line Chart with Vertical Line
   */
  Chart.defaults.LineWithLine = Chart.defaults.line;
  Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    draw: function draw(ease) {
      Chart.controllers.line.prototype.draw.call(this, ease);
      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
        var activePoint = this.chart.tooltip._active[0],
          ctx = this.chart.ctx,
          x = activePoint.tooltipPosition().x,
          topY = this.chart.scales["y-axis-0"].top,
          bottomY = this.chart.scales["y-axis-0"].bottom;

        // Draw the line
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "#ddd";
        ctx.stroke();
        ctx.restore();
      }
    }
  });

  $(document).ready(function() {});
});

//# sourceMappingURL=shards-dashboards.1.1.0.js.map
