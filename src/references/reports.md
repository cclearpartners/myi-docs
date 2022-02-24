---
title: Reports Reference
description: Details of all available standard reports
date: 2021-01-01T00:00:00.000Z
---

## Aggregation Table

[Details](/reports/aggregation-table)

## Counter

[Details](/reports/counter)

## Doughnut Chart

[Details](/reports/doughnut-chart)

## Members

[Details](/reports/members)

## Segment Progress

[Details](/reports/segment-progress)

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