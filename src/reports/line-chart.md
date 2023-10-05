---
title: Line Chart
description: Displays data in a line chart
---

The report shows 1 or more data line in a chart.
If there is a Group By List View Definition, multiple lines will be shown.

There must be at least one DATE or DATETIME List View Definition for the x axis. If there are several, use the xAxisField custom parameter to determine which field is used as x axis.

## Configuration

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| yAxisField | Text | Optional, if set the fields will be used as the yAxisvalues. Otherwise, is the record count per date. |
| yAxisType | Text | Optional, default COUNT. Can be COUNT, AVG, SUM |
| xAxisField | Text | Optional, if set, the groupby variable's role changes. See groupBy (Important variables) |
| noLegend | Boolean | Optional, if true, no legend is shown in the chart|


