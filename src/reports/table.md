---
title: Table
description: Displays data in a table
---

Uses a List View to display data in a table.

When the table is too wide for the screen, arrows indicate the off-screen columns and allow the user to navigate to them.

![Table Off-Screen Table Columns Indicator](/static/img/release-2024R3-table-column-off-screen-indicator.png "Table Off-Screen Table Columns Indicator")


## Configuration

Use the List View Definition's Help Text field to display a help button at the top of the column.

![Table with help buttons](/static/img/report-table-help.png "Table with help buttons")

Use the List View Definitions's Icon field to display an icon instead of a text label. The text label will be displayed in a tooltip when the user clicks on the icon. This is useful for very long labels, or when a table has many columns.

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| filterReset         | Boolean| Optional. Adds a Reset Filters button above the table to clear the table's column filters. |
| filterStyle         | String| Optional. When set to `inline`, List View Definition fields with Filter By are displayed only in the table, instead of at the top of the report. |
| frozenColumn        | String  | Optional. Comma-separated list of column field paths. When the table is bigger than the report it is in and the user scrolls horizontally, these columns will not scroll offscreen. They will remain stuck to the left of the report. This is particularly useful for Account names, for example. |
| highlight           | Boolean  | Optional. Defaults to true. Set to false to hide the row count in the top-right corner of the report. |
| noDataLabel         | String  | Optional. Sets the message displayed when the table is empty. Can be a Veeva Message. Defaults to the `no_data` message. Can be used in reports where the table is in a modal, such as Counter. |
| noHscroll           | Boolean   | Optional. Defaults to false. Set to true to force all columns to fit without horizontal scrolling. |
| pagination          | Number,Boolean | Defaults to 10. Set to false to remove all pagination. Set to a number to change page size. Set to a comma-separated list of numbers to allow the user to choose between multiple page sizes. |
| placeholder         | String | Optional. Text to show when a field is empty. E.g. a dash (-). |
| search              | Boolean | Defaults to false. Set this to true to enable searching the table's contents. | 
| smartlink           | Boolean  | Optional. Defaults to true. When true, if the List View's main object is smartlinkable, the user can click on a row to view the record's page. When false, clicking on the row does not smart link to the individual record. |
| showTotals          | sub,grand,both | Use this in combination with `totalColumns`. sub: Show sub-totals for each group of rows, as defined by the Group By. grand: Show the total at the end of the table. both: Show sub-totals and grand total. Eg. `showTotals:grand;totalColumns:Duration_vod__c;` |
| tabbed              | Boolean   | Optional. When multiple tables are displayed using List View Associations, set this to true to show them in tabs instead of in a vertical list. |
| tableSort           | String  | Optional. Specifies the field path and order to sort the table. Order can be `ASC` or `DESC`. Useful when this is different than what is defined in the List View Definitions. Example: when a List View Association is sorted by Date to get an Account's most recent Call, but the table must be sorted by Account Name: `tableSort:Account_vod__c.Name ASC`.  |
| totalColumns        | String | Use this in combination with `showTotals`. A comma-separated list of fields paths that will be included in total rows. All fields must be numeric. Eg. `showTotals:both;totalColumns:Duration_vod__c,Email_ccp__c.Opened_Count_vod__c;` |

## List View Association Support

### Multiple Tables

To display multiple, unrelated tables in the same report, use List View Associations instead of the Main List View. There will be one table shown per List View Association, sorted by the List View Associations' Order field and titled with the List View Associations' Title field.

Use the tabbed custom parameter on the Reporting Block Layout to lay the tables out in tabs instead of vertically one after the other.

### Enhanced Table

List View Associations can be used in combination with the Main List View to add columns to a single table.

Set the List View Associations' role to OneToOne.

The List View Definitions' Order field determines where they are placed in the table. Each List View Association can add multiple columns.

Make sure to use the appropriate filters, sorting and limit to ensure the correct record is used.

When the List View Association only adds one field, the mode custom parameter can be set on the List View Assocation. Available values are: SUM (for numeric fields) to show the total value of the field across all of the List View Association's results and COUNT to display how many results the List View Association has.

#### Usecases: 

- Show the last or next Call Date, Sent Email Date, Event Attended date, etc
- Count the number of Calls submitted or emails sent.

