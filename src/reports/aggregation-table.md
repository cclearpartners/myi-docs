---
title: Aggregation Table
description: Group data in a table
---

Aggregates records. Users can drill down to the disaggregated records.

### Configuration

Create a List View with at least one Group By field.

To show a column only in the drill down table, uncheck the Display checkbox.

NOTE: Some field types do not have a default aggregation mode, such as strings and picklists. By default, these will not be shown in the aggregation table, even if the Display checkbox is checked. To display them anyway, specify an aggregation mode for the field in the custom parameters, as shown below. Typically, this will be FIRST or LIST.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| aggregationMode     | Text  | Determines how fields will be aggregated. See details below. |
| countColumn         | Boolean or Text  | If set to true, a column will be added showing how many records are in each aggregate. If set to text, it will be used as the title of the column. |
| columnsBy           | Text  | A field path, optionally followed by a unit. Adds columns based on the data in the table. For example, it can display a column per month or per picklist value. DATE and PICKLIST fields are supported. Example: `columnsBy:Status_vod__c`. For DATE fields, a unit of either day, month or year can be added. If none is added, the default is month. Example: `columnsBy:Call_Date_vod__c/year;`. |
| details             | Boolean | Defaults to true. If set to false, there is no drill down table. Example: `details:false;`. |
| groupBy             | Text  | A comma-separated list of field paths. The last field path designates the aggregated columns. All other field paths are grouped. Example: `Category_ccp__c,Key_Message_vod__c.Name`. |
| showTotals          | sub,grand,both | Determines which totals are to be shown in the table. sub: shows totals for sub groups if the groupby table functionality is used. grand: the overall total is shown at the bottom of the table. both: shows both sub and grand. Totals are shown for columnsBy and Record Count fields |
| groupHeader         | If set a group header is added to the table groups |
| groupCollapsable    | If set to true, the table groups will be collapsable. |
| groupCollapsed      | If set the table groups can be collapsed, and will be by default. The table groups will automatically be set collapsable if set. |

#### Aggregation Modes

AVG: Calculates the average. Numeric fields only.
FIRST: Display the value of the first record in the aggregation. This can be misleading, so this should only be used when you are certain that all records will have the same value.
LIST: Displays all values contained in the aggregate. Typically used for fields that cannot be aggregated. Be careful to use this only for fields that will have only a few different values. Otherwise the column can become very long.
MAX: Displays the highest value. Numeric and date fields.
MIN: Displays the lowest value. Numeric and date fields.
SUM: The default for numeric fields.
RANGE: Displays the lowest and highest values of the aggregation. The default for date fields. Can also be used for numeric fields. 

Multiple aggregation modes can be specified by adding the field path. An aggregation mode can be applied to several fields using the ampersand.

`aggregationMode:LIST/Status_vod__c,AVG/Amount_ccp__c&Quantity_vod__c`

A default aggregation mode can be set, but overridden by field-specific aggregation modes:

`aggregationMode:SUM,AVG/Amount_ccp__c`

In this case, SUM will be used for all applicable fields, except for `Amount_ccp__c`, which will show the average.

#### countColumn

`countColumn;aggregationMode:...`: A column will be added, with the default title.
`countColumn:My_Title;aggregationMode:...`: The translated text will be used as the column's title.

#### columnsBy
`columnsBy:Call_Date_vod__c/month`: Adds a new columns per month that is represented in the dataset. The value of the field will be the concattenated value for all records that have a call date in that month.

#### Custom Modal

By default, the modal displayed when a row is clicked is defined by the report's Main List View. To show different columns in the modal, create a List View Association and set Role to `Modal`. The List View Association's List View will then be used to determine the columns shown in the modal.

The modal List View may only contain columns that are also in the main List View. So, to show columns that are not shown in the main table, add them to the main List View and uncheck the Display checkbox.
