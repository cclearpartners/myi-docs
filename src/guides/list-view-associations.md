---
title: "List View Associations"
description: For advanced data and configuration use cases 
date: 2021-01-10T08:15:49.824Z
---

## Usecases

### Data Filtering

A filtering List View Association can be used to limit the results of the main List View in a performant way.

### Report Configuration

For example, the Timeline report uses one List View Association per channel.

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
