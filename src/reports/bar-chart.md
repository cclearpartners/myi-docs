---
title: Bar Chart
description: Show data as bars
---

The details table is shown in a popup when the user clicks on a bar or on the total number in the top-right corner.

## Configuration

The List View MUST have one Group By field. It determines how the records are grouped into bars.

## Examples

Default chart, with Group By and Filter By on `Status_vod__c`.

![Bar Chart Grouped By Status and Date](/static/img/report-bar-chart-groupBy2.png "Bar Chart Grouped By Status and Date")

Same configuration with the following custom parameters added: `groupBy2:Call_Date_vod__c`

![Bar Chart Grouped By Status and Date](/static/img/report-bar-chart-groupBy2.png "Bar Chart Grouped By Status and Date")

## Custom Parameters

| Name | Type | Description |
|------|------|-------------|
| dataLabels | Boolean | Defaults to false. Set to true to write the value on each bar. |
| details | Boolean | Defaults to true. When set to false, no modal will be shown when the user clicks on the chart. |
| groupBy2 | String | A field path to group bars along a second dimension. This results in multiple bars per category created with the List View's Group By field. |
| highlight | String | Optional. When not set, the highlight is shown in the top left corner. Possible values: center, both (top-left and center), false (no highlight). |
| horizontal | Boolean | Set to true for a horizontal chart. |
| monochrome | Boolean or Color | Sets all bars to the same color. Set to true to use the first default color or set it to a specific color, such as `#ff0000`. |
| noLegend | Boolean | Defaults to false. When groupBy2 is used and this is set to true, the legend is not displayed. |
| stacked | Boolean | Used in conjunction with groupBy2 to stack multiple bars within the same category. |
| yAxisField | String | Field path. Used in conjunction with `yAxisType`. |
| yAxisType | COUNT,SUM,AVG | Defaults to COUNT, which displays how many records are in each bar. SUM and AVG use the field set in yAxisField to determine the y-axis value. |