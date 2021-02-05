---
title: "Add a Data Visualisation to Your Dashboard: a Step-by-Step Guide"
description: Learn how to add data visualisations to your dashboard
order: 2021-01-03T07:30:01.210Z
---
After creating a [HTML Report](/guides/create-an-html-report-a-step-by-step-guide/) and a [Layout with Tabs](/guides/create-a-layout-and-tabs-a-step-by-step-guide/), you are ready to add data visualisations to your dashboard.

Each visualisation has three aspects: what to show, how to show it and where to show it. In other words, the data, the display and the position.

## List View for Data

The MyInsights+ List View object determines the data that will be used in the visualisation.

Choose the List View's main object.

For each field you want to see in the data visualisation or in its drill-down table, add a new List View Definition.

A List View Definition can be a field on the main object.

A List View Definition can also be a field on a lookup object.

Select the lookup field on the main object.

Select the field to display on the lookup object.

Mark at least one field as the group by field, to decide the focus point of the chart.

![Group By Field](/static/img/doughnut-group-by.png "Group By Field")

## Reporting Block Layout for Display and Position

![Edit Reporting Block Layout](/static/img/block-edit.png "Edit Reporting Block Layout")

Each block has two names: one for admins and one for end users.

![Title fields](/static/img/block-title.png "Title fields")

The Title field is the name that is shown in Salesforce. It lets admins identify each block.

The Title Message Key determines the name that will be shown to the end user in the Veeva app. Leave it empty for now. The value of the Title field will be used.

![List View](/static/img/block-listview.png "List View")

Set the Associated List View field to the List View created in the previous section.

Three fields are used to determine position: Row, Column and Order.

![Position fields](/static/img/block-position-fields.png "Position fields")

Row determines the vertical position

Column determines the horizontal position.

Order allows you to put a tall data visualisation next to two short ones, for example. 

![Using Order](/static/img/block-order.png "Using Order")

In the example above, all three data visualisations are on Row 1. The Doughnut is in Column 1. The Counters are both in Column 2. The one on the top has Order 1, the bottom counter has Order 2.

## Display Types

To visualise the same data as a table instead of as a Doughnut, change the Display Type to List View:

![Edit Reporting Block Layout](/static/img/block-edit-table-detail.png "Edit Reporting Block Layout")

Here's what the dashboard looks like now:

![Table](/static/img/block-table.png "Table")