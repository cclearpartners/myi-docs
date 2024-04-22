---
title: Online Performance
description: How to speed up online dashboards
date: 2024-03-29T00:00:00.000Z
---

Online dashboards, especially at Territory-level can become slow. Here are some recommendations to speed them up.

## List View Caching

A Global Cache List View is useful when multiple reports within a dashboard query the same object. Global Caching should always be configured with the help of a developer, as there are a few issues to be aware of.

Global Cache List Views are queried before the reports start loading. When the reports query objects that have been cached, instead of querying Salesforce, they get data from the cache, which is much quicker.

A cache must only query one object. There should not be any lookups.

Reports will not have access to any records that are not in the cache, so make sure the Global Cache List View gathers all the data the dashboard could ever need. For example, when caching Calls, if there is a Period Filter that goes back 2 years, the Global Cache List View must query calls from 2 years ago.

When caching multiple related objects, use the Global Cache Order field (or the `globalCacheOrder` custom parameter if the field is not available) on the List View to determine which objects to cache first. For example, when caching Accounts and Calls for those Accounts, set the Accounts List View's Global Cache Order to 1 and the Calls List View's to 2.

## ZIP Size Reduction

If the dashboard only uses a few different Reporting Blocks (for example a Table with multiple Record Filters), it may be worth getting a dedicated ZIP containing only those Reporting Blocks. That makes the ZIP smaller and quicker to load. The downside is that it is an extra ZIP to manage and it must be updated if another Reporting Block, such as a Picklist Filter, needs to be added to the dashboard.

