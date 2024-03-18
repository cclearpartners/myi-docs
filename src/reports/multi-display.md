---
title: Multi-Display
description: Switch between different views within the same report
---

The Multi-display report enables the user to switch between different reports.

<video width="100%" controls>
  <source src="/static/video/multi-display.mov" type="video/mp4">
</video>

## Configuration

The reports being switched between (such as the bar chart and doughnut chart in the example above) must be in the same row and column and have the same order.

The multi display report controls the visibility of two or more other reports. Meaning the multi display report is a standalone report next to the reports for which the externalId is passed into the display custom parameter.

The reports that are not shown by default must have the deferLoad custom parameter.

## Custom Parameters

| Name | Type | Description |
|------|------|-------------|
| displays | String | A comma-separated list of Reporting Block external IDs. Determines which report icons are shown, and in which order. |
| multiple | Boolean | Allow the user to display more than one report simultaneously. |
