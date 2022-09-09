---
title: Doughnut Chart
description: Grouped data in a circular chart
---

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
| details             | modal/left/right  | Default: modal. Position of detail table. modal is in a popup. left and right make the table always visible on either side of the doughnut. The table is filtered when the doughnut or a legend is clicked. |
| highlight           | true/false/center/both | Default: true. true puts the highlight is displayed in the report's top right corner. center moves the highlight to the middle of the doughnut. both puts the highlight in the center and a record count in the top right corner. false removes the highlight completely. |
| highlightCats       | String | A comma-separated list of the categories to highlight. Other categories will be grey. Eg. when grouping on Call Status, highlight only submitted and saved calls: `highlightCats:Submitted_vod,Saved_vod`. When grouping on a checkbox field, you can use true or false: `highlightCats:true`. |
| highlightsMax       | Number  | Total number of categories to leave in colour. Other categories will be greyed out. Eg. 2 means that the 2 biggest categories will be in colour, while all others will be grey  |
| legendLabels        | String | Changes the text displayed in the chart's legend. Useful when grouping on a boolean field, for example. It's a comma-separated list of `value=label` pairs, where `label` can be a Veeva Message or hardcoded text. `value` can be a picklist value API name, a boolean, a string or `$EMPTY`. Eg. `true=Yes,false=No,$EMPTY=No Value`. |
| monochrome          | CSS colour  | All categories will have this colour. Can be combined with highlightsMax or categoriesMax. |
| noHscroll           | Boolean   | Optional. Defaults to false. Set to true to force all columns of the modal table to fit without horizontal scrolling. |
| percent             | Boolean | When true, the doughnuts labels will be shown as percentages instead of a total |
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

