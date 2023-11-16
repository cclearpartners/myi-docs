---
title: Gauge Progress
description: Displays a value in a semi-circular gauge
---

### Configuration

A List View is required.

By default, there is one gauge per record returned by the List View. Clicking on the gauge will display a details table with all of the List View Definitions in the List View.

Multiple records can be summarised into a single gauge by using the mode custom parameter. The details table will then list all records returned by the List View.

The fields used in the max, value and title custom parameters must be present in the list view.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| details             | String| Optional. One of: above,below,left,modal,right. Defaults to modal. Determines where the details table will be displayed. |
| mode                | String| Optional. Can be one of: list,sum. Defaults to list. List shows one gauge bar per record. Sum aggregates all the records into one gauge. | 
| max                 | String,Number| When a number is given, each gauge has a fixed maximum value. When a field path is given, the gauge's maximum is the field's value. | 
| value               | String| Field path to use as the gauge's value. Must be in List View. |
| title               | String| Field path to use as the gauge's title. Must be defined in List View. Optional when mode is sum. |
| smartLink           | Boolean | Optional. Determines if the records in the details table are smartlinked. Defaults to true. |
| percent             | Boolean | Optional. Defaults to false. If set to true, max is set to 100% and the value is converted to a percentage. |
| sector-X-Y           | CSS Color | Optional. Sets gauge color depending on its value. With `sector-0-50:orange;sector-51-100:#ff0000`, the gauge will be orange if the value is between 0 and 50 and red from 51 to 100. |
