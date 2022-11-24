---
title: Picklist Filter
description: A drop down of picklist values
---

Filters on a list of picklist values from a specific field.

The `object` and `field` custom parameters determine which field is used.

Use `$FILTER:ALL` or `$FILTER` in the [filters custom parameter](references/custom-parameters-list-view) in another Reporting Block Layout to use the values selected in this filter.

To use this filter explicitly in other Reporting Block Layouts, its name is Object_Name.Field_Name, eg. `Call2_vod__c.Status_vod__c`.

For example, a Reporting Block Layout listening to this filter can use its value like this: `filters:Call2_vod__c/Other_Field_vod__c=$FILTER:Call2_vod__c.Status_vod__c`

## Example

![Picklist Filter](/static/img/report-picklist-filter.png "Picklist Filter")

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| field         | String| A field API name from the given object. |
| object         | String| An object API name. |
| filterStyle         | String| Defaults to light. Can also be: primary for a darker look. |