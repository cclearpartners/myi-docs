---
title: Segment Progress
description: Values in one or more progress bars
---

Shows one or more progress bars.

### Configuration

Create an admin list view. Fields used in the max, value and title custom parameters must be present in the list view.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| details             | String| One of: above,below,left,modal,right. Defaults to modal. Determines where the details table will be displayed. |
| mode                | String| Can be one of: list,sum. Defaults to list. List shows one progress bar per record. Sum aggregates all the records into one progress bar. | 
| max                 | String,Number| When a number is given, each progress bar has a fixed maximum value. When a field path is given, the progress's maximum is set to the field's value. | 
| type                | String| Can be one of: segment. Defaults to segment. | 
| value               | String| Field path, as defined in list view. The progress's value is set to the field's value. |
| title               | String| Field path, as defined in list view. Displayed above the record's progress bar. Optional when mode is sum. |
| smartLink           | Boolean | Passed into the details table element, determines if the records in the table are smartlinked. |

### Examples

Different ways the same data Cycle Plan Channel data may be displayed:

Use `Channel_vod__c` field as the title for each bar, `Actual_vod__c` field as the current value and `Target_vod__c` field as maximum: `value:Actual_vod__c;max:Target_vod__c;title:Channel_vod__c`
![Progress Report with max field path](/static/img/report-progress-max-field.png "Progress Report with max field path")

Set maximum to 5: `value:Actual_vod__c;max:5;title:Channel_vod__c`
![Progress Report with max number](/static/img/report-progress-max-number.png "Progress Report with max number")

Sum all values and maximums into one progress bar: `value:Actual_vod__c;max:Target_vod__c;mode:sum`
![Progress Report with mode = sum](/static/img/report-progress-mode-sum.png "Progress Report with mode = sum")
