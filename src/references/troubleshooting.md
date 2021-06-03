---
title: Troubleshooting
description: Tips to resolve common issues
date: 2021-01-03T00:00:00.000Z
---

Here are steps admins can take before asking the developers for help.

## No data appears in the report

This might be caused by VMOC misconfiguration, especially if the report has data online but not offline. There are two ways to check this.

### In Salesforce

Make sure that VMOCs are configured for the relevant objects and that there where clauses allow the required records to be synced.

### In the Veeva App

Check the iPad's local database to see if any records are synced. From the Home screen, click on More in the bottom-right corner.

![Home](/static/img/troubleshooting-no_data-home.png "Home")

Click on Options:

![More](/static/img/troubleshooting-no_data-more.png "More")

Click on Database:

![Options](/static/img/troubleshooting-no_data-options.png "Options")

Here you can see how many records there are of each object:

![Database](/static/img/troubleshooting-no_data-database.png "Database")

If there are none, it might mean the object is not being synced or the VMOC's where clause is preventing them from being synced.
