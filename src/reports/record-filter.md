---
title: Record Filter
description: A drop down of records coming from a List View
---

Filters on a list of unique values from a specific field.

The report's Main List View determines which records are taken into account and which field is used in the dropdown.

Use the `$FILTER:ALL` or `$FILTER` in the [filters custom parameter](references/custom-parameters-list-view) in another Reporting Block Layout to use the values selected in this filter.

To use this filter explicitly in other Reporting Block Layouts, its name is Object_Name.Field_Name, eg. `Call2_vod__c.Status_vod__c`.

For example, a Reporting Block Layout listening to this filter can use its value like this: `filters:Call2_vod__c/Status_vod__c=$FILTER:Call2_vod__c.Status_vod__c`

## Example

![Record Filter](/static/img/report-record-filter.png "Record Filter")

## List View Configuration

You must select only one field to display, meaning that the Display checkbox is checked.

To filter on one field but display another (eg. filter by ID but show the Name field):

- make sure the first field's Filter By checkbox is unchecked and its Display checkbox is checked
- add a second field
- uncheck its Display checkbox
- check its Filter By checkbox

Use the filters custom parameter to limit the records that are shown.

When using the search custom parameter, to enable users to free text search on fields other than the display field, add them to the List View, with both Display and Filter By checkboxes unchecked.

## Title Configuration

By default, the filter's title is the name of the field being displayed. To set a different title, fill in the List View Definition's Label field.

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| allOption           | Boolean,String| When combined with `multiple:false`, adds an "All" option to the dropdown. Can be given a Veeva Message to customise the label. Eg. `allOption;multiple:false` or `allOption:My_Veeva_Message;multiple:false;` |
| allOptionSelected   | Boolean| When using allOption, this visually sets "All" as selected by default. Eg. `allOption;allOptionSelected;multiple:false;` |
| emitMultipleValues  | Boolean| Use this when `multiple` is false and the filter contains can contain values that may lead to parsing errors. Eg. `multiple:false;emitMultipleValues`. |
| filterStyle         | String| Defaults to light. Can also be: primary for a darker look. |
| multiple            | Boolean | Defaults to true. When set to false, only one option can be selected. |
| noneOption      | Boolean,String    | Forces the filter to display an "empty" option. Can also be given a Veeva Message to use as the label. Otherwise, defaults to "None". |
| search         | Boolean| Optional. Adds a search box within the dropdown. |
| showSelectionsInTitle | Number | In a multiple select filter, the title will show the name of up to the given number of selected values. When more values or no values are selected, the standard title is displayed. Eg. showSelectionsInTitle:2; |
