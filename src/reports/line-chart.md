---
title: Line Chart
description: Displays data in a line chart
---

The report shows 1 or more data line in a chart.
If there is a Group By List View Definition, multiple lines will be shown.

There must be at least one DATE or DATETIME List View Definition for the x axis. If there are several, use the xAxisField custom parameter to determine which field is used as x axis.

## Configuration

A Main List View is required.

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| noLegend | Boolean | Optional. Defaults to false. Set to true to remove the chart's legend. Example: `noLegend;` |
| yAxisField | Field Path | Optional. By default, the Y-axis shows how many records exist per date. If set, the specified field will be displayed on the Y-axis. |
| yAxisType | Text | Optional. Default: COUNT. Can be: COUNT, AVG, SUM |
| xAxisField | Text | Optional, if set, the groupby variable's role changes. See groupBy (Important variables) |
| xAxisUnit | (Optional) By default it will change according to the amount of records (try to fit them in neatly). Can be set to month, day, year or any valid momentjs date format. |


