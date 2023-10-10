---
title: "List View Associations"
description: For advanced data and configuration use cases 
date: 2021-01-10T08:15:49.824Z
---

## Usecases

### Count Records in a Query Resultset

Have just one List View Definition in the List View. Set its Order to specify where it appears in the table.

Custom parameters:

- role: OneToOne
- mode: COUNT

### Sum up Fields in a Query Resultset

Have just one List View Definition in the List View, of a numeric type such as Number or Double. Set its Order to specify where it appears in the table.

Custom parameters:

- role: OneToOne
- mode: SUM

### Display the Date of the latest Call or Sent Email

In the Date List View Definition, make sure to sort Descending.

Join Field: Account_vod__c (for a Call or Sent Email)

Custom parameters:

- limit: 1
- role: OneToOne

### Data Filtering

A filtering List View Association can be used to limit the results of the main List View in a performant way.

### Add Channels to a Timeline Report

The [Timeline report](/reports/timeline) uses one List View Association per channel.

### Add values to a Counter

The Counter report(/reports/counter-2) can use List View Associations to display multiple values.

## Custom Parameter Inheritance

In descending order of priority:

- List View Association
- List View Associaton's List View
- Reporting Block Layout
- Tab
- Dashboard

Note: limit and requiredLookups custom parameters set on the Reporting Block Layout are NOT inherited by the List View Association.

## Custom Parameters

| Name | Type | Description |
|------|------|-------------|
| mode | String | Optional. Can be: COUNT (display the number of results, in conjuction with role:OneToOne) |
| role | String | If the Join Field is filled in, it must be one of: Filtering, OneToMany or OneToOne. Otherwise, can be left empty. |
