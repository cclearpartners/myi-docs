---
title: "Customise your List View-based Report"
description: Learn how to customise a report you've created yourself
date: 2021-01-05T08:15:49.824Z
---

Reports can be customised in two ways: list views and custom parameters.

## List Views

List views are the easiest way to create and modify reports. They can be managed without code by the admin.

A list view is based on an object. It can reference that object's fields, as well as navigate the object's lookups to reference other objects' fields.

Here is an example of a typical listview, on the Call object:

![Listview](/static/img/listview.png "Listview")

The `Call_Date_vod__c`, `Call_Type_vod__c` and `Status_vod__c` are fields on the object.

`Account_vod__c` and `Status_vod__c`, however, are lookups to the `Account` and `User` objects, respectively (as shown in the Reference SObject Name column).

Lots of functionality comes out-of-the-box when using a listview-based report with the Home Page List View report type: changing the data visualization (Table, Doughnut, Counter), grouping, filtering, modals and smart linking.

![Doughnt demo](/static/img/doughnut-demo.gif)

## List View Columns

![Listview column edit](/static/img/listview-column-edit.png "Listview column edit")

### Add/remove columns

Columns may be added or deleted.

### Re-order columns

The Order field changes the order of the columns from left to right in a table.

### Grouping

The Group By option affects how data is visualized. For example, in a doughnut chart, it determines how the doughnut is sliced and what the legends are.

![Doughnut chart](/static/img/doughnut-calls-by-status.png "Calls by status")

When multiple Group By columns are configured, a dropdown is shown. In the above chart, calls are grouped according to the dropdown on the left. If the value is changed to "Call Type", the chart is re-rendered, changing the doughnut slices and the legends:

![Doughnut chart](/static/img/doughnut-calls-by-call-type.png "Calls by call type")

If only one Group By column is selected, no dropdown is shown.

This setting is ignored by tables.

### Filtering

A dropdown is added for each Filter By column to allow the user to select one or more values. Only values that are present in the dataset are displayed in the filter.

![Doughnut chart](/static/img/doughnut-calls-by-call-type-filter.png "Calls by call type filtered")

In this example, the previous chart is filtered on the "Planned" call status, but still grouped by "Call Type".

### Display/hide columns

When Display is checked, that column is displayed in the table view (both in the main view and in the modal). When using a listview with a custom report, it can be useful to retrieve a field for data manipulation purposes, but not display it to the end user.

## Custom Parameters

The Custom Parameters field is free text that accepts a wide range of predefined values.

![Custom Parameters](/static/img/custom-block-custom-parameters.png "Custom Parameters")

There are many standard custom parameters.

The developer will document which custom parameters and values are available for each custom report.

See the Custom Parameters Reference for details of each available custom parameter.
