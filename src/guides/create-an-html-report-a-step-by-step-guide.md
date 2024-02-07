---
title: "Create an HTML Report: a Step-by-Step Guide"
description: Learn the very first step.
date: 2021-01-01
order: 2021-02-05T09:15:38.889Z
---

The HTML Report delivers the dashboard code to the end user’s device and makes the dashboard available in the orange tab strip at the top of the Veeva app.

<video width="100%" controls>
  <source src="/static/video/dashboard-html-report.mov" type="video/mp4">
</video>

## Setup

To start, switch to the HTML Reports screen with the app switcher in the left corner:

![App Switcher](/static/img/dashboard-html-report-01.png "App Switcher")

Click New in the right corner.

Select a record type for the HTML Report:

![Record Type Selector](/static/img/dashboard-html-report-02.png "Record Type Selector")

The two most common types are Account Reports and Territory Insights. We’ll choose Territory Insights.

Fill in the Report Name field:

![Report Details](/static/img/dashboard-html-report-03.png "Report Details")

This is the name that will be displayed on the user’s device. It cannot be translated.

Depending on your org’s configuration, there may be more fields than the ones shown above. If online reports are enabled, you may see the following fields:

![Online fields](/static/img/dashboard-html-report-04.png "Online fields")

Leave them all empty.

For a user to see the dashboard, the HTML Report record must be shared with them. By default, HTML Report records are shared with everyone, but can be restricted based on profile, using the Profile Name field. However, sharing is often customised, so your org may have different sharing methods. For example, by country:

![Country Sharing](/static/img/dashboard-html-report-05.png "Country Sharing")

After clicking Save, the next step is to upload the ZIP file you received from the dashboard developer. Click the Upload Files button and choose the file.

Once that is uploaded, you can [start creating your own custom dashboard](/guides/create-a-layout-and-tabs-a-step-by-step-guide).

By Default, uploading an Insights+ Zip is enabled in Salesforce Classic. If you want to enable it in Lightning, follow [this](https://crmhelp.veeva.com/doc/Content/CRM_topics/General/Lightning/UsingSalesforceFiles.htm#SyncingSalesforceFilestoMobileDevices) guide.

## Maintenance

You can use the Insights+ Lightning App to, among other things, get an overview of the HTML Reports that may need to be updated. ZIPs that were uploaded more than 6 months ago are listed in a table.
