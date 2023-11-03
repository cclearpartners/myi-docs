---
title: Table
description: Displays data in a table
---

Uses a List View to display data in a table.

## Configuration

Use the List View Definition's Help Text field to display a help button at the top of the column.

![Table with help buttons](/static/img/report-table-help.png "Table with help buttons")

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| filterReset         | Boolean| Optional. Adds a Reset Filters button above the table to clear the table's column filters. |
| filterStyle         | String| Optional. When set to `inline`, List View Definition fields with Filter By are displayed only in the table, instead of at the top of the report. |
| frozenColumn        | String  | Optional. Comma-separated list of column field paths. When the table is bigger than the report it is in and the user scrolls horizontally, these columns will not scroll offscreen. They will remain stuck to the left of the report. This is particularly useful for Account names, for example. |
| highlight           | Boolean  | Optional. Defaults to true. Set to false to hide the row count in the top-right corner of the report. |
| noHscroll           | Boolean   | Optional. Defaults to false. Set to true to force all columns to fit without horizontal scrolling. |
| pagination          | Number,Boolean | Defaults to 10. Set to false to remove all pagination. Set to a number to change page size. Set to a comma-separated list of numbers to allow the user to choose between multiple page sizes. |
| placeholder         | String | Optional. Text to show when a field is empty. E.g. a dash (-). |
| search              | Boolean | Defaults to false. Set this to true to enable searching the table's contents. | 
| smartlink           | Boolean  | Optional. Defaults to true. When true, if the List View's main object is smartlinkable, the user can click on a row to view the record's page. When false, clicking on the row does not smart link to the individual record. | 
| tabbed              | Boolean   | Optional. When multiple tables are displayed using List View Associations, set this to true to show them in tabs instead of in a vertical list. |

## List View Association Support (LVA)

### Multiple Tables

To display multiple, unrelated tables in the same report, use List View Associations instead of the Main List View. There will be one table shown per List View Association, sorted by the List View Associations' Order field and titled with the List View Associations' Title field.

Use the tabbed custom parameter on the Reporting Block Layout to lay the tables out in tabs instead of vertically one after the other.

### Enhanced Table

List View Associations can be used in combination with the Main List View to add columns to a single table.

Set the List View Associations' role to OneToOne.

The List View Definitions' Order field determines where they are placed in the table. Each List View Association can add multiple columns.

Make sure to use the appropriate filters, sorting and limit to ensure the correct record is used.

When the List View Association only adds one field, it is possible to use the mode custom parameter, which can be set to SUM (for numeric fields) or COUNT.

#### Usecases: 

- Show the last or next Call Date, Sent Email Date, etc
- Count the number of Calls submitted or emails sent.

