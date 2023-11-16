---
title: Reset Filters
description: Resets tab filters to their default values
---

Can be used in combination with tab filters such as Record Filter.

To set the report's label globally, create a Veeva Message with the name `reset_filters`. The Veeva Message can contain the HTML to display an icon. To remove the report's title, set the Title Message Key field to `$NONE`.

To customise a specific report's label, set the `hideHeaderTitle` custom parameter to `true` and put a Veeva Message name in the Title Message Key field.

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| hideHeaderTitle     | Boolean | Defaults to false. When true, a Veeva Message can be set in the Title Message Key field and displayed as the button label. |
