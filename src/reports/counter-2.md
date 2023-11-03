---
title: Counter 2
description: KPI or metric as a single number
---

Displays a single value derived from a query. When clicked, displays the records' details in a modal.

The value defaults to the count of records returned by the query. Can also be the value from a single record (cf. `first` custom parameter) or a sum (cf. `sumBy` custom parameter).

To display multiple values in the same report, use one List View Association per value instead of a main List View. All custom parameters can also be used in List View Associations.

### Configuration Examples

![Counter](/static/img/report-counter.png "Counter")

`icon:fas fa-pencil;`

![Counter with multiple list view associations](/static/img/report-counter-listviews.png "Counter with multiple list view associations")

In the Reporting Block Layout: `columns:2;`

The icons are set in the List View Associations' Custom Parameters. The subtitles are set in the List View Associations' Title field.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| color | String  | To give the Counter's icon and text a different color, use one of danger, warning or success. Example: `color:danger;` |
| columns | Number | Determines the amount of colums displayed when multiple counters are displayed. If the amount of counters exceeds the amount of colums, the next counter will be moved below. |
| first | Text | The value of this field path of the first record in the dataset that has a value defined for this field path is diplayed as a result in the counter | 
| highlightFirst | Boolean | If set, the order of displayed elements in the counter will be value first, icon second. By default the icon is shown first.|
| icon  | Text  | Required. font-awesome classes for the icon to be displayed. | 
| noDetails | Boolean | If set, the details modal will be hidden |
| subtitle     | Text  | Shown under the counter. Can be a plain text, a Veeva Message or `$OBJECT_NAME`. If `$OBJECT_NAME` is used or no value is specified, the pluralised name of the list view's main object is displayed | 
| sumBy | Text | The value of this field path will be summed up and displayed as a result in the counter |
