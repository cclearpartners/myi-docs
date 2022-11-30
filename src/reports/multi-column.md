---
title: Multi-Column
description: Display the details of a single record
---

The Multi-Column report is a simple way of showing a single record.

Certain fields have special handling. For example, booleans are shown as checkboxes.

## Configuration

### List View

The report must have a List View. It determines which fields are displayed in the report. The report will display only the first result of the query, so use appropriate [filters](/references/custom-parameters-list-view#filters) and [limit](/references/custom-parameters-list-view#limit) if necessary.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| columnCount | number | Defaults to 2. Typically should be between 1 and 4. |
| hideEmptyFields | boolean | Defaults to false. When set to true, fields that have no value will not be displayed at all. Otherwise, the field label is displayed, with no value next to it. |
| vertical | boolean | Defaults to false. When set to true, labels and values are placed above one another, instead of side-by-side. |

## Examples 

## Default 2 Columns

![2 columns](/static/img/report-multi-column-2-column.png "2 columns")

## Vertical, 1 Column

![vertical](/static/img/report-multi-column-vertical.png "vertical")
