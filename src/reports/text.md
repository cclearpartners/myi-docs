---
title: Text
description: Displays text or an HTML snippet
---

Use this report to display simple messages, such as info about dashboard usage or legally-required text, or more complex data with templates. HTML may be used to style the text, but be careful that all HTML tags are correctly used and closed, otherwise the rest of the dashboard may be impacted.

## Templating

The template can be written into the `textBody` custom parameter or in a Veeva Message. It may contain HTML. It has access to data in the Reporting Block Layout’s List View by using curly braces around a field path.

Example:

`textBody:The last email was sent on <i>{Email_Sent_Date}</i> to {Account_vod__c.Name};`

When using a Veeva Message, the textBody custom parameter is the name of the Veeva Message: `textBody:My_Message;`.

## Custom Parameters

| Name                | Type   | Description |
|---------------------|--------|-------------|
| contentVertical     | string | Can be center or top. Defaults to top. |
| textBody            | String | Can be a Veeva Message name, a template or hardcoded text. In each case, HTML is supported. Hardcoded text can contain HTML directly. For Veeva Messages, the HTML must be in the message, not in the custom parameter |
