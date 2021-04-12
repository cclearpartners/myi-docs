---
layout: guide
title: Releases
path: releases
---

## MyInsights+ 2020 R1

__Release date: December 2020__

This release includes 3 new features and some bugfixes.

### Documentation

Extensive documentation has been created that guides the users through the development of a MyInsights+ report. This documentation is an in-depth manual that helps you to create HTML Reports, Layouts, Tabs, reports and listviews. Translation and custom parameter references are also provided.

Note that this documentation is not final and will be adapted/extended with each update on the framework. Release version will be indicated.

### Real Names for Layouts, Tabs and Blocks

When creating a new layout, tab or block, there is no longer an auto-number generated in the name field. This allows you to easily detect in which layout, tab or block you are working without having to keep track of auto-assigned numbers. 

Existing records still have their auto-number name, these can be manually updated. In the screenshots you can see where the real names are shown, as well as a record with an auto-number name, for comparison.

![Layout](/static/img/release-2020R1-real-names-layouts.png "Layouts")
![Tabs](/static/img/release-2020R1-real-names-tabs.png "Tabs")
![Reports](/static/img/release-2020R1-real-names-reports.png "Reports")

### Removal of Unnecessary Buttons from Record Pages

The following buttons have been hidden from record pages: 
- Receive Alerts
- Change Record Type
- Change Owner
- Printable View
- Sharing
- Submit for Approving

This results in a cleaner layout which allows the admin to easily navigate and find the features needed.

![Reports](/static/img/release-2020R1-button-clean-up.png "Reports")

### Bugfixes

-	Edit buttons are visible again on Layout, Listviews and Listview definitions.
- When a List View Definition’s SObject Field's Field Type is 'REFERENCE', the reference fields (Reference SObject Name and Reference SObject Field) are required.
- When a List View Definition's SObject Field is changed from a field of type 'REFERENCE' to a field of another type, the values are cleared from the Reference SObject Name and Reference SObject Field fields.
