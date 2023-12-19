---
title: Layout migration tool
description: A short guid on how layout migration works and how to use it.
date: 2023-12-19T00:00:00.000Z
order: 1
---

# Layout Migration (Tool)

The Layout migration tool can be used to copy/move Insights+ layouts within or between Salesforce Orgs.

## The Tool
The tool itself can be accessed from 3 locations:
| Location | Use |
|----------|-----|
| Insights+ App | Import |
| Insights+ Layout List | Import |
| Insights+ Layout Detail View | Export/Replace |
|----------|-----|

### Export
An Insights+ Layout can easily be exported by clicking on the 'Export'-button on top of the Insights+ Layout Detail page.
Doing this will will create a JSON file that is automatically attached to the exported layout. 
This JSON file can be downloaded and used as the input file for an Insights+ Layout import.

![Export Layout Insights+ Layout Detail](/static/img/Export-Replace-Layout-List.png "Export Layout Insights+ Layout Detail")

### Import
Importing an Insights+ Layout is accessible in 3 ways but is very simmilar each time. First, via the Insights+ App, on the right side there is a form that can be used to import a layout.

![Insights+ App Layout Import](/static/img/import-export-insights.png "Insights+ App Layout Import")

While importing, additional options can be selected:
| Option | Effect |
|-------|--------|
| Select HTML Report | |
| Select Insights+ Layout | |
| Check delete box | |

The second way of importing an Insights+ Layout is by clicking 'Import Layout' at the top of the Insights+ Layout List page. This will open the same form as described in the first import options.
The third way is to go to the detail page of the Insights+ Layout of you want to replace, and click 'Replace' at the top right. This will show you the layout import form but some of the fields will be prefilled. 



