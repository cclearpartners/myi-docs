---
title: Counter
description: KPI or metric as a single number
---

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
| icon  | Text  | Required. font-awesome classes for the icon to be displayed. | 
| subtitle     | Text  | Shown under the counter. Can be a plain text, a Veeva Message or `$OBJECT_NAME`. If `$OBJECT_NAME` is used or no value is specified, the pluralised name of the list view's main object is displayed | 
| listViews           | Text  | Comma-separated list of List View names. The order of the List Views determines the order they are shown in. `icon` becomes a comma-separated list. `subtitle` becomes a comma-separated list, with the special token `$OBJECT_NAME` used for the objects' translated and pluralised name. |
| smartlink           | Boolean  | When false, prevents the detail table from smartlinking to the individual record | 

