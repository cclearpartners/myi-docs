---
title: Record Filter
description: A drop down of records coming from a List View
---

Filters on a list of unique values from a specific field.

The report's Main List View determines which records are taken into account and which field is used in the dropdown.

Use the `$FILTER_FIELDS` or `$FILTER` in the [filters custom parameter](references/custom-parameters-list-view) in another Reporting Block Layout to use the values selected in this filter.

To use this filter explicitly in other Reporting Block Layouts, its name is Object_Name.Field_Name, eg. `Call2_vod__c.Status_vod__c`.

For example, a Reporting Block Layout listening to this filter can use its value like this: `filters:Call2_vod__c/Status_vod__c=$FILTER:Call2_vod__c.Status_vod__c`

## List View Configuration

You must select only one field to display, meaning that the Display checkbox is checked.

To filter on one field but display another (eg. filter by ID but show the Name field):

- add a second field
- uncheck its Display checkbox
- check its Filter By checkbox

Use the filters custom parameter to limit the records that are shown.

## Example

![Record Filter](/static/img/report-record-filter.png "Record Filter")
