---
title: Use Insights+ Dashboards in Lightning
description: A troubleshooting guide
date: 2022-03-02T07:09:45.569Z
---
When setting up Insights+ dashboards in Lightning, there are a few things that can go wrong. Here are solutions for some of them.

* Enable Lightning Access for user. See [how can You can assign the 'Lightning Experience User' permission to a set of users](https://salesforce.stackexchange.com/questions/136083/how-can-you-can-assign-the-lightning-experience-user-permission-to-a-set-of-us/136084)
* Verify that users have access to MyInsightsService Apex class. This should be provided in the Insights+ permission sets.
* The HTML Report ZIP must be from November 2021 or later
* The HTML Report's platform must be Lightning

  ![HTML Report Platform Edit View](/static/img/screenshot-2022-03-02-at-08.25.26.png "HTML Report Platform Edit View")

See [Veeva's documentation](https://crmhelp.veeva.com/doc/Content/CRM_topics/MyInsights/MyInsightsAdvFunct/ViewLightning.htm) for all details.