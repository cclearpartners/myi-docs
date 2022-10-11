---
title: Period Filter
description: Filter other reports by named date ranges
---

## Custom Parameters

| Name | Type | Description |
|------|------|-------------|
| periods | String | A comma-separated list of codes, in the order in which they will be displayed in the filter. Example: `periods:QP,QC,QN,M-6,Y-1,YC,M+6,Y+1` |

### Period Codes

MP: Previous month
MC: Current month
MN: Next month
M-{Number}: Goes back the given number of months, starting from today
M+{Number}: Goes forward the given number of months, starting from today
QP: Previous quarter
QC: Current quarter
QN: Next quarter
Q-{Number}: Goes back the given number of quarters, starting from today
Q+{Number}: Goes forward the given number of quarters, starting from today
YP: Previous year
YC: Current year
YN: Next year
YTD: Year to date
Y-{Number}: Goes back the given number of years, starting from today
Y+{Number}: Goes forward the given number of years, starting from today
