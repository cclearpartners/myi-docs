---
title: Boolean Filter
description: A drop down enabling you to select true/false/all.
---

Filters on a specific boolean field.

The report's custom parameters determine which field is to be filtered on.

Use the `$FILTER:ALL` or `$FILTER` in the [filters custom parameter](references/custom-parameters-list-view) in another Reporting Block Layout to use the values selected in this filter.

To use this filter explicitly in other Reporting Block Layouts, its name is Object_Name.Field_Name, eg. `Call2_vod__c.Submitted_vod__c`.

For example, a Reporting Block Layout listening to this filter can use its value like this: `filters:Call2_vod__c/Submitted_vod__c=$FILTER:Call2_vod__c.Submitted_vod__c`


## List View Configuration

No listview is required for the boolean filter. The object and field are determined by the corresponding custom parameters.

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| object         | String| Required. Object API name on wich the filter should apply |
| field         | String| Field name on wich the filter should apply |
