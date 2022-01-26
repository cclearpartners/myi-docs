---
title: Reports Reference
description: Details of all available standard reports
date: 2021-01-01T00:00:00.000Z
---

## Account Info Multi-Column



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

## Table

Uses a List View to display data in a table.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| smartlink           | Boolean  | Optional. When false, clicking on the row does not smart link to the individual record | 

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