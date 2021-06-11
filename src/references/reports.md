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