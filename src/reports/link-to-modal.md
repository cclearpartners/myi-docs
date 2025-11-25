---
title: Link to Modal
description: Displays a link to a modal displaying a table
---

Displays a link. When the user clicks on it, a table is displayed in a modal.

![Link to Modal link](/static/img/report-link-to-modal-link.png "Link to Modal link")

![Link to Modal modal](/static/img/report-link-to-modal-modal.png "Link to Modal modal")

This is especially useful to create composite reports with the [cellStyle custom parameter](/references/custom-parameters#cellstyle). For example, display details from the last call in a Multi-Column report and underneath add a Link to Modal report to display other calls. In the example below, there are two different reports that look like one report: the Interactions report and the Link to Modal report.

![Link to Modal example](/static/img/report-link-to-modal-example.png "Link to Modal example")

## Configuration

Use a List View to choose the modal table's data and columns.

## Custom Parameters

In addition to those below, all [Table custom parameters](/reports/table#custom-parameters) can be used.

| Name | Type  | Description |
|------|-------|-------------|
| analytics | boolean | Track when the modal is opened. The Action is "Link to Modal". The Action Detail is translated value of the `text` custom parameter. |
| contentHorizontal | string | Can be right or left. Defaults to left. |
| contentVertical | string | Can be center or top. Defaults to top. |
| text | string | The link's text. Can be a Veeva Message or hardcoded. |
