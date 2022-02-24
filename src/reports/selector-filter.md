---
title: Selector Filter
description: Controls a series of filters from a single drop dropdown
---

Combines a "selector" dropdown with one or more filter dropdowns. The contents of the filter dropdowns is controlled by the value selected in the "selector" dropdown.

<video width="100%" controls>
  <source src="/static/video/release-2021R4-selector-filter.mov" type="video/mp4">
</video>

### Configuration

Create a list view.

Choose one field (no more and no less) as the Group By field. This field is the controlling dropdown.

Optionally, choose other fields as Filter By fields. These will be the filter dropdowns on the right.

When the controlling dropdown changes, the values in the Filter By dropdowns will change to reflect the records that have been filtered by the controlling dropdown.

With some custom development, other reports on the dashboard can change when the controlling and/or Filter By dropdowns change, as demonstrated in the video above.
