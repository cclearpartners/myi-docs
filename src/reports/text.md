---
title: Text
description: Displays text or an HTML snippet
---

Use this report to display simple messages, such as info about dashboard usage or legally-required text. HTML may be used to style the text, but be careful that all HTML tags are correctly used and closed, otherwise the rest of the dashboard may be impacted.

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| textBody            | String| Can be a Veeva Message name, a framework message or hardcoded text. In each case, HTML is supported. Hardcoded text can contain HTML directly, but for Veeva Messages and framework messages, the HTML must be in the message, not in the custom parameter |
