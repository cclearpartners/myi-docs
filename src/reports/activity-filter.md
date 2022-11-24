---
title: Activity Filter
description: Toggle between activities belonging to the current user and all activities
---

When set to "My Activities", only records belonging to the user are shown.

Use `$ACTIVITY` in the [filters custom parameter](references/custom-parameters-list-view) in other Reporting Block Layouts in the same tab to filter queries accordingly.

For example, a Reporting Block Layout can listen to the activity filter like this: `filters:Call2_vod__c/OwnerId=$ACTIVITY`

## Example

![Activity Filter](/static/img/report-activity-filter.png "Activity Filter")

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| activity         | String| Must be set at tab level. Can be mine or all. Sets the initial value of the filter. |
| allLabel         | String| Optional. A Veeva Message or text for the All Activity option. |
| myLabel         | String| Optional. A Veeva Message or text for the My Activity option. |
