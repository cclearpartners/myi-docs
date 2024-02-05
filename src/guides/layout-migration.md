---
title: Layout migration tool
description: How to move layouts between orgs
date: 2023-12-19T00:00:00.000Z
order: 1
---

The Layout migration tool can be used to copy/move Insights+ layouts within or between Salesforce Orgs.

## The Tool

The tool itself can be accessed from 3 locations:

| Location | Use |
|----------|-----|
| Insights+ App | Import |
| Insights+ Layout List | Import |
| Insights+ Layout Detail View | Export/Replace |

### Export

An Insights+ Layout can easily be exported by clicking on the 'Export'-button on top of the Insights+ Layout Detail page. This attaches a JSON file to the layout. This JSON file can be downloaded and used as the input file for an Insights+ Layout import.

![Export Layout Insights+ Layout Detail](/static/img/layout-migration-layout-buttons.png "Export Layout Insights+ Layout Detail")

### Import
Importing an Insights+ Layout is accessible in 3 ways but is very similar each time. 
First, via the Insights+ App, on the right side there is a form that can be used to import a layout.

![Insights+ App Layout Import](/static/img/import-export-insights.png "Insights+ App Layout Import")

While importing, additional options can be selected:

| Option | Effect |
|-------|--------|
| (Optional) Select HTML Report | Limits the options in the Insights+ Layout selection box and makes sure the imported layout is immediately attached to the selected HTML Report. If an HTML Report is selected, the layout will not be set to active. Instead it will remain in the 'In Development' state. If an Insights+ Layout is imported without selecting an HTML report, the status is immediately set to 'Active' |
| (Optional) Select Insights+ Layout | When selected, the layout is replaced by the imported layout. The HTML Report currently attached to the selected Layout is set in the HTML Report dropdown. |
| (Optional) Delete Layout | If this checkbox is checked, the selected Insights+ Layout in the form will be removed after the import and the new Insights+ Layout will automatically become 'Active'. Otherwise, the import will create a new Layout instead of replacing an existing one.  |

The second way of importing an Insights+ Layout is by clicking 'Import Layout' at the top of the Insights+ Layout List page. This will open the same form as described above.

The third way is to go to the detail page of the Insights+ Layout of you want to replace, and click 'Replace' at the top right. This will show you the layout import form with HTML-Report and Insights+ Layout selection pre-filled. 

**NOTE**: Depending on the selected options, the administrator may have to take additional actions like activating the newly imported Insights+ Layout and de-activating or deleting the old Insights+ Layout.

When the import succeeds, the admin can have look at the Insights+ Layout by clicking the 'View Layout' button that appeared at the bottom of the form. 
