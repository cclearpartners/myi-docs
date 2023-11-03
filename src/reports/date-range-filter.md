---
title: Date Range Filter
description: A Filter showing a calender on wich the user can select a date range.
---

Filters the data in a tab to within a specific date range.

Use the `$START_DATE` or `$END_DATE` keywords in the [filters custom parameter](references/custom-parameters-list-view) in another Reporting Block Layout to filter on date range.

For example, a Reporting Block Layout can use the dates set by this report like this: `filters:Call2_vod__c/Call_Date_vod__c >= $START_DATE AND Call_Date_vod__c <= $END_DATE`


## List View Configuration

No listview is required for the date range filter.

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| start         | String | A default start date can be set for the filter. If not set, the dashboard's default start date will be used. |
| end         | String | A default end date can be set for the filter. If not set, the dashboard's default start date will be used. |
