---
title: Reports Reference
description: Details of all available standard reports
date: 2021-01-01T00:00:00.000Z
---

## Counter

Displays the number of records in a query. When clicked, displays the records' details in a modal.

### Configuration Examples

`counterIconClasses:fas fa-pencil;counterSubtitle:My Subtitle`

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| counterIconClasses  | Text  | Optional. font-awesome classes. | 
| counterSubtitle     | Text  | Optional. Shown under the counter. If not specified, the pluralised name of the list view's main object is displayed | 
| smartlink           | Boolean  | Optional. When false, prevents the detail table from smartlinking to the individual record | 

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
| smartlink           | Boolean  | Optional. When false, prevents the detail table from smartlinking to the individual record | 

### Highlight

In the top-right corner, the end user will see a highlight number. It displays the total amount of records currently being displayed in the doughnut. The user can click on it to view the records' details in a table.

The value of the highlight changes to reflect the currently-applied filters.

### Labels

The labels under the chart are the unique values found in the field currently being grouped by.

By clicking on a label, the end user can view the details of the records that are part of the group.

## Table

Uses a List View to display data in a table.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| smartlink           | Boolean  | Optional. When false, clicking on the row does not smart link to the individual record | 

## Aggregation Table

Table that will display one row per aggregated value based on the Group By field.

When the Group By value is clicked a modal will be opened that shows the detailed values of the records that are part of the group.

### List View Definitions

#### Group By

One field must have the Group By checkbox checked. All other fields will be rolled up based on that field.

### Aggragations 

| Type           | Aggregation | Description                                  |
|----------------|-------------|----------------------------------------------|
| Number, Double | Sum         | The sum of the values will be shown.         |
| Date, DateTime | Range       | The range between the dates will be shown.   |
| String         | First       | The value of the first String will be shown. |


## Web Link

Displays a URL.

Configured with Reporting Block Layout custom parameters.

### Configuration Examples

`url:https://google.com;label:Search Engine`

`url:https://corporate.intranet;label:Internal Tool;vpn:true`

### Custom Parameters

| Name  |Type     | Description |
|-------|---------|-------------|
| label | Text    | Optional. The text to display | 
| url   | Text    | Required. The URL to link to  |
| vpn   | Boolean | Optional. Set to true if the website can only be accessed via VPN. |