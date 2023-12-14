---
title: Dashboard Configuration
description: Details of all available standard dashboard fields and custom parameters
date: 2021-01-03T00:00:00.000Z
order: 3
---

## Status

## Default Time Filter

To use the dates from the user's Cycle Plan check the Use Cycle Plan Dates checkbox.

To set start and end dates of data in the dashboard independently of the Cycle Plan, use the Previous Months and Next Months fields.

In both cases, these are initial values. To enable the user to change the date range of the dashboard's data, add the [Period Filter](/reports/period-filter) to the dashboard.

Previous Months and Next Months accept a range of values:

- a number indicates how many months to go forward or backward.
- $TODAY, $LAST_N_DAYS, $LAST_N_MONTHS, $LAST_N_QUARTERS, $NEXT_N_DAYS, $NEXT_N_MONTHS, $NEXT_N_QUARTERS, $NEXT_N_YEARS, $START_OF_YEAR, $START_OF_LAST_YEAR, $TODAY. These are used in the same way as in the [filters custom parameter](/references/custom-parameters-list-view#filters).

## Custom Parameters

Dashboard-level custom parameters are automatically copied to each report. They allow you to set a default configuration for all reports, while retaining the ability to override that configuration for a specific report.

### useMySetupProductsOnly

Signals that reports in this dashboard should only query for Products configured in the user's My Setup Products.

The value is a comma-separated list of countries to which this custom parameter applies.

Example: `useMySetupProductsOnly:US,FR,DE`
