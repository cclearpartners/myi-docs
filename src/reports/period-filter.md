---
title: Period Filter
description: Filter other reports by named date ranges
---

This filter allows users to set the dashboard's date range to named, pre-defined ranges. A custom date range picker can optionally be added.

To use the values set by the filter, use the [$START_DATE and $END_DATE](/references/custom-parameters-list-view/#keywords) variables in the filters custom parameter of the Reporting Block Layouts.

## Examples

### Simple

![Period Filter](/static/img/report-period-filter-simple.png "Period Filter")

### With Custom Date Range

![Period Filter](/static/img/report-period-filter-date-range.png "Period Filter")

## Custom Parameters

| Name | Type | Description |
|------|------|-------------|
| addDateRange | Boolean | Defaults to false. When set to true, a custom date range is added next to the period dropdown. |
| periods | String | A comma-separated list of codes, in the order in which they will be displayed in the filter. Example: `periods:QP,QC,QN,M-6,Y-1,YC,M+6,Y+1` |
| name | String | When combined with the DateRangeFilter Report, if both reports have the same name, the DateRangeFilter values will be updated according to the selected period. |

### Period Codes

- MP: Previous month
- MC: Current month
- MN: Next month
- M-{Number}: Goes back the given number of months, starting from today
- M+{Number}: Goes forward the given number of months, starting from today
- QP: Previous quarter
- QC: Current quarter
- QN: Next quarter
- Q-{Number}: Goes back the given number of quarters, starting from today
- Q+{Number}: Goes forward the given number of quarters, starting from today
- YP: Previous year
- YC: Current year
- YN: Next year
- YTD: Year to date
- Y-{Number}: Goes back the given number of years, starting from today
- Y+{Number}: Goes forward the given number of years, starting from today
