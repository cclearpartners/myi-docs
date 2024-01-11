---
title: "Create a Layout and Tabs: a Step-by-Step Guide"
description: Learn how to create your dashboard's overall structure
date: 2021-01-02
---
## Layout

The Layout is the container for the entire dashboard.

To view or create your Layouts, you can use the App Launcher or add a Insights+ Layouts tab to your navigation bar:

![App Switcher](/static/img/layout-01.png "App Switcher")

On the Layout page, use the New button in the top-right to start a new dashboard.

### Basic Configuration

Set the Status to Active.

![Status](/static/img/layout-02.png "Status")

Set the HTML Report to the record created in [Create a HTML Record](/static/img/01-create-a-html-record.html). Make sure that the Record Type field matches the HTML Report’s record type.

![HTML Report](/static/img/layout-03.png "HTML Report")

The Description can give a brief idea of what the dashboard is for.

![Description](/static/img/layout-04.png "Description")

This is enough to get started.

### Advanced Configuration

The following fields are not necessary for every Layout.

#### Sharing

The Country Code and Available Profiles fields should only be used if your org’s HTML Report sharing settings do not already support this functionality. This is because these fields will not prevent the HTML Report record’s name from being shown in the orange tab strip. They only help determine which layout will be shown for that HTML Report. If none is found, the user will see an error.

![Sharing](/static/img/layout-05.png "Sharing")

**Country Code**: A comma-separated list of country codes. It determines the countries that will get this layout.

Example: `US,BR,MX`

**Available Profiles**: Choose the user profiles that will get this layout.

#### Available Account Record Types[\#](/static/img/02-create-a-layout-and-tabs.html#available-account-record-types)

For Account Reports, this determines which Account type this Layout is shown to.

![Available Account Record Types](/static/img/layout-06.png "Available Account Record Types")

#### Dates

These three fields set the dashboard’s default time period:

![Dates](/static/img/layout-07.png "Dates")

See the [Layout Configuration reference Default Time Filter section](/references/configuration-layout#default-time-filter) for full details on the values and keywords that can be used.

You should use either Previous/Next Months or Cycle Plan dates, not both together.

**Previous Months**: The number of months to go back in the past, relative to the current month.

**Next Months**: The number of months to go into the future, relative to the current month.

**Use Cycle Plan Dates**: Indicates that the user’s current Cycle Plan should determine the default time period. Note: this feature must be discussed with the developer beforehand, as different orgs use Cycle Plans differently.

## Tabs

Tabs allow you to group related data visualisations together.

They can be styled according to your company’s brand book:

![Tab example 1](/static/img/tabs-01.png "Tab example 1")

![Tab example 2](/static/img/tabs-02.png "Tab example 2")

By default, every new Layout has a Tab called “Default”. When there is only one Tab defined, the tab name is not displayed, to save space.

![Tab edit](/static/img/tabs-03.png "Tab edit")

To create a new Tab, click on View All in the Tab list:

![Tab list](/static/img/tabs-04.png "Tab list")

Then click on New in the top-right corner.

![New Tab](/static/img/tabs-03.png "New Tab")

**Tab Name**: The name the admin will see.

**Message Key**: The name of a Veeva Message. The Veeva Message will provide the translated name the end user will see.

**Order**: Determines the left-to-right order the tabs will appear in. Lower numbers are on the left, higher numbers are on the right.
