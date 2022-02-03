---
title: Reports Reference
description: Details of all available standard reports
date: 2021-01-01T00:00:00.000Z
---

## Account Info Multi-Column

## Aggregation Table

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

## Counter

Displays the number of records in a query. When clicked, displays the records' details in a modal.

Use the `listViews` custom parameter to show more than one counter in the same report.

### Configuration Examples

`counterIconClasses:fas fa-pencil;counterSubtitle:Publications;`

![Counter](/static/img/report-counter.png "Counter")

`listViews:Premium Accounts,Clinical Trials,Recent Calls;counterIconClasses:fas fa-user,fas fa-flask,fas fa-phone;counterSubtitle:premium_accounts,$OBJECT_NAME,Latest Phone Calls;`

![Counter with multiple list views](/static/img/report-counter-listviews.png "Counter with multiple list views")


### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| counterIconClasses  | Text  | Required. font-awesome classes for the icon to be displayed. | 
| counterSubtitle     | Text  | Shown under the counter. Can be a plain text, a Veeva Message or `$OBJECT_NAME`. If `$OBJECT_NAME` is used or no value is specified, the pluralised name of the list view's main object is displayed | 
| listViews           | Text  | Comma-separated list of List View names. The order of the List Views determines the order they are shown in. `counterIconClasses` becomes a comma-separated list. `counterSubtitle` becomes a comma-separated list, with the special token `$OBJECT_NAME` used for the objects' translated and pluralised name. |
| smartlink           | Boolean  | When false, prevents the detail table from smartlinking to the individual record | 

## Doughnut Chart

Uses a List View to create a doughnut.

### List View Definitions

#### Group By

At least one field must have the Group By checkbox checked. If more than one field is a Group By, a dropdown will be displayed so the end user can change how the doughnut's data is grouped.

It is best to group by fields that have a limited amount of different values. Otherwise, the doughnut will contain so many slices that it becomes difficult to read.

#### Filter By

Zero or more fields can have the Filter By checkbox checked. For each field, a dropdown will be displayed to the end user, allowing them to decide which of the field's values to include or exclude from the doughnut.

Fields with a constrained range of values are best suited to be filters. Picklists are typically the best candidates. Values that recur across multiple records can also work well: for example, a list of Accounts might be filtered by Hospital Name.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| categoriesMax       | Number  | Total number of categories that should be shown. Eg. 4 means that the 3 biggest categories will be shown and all remaining categories will be aggregated into one.  |
| highlightsMax       | Number  | Total number of categories to leave in colour. Other categories will be greyed out. Eg. 2 means that the 2 biggest categories will be in colour, while all others will be grey  |
| monochrome          | CSS colour  | All categories will have this colour. Can be combined with highlightsMax or categoriesMax.  |
| smartlink           | Boolean | Optional. When false, prevents the detail table from smartlinking to the individual record | 

### Highlight

In the top-right corner, the end user will see a highlight number. It displays the total amount of records currently being displayed in the doughnut. The user can click on it to view the records' details in a table.

The value of the highlight changes to reflect the currently-applied filters.

### Labels

The labels under the chart are the unique values found in the field currently being grouped by.

By clicking on a label, the end user can view the details of the records that are part of the group.

### Examples


Aggregation: `categoriesMax:3`

![Doughnut Chart with Aggregation](/static/img/release-2021R3-doughnut-aggregation.png "Doughnut Chart Aggregation")

When "Others" is clicked, the detail table shows all the records that have been aggregated into the same category:

![Doughnut Chart with Aggregation](/static/img/release-2021R3-doughnut-aggregation-detail.png "Doughnut Chart Aggregation")

Highlighting: `highlightsMax:1`

![Doughnut Chart with Highlight](/static/img/release-2021R3-doughnut-highlight.png "Doughnut Chart Highlight")

## Members

Displays a list of Accounts linked to the same HCO. Can be used on both HCP and HCO Account dashboards.

Requires a List View based on Account.

### Custom Parameters

| Name        | Type  | Description |
|-------------|-------|-------------|
|text         |String |Optional. Can be a Veeva Message or plain text. Receives the number of HCPs as an argument. When set, this text will be displayed and will open the modal with the table of Accounts.|
|helpText |String |Optional. Veeva Message or plain text to show in tooltip. Displayed in header or in the body after the text.|

## Progress

Shows one or more progress bars.

### Configuration

Create an admin list view. Fields used in the max, value and title custom parameters must be present in the list view.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| mode                | String| Can be one of: list,sum. Defaults to list. List shows one progress bar per record. Sum aggregates all the records into one progress bar. | 
| max                 | String,Number| When a number is given, each progress bar has a fixed maximum value. When a field path is given, the progress's maximum is set to the field's value. | 
| type                | String| Can be one of: segment. Defaults to segment. | 
| value               | String| Field path, as defined in list view. The progress's value is set to the field's value. |
| title               | String| Field path, as defined in list view. Displayed above the record's progress bar. Optional when mode is sum. |

### Examples

Different ways the same data Cycle Plan Channel data may be displayed:

Use `Channel_vod__c` field as the title for each bar, `Actual_vod__c` field as the current value and `Target_vod__c` field as maximum: `value:Actual_vod__c;max:Target_vod__c;title:Channel_vod__c`
![Progress Report with max field path](/static/img/report-progress-max-field.png "Progress Report with max field path")

Set maximum to 5: `value:Actual_vod__c;max:5;title:Channel_vod__c`
![Progress Report with max number](/static/img/report-progress-max-number.png "Progress Report with max number")

Sum all values and maximums into one progress bar: `value:Actual_vod__c;max:Target_vod__c;mode:sum`
![Progress Report with mode = sum](/static/img/report-progress-mode-sum.png "Progress Report with mode = sum")

## Selector Filter

Combines a "selector" dropdown with one or more filter dropdowns. The contents of the filter dropdowns is controlled by the value selected in the "selector" dropdown.

<video width="100%" controls>
  <source src="/static/video/release-2021R4-selector-filter.mov" type="video/mp4">
</video>

### Configuration

Create a list view.

Choose one field (no more and no less) as the Group By field. This field is the controlling selector dropdown.

Optionally, choose other fields as Filter By fields. These will be the filter dropdowns on the right.

## Table

Uses a List View to display data in a table.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| smartlink           | Boolean  | Optional. When false, clicking on the row does not smart link to the individual record | 

## Web Link

Displays a URL.

Configured with Reporting Block Layout custom parameters.

Parameters can be used in the URL to customise it for the current Account or User. This feature requires the Reporting Block Layout to have a List View. The name of each parameter is the path to a field in the List View.

### Configuration Examples

`url:https://google.com;label:Search Engine`

`url:https://corporate.intranet;label:Internal Tool;vpn:true`

`url:https://mysite.com/{Id}/account?page={Account_vod__c.Name};`

### Custom Parameters

| Name  |Type     | Description |
|-------|---------|-------------|
| label | Text    | Optional. The text to display | 
| parameters | Text    | Optional. Comma-separated tokens. A token is $PARAMETER_NAME=$FIELD_PATH.  | 
| url   | Text    | Required. The URL to link to. Parameters must be surrounded by curly braces and be a path to a List View Definition in the List View. Eg. Name or Account_vod__c.Country |
| vpn   | Boolean | Optional. Set to true if the website can only be accessed via VPN. |