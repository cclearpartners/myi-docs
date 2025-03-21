---
title: Multi-Column
description: Display the details of a single record
---

The Multi-Column report is a simple way of showing a single record.

Certain fields have special handling. For example, booleans are shown as checkboxes.

## Configuration

### List View

The report must have a List View. It determines which fields are displayed in the report. The report will display only the first result of the query, so use the sort field, appropriate [filters](/references/custom-parameters-list-view#filters) and [limit](/references/custom-parameters-list-view#limit) if necessary.

The Icon field of the List View Definitions can be used to display an icon alongside the text label. The icon classes from [Font Awesome](https://fontawesome.com/v5/search) must be used. Example: `far fa-envelope`. To use an icon instead of a text label, set the List View Definition's Label field to `$NONE`.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| columnCount | Number | Defaults to 2. Typically should be between 1 and 4. |
| format | List | Used to alter how a field is displayed. It is a comma-separated list of field path and type pairs, separated by an equals sign. Eg. `format:Field_1=boolean,Lookup_Field.Field_2=boolean`. Currently supports displaying Numbers as Booleans, meaning that if it is a 1, it will be shown as a checked checkbox and any other value will be shown as an empty checkbox. |
| hideEmptyFields | Boolean | Defaults to false. When set to true, fields that have no value will not be displayed at all. Otherwise, the field label is displayed, with no value next to it. |
| labelsExclude | List | Comma-separated list of field paths. The labels for these field paths will not be displayed. |
| labelsInclude | List | Comma-separated list of field paths. Only the labels for these field paths will be displayed. |
| listViews | List | Comma-separated list of List View names. The order of the List Views determines the order they are shown in. Allows you to show multiple datasets in the same report. | 
| noDataLabel | String | A Veeva Message or text that will be displayed when there is no data to display. |
| mode | has-one,SUM | Reduces the multi column element to 1 column. Specified per object: `mode:Sent_Email_vod__c=SUM,Product_vod__c=has-one`. Data shown depends on selected mode. **has-one**:  shows true or false depending on whether results are available for the given object dataset. **SUM**: shows the sum of the values of the field for all records in the dataset. There must only be one field. Field must be numeric. |
| recordDirection | String | Defaults to vertical. Can be set to horizontal. Only relevant when displaying more than one record. |
| theme | String | Optional. When displaying more than one record, can be set to `multiple` so that each record appears to be a separate report. |
| vertical | Boolean | Defaults to false. When set to true, labels and values are placed above one another, instead of side-by-side. |

## Examples

## Default 2 Columns

![2 columns](/static/img/report-multi-column-2-column.png "2 columns")

## Vertical, 1 Column

![vertical](/static/img/report-multi-column-vertical.png "vertical")
