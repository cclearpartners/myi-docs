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
| aggregationMode     | Text  | Optional. Determines how fields will be aggregated. See details below. |
| countColumn         | Boolean or Text  | Optional. If set to true, a column will be added showing how many records are in each aggregate. If set to text, it will be used as the title of the column. |

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
