---
title: Web Link
description: Displays a URL
---

Displays a URL.

Configured with custom parameters and optionally a List View.

Parameters can be used in the URL to customise it for the current Account or User. This feature requires the Reporting Block Layout to have a List View. The name of each parameter is the path to a field in the List View.

## Configuration Examples

`url:https://google.com;label:Search Engine`

`url:https://corporate.intranet;label:Internal Tool;vpn:true`

`url:https://mysite.com/{Id}/account?page={Account_vod__c.Name};`

## Custom Parameters

| Name  |Type     | Description |
|-------|---------|-------------|
| label | Text    | Optional. The text to display | 
| parameters | Text    | Optional. Comma-separated tokens. A token is $PARAMETER_NAME=$FIELD_PATH.  | 
| url   | Text    | Required. The URL to link to. Parameters must be surrounded by curly braces and be a path to a List View Definition in the List View. Eg. Name or Account_vod__c.Country |
| vpn   | Boolean | Optional. Set to true if the website can only be accessed via VPN. |
