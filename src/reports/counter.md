---
title: Counter
description: KPI or metric as a single number
---

Displays a single value derived from a query. When clicked, displays the records' details in a modal.

The value defaults to the count of records returned by the query. Can also be the value from a single record (cf. `first` custom parameter) or a sum (cf. `sumBy` custom parameter).

Use List View Associations instead of a main List View to put multiple values in a single report. All custom parameters can also be used in List View Associations.

### Configuration Examples

`icon:fas fa-pencil;subtitle:Publications;`

![Counter](/static/img/report-counter.png "Counter")

`columns:2;`

![Counter with multiple list view associations](/static/img/report-counter-listviews.png "Counter with multiple list view associations")


### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| color | String  | To give the Counter's icon and text a different color, use one of danger, warning or success. Example: `color:danger;` |
| columns | Number  | When using multiple LVA associations, this determines how many counters are shown per row in the report. Defaults to 1. |
| first | String  | Takes the first record in the query and displays the value of the field. Example: `first:Status_vod__c;` |
| icon  | Text  | Required. font-awesome classes for the icon to be displayed. | 
| noDetails | Boolean | When the modal is clicked, no modal is shown. |
| smartlink           | Boolean  | When false, prevents the detail table from smartlinking to the individual record | 
| subtitle     | Text  | Shown under the counter. Can be a plain text, a Veeva Message or `$OBJECT_NAME`. If `$OBJECT_NAME` is used or no value is specified, the pluralised name of the list view's main object is displayed | 
| sumBy | Text  | The sum of the values in the query for the given field path. Example: `sumBy:Amount_vod__c`. |