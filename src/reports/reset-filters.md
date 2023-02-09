---
title: Reset Filters
description: Resets tab filters to their default values
---

Can be used in combination with tab filters such as Record Filter.

To customise the report's label globally, you can create a Veeva Message with the name `reset_filters`.

To customise a specific report's label, set the `hideHeaderTitle` custom parameter to `true` and put a Veeva Message name in the Title Message Key field.

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| hideHeaderTitle     | Boolean | Defaults to false. When true, a Veeva Message can be set in the Title Message Key field and displayed as the button label. |
