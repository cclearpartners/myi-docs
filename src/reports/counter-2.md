---
title: Counter 2
description: KPI or metric as a single number
---

Displays the number of records in a query. When clicked, displays the records' details in a modal.
To further configure the details displayed in the modal, see the Table Report documentation.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| icon  | Text  | Required. font-awesome classes for the icon to be displayed. | 
| subtitle     | Text  | Shown under the counter. Can be a plain text, a Veeva Message or `$OBJECT_NAME`. If `$OBJECT_NAME` is used or no value is specified, the pluralised name of the list view's main object is displayed | 
| columns | Number | Determines the amount of colums displayed when multiple counters are displayed. If the amount of counters exceeds the amount of colums, the next counter will be moved below. |
| sumBy | Text | The value of this field path will be summed up and displayed as a result in the counter |
| first | Text | The value of this field path of the first record in the dataset that has a value defined for this field path is diplayed as a result in the counter | 
| noDetails | Boolean | If set, the details modal will be hidden |
| highlightFirst | Boolean | If set, the order of displayed elements in the counter will be value first, icon second. By default the icon is shown first.|

## List View Association Support (LVA)
_LVA specific custom parameters: colums_

- To display multiple, unrelated counters in the same report, use List View Associations. There will be one counter shown per List View Association, sorted by the Association's Order field and titled with the Association's Title field.
