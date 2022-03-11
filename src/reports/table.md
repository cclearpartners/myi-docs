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
| frozenColumn        | String  | Optional. The field path of a column. When the table is bigger than the report it is in and the user scrolls horizontally, this column will not scroll offscreen. It will remain stuck to the left of the report. This is particularly useful for Account names, for example. |
| highlight           | Boolean  | Optional. Defaults to true. Set to false to hide the row count in the top-right corner of the report. |
| pagination          | Number,Boolean | Defaults to 10. Set to false to remove all pagination. Set to a number to change page size. |
| search              | Boolean | Defaults to false. Set this to true to enable searching the table's contents. | 
| smartlink           | Boolean  | Optional. Defaults to true. When true, if the List View's main object is smartlinkable, the user can click on a row to view the record's page. When false, clicking on the row does not smart link to the individual record. | 

