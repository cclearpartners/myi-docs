---
title: Gauge Progress
description: Value displayed in a gauge
---

### Configuration

Create an admin list view. Fields used in the max, value and title custom parameters must be present in the list view.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| details             | String| One of: above,below,left,modal,right. Defaults to modal. Determines where the details table will be displayed. |
| mode                | String| Can be one of: list,sum. Defaults to list. List shows one gauge bar per record. Sum aggregates all the records into one gauge. | 
| max                 | String,Number| When a number is given, each gauge has a fixed maximum value. When a field path is given, the gauge's maximum is set to the field's value. | 
| value               | String| Field path, as defined in list view. The gauge's value is set to the field's value. |
| title               | String| Field path, as defined in list view. Displayed above the record's gauge. Optional when mode is sum. |
| smartLink           | Boolean | Passed into the details table element, determines if the records in the table are smartlinked. |
| percent             | Boolean | If set, the value shown in the gauge's highlight will be a percentage. Max will be set to 100. |
| sector-..           | String | Colors can be defined for sectors within the gauge, i.e. sector-0-50="orange" will paint the gauge orange if the value is between 0 and 50. |
