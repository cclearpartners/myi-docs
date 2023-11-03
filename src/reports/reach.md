---
title: Reach Report
description: Displays a doughnut showing if an account is reached or not reached.
---

### Configuration

The report's main List View queries all the accounts that could be reached (eg. the user's territory).

Create a OneToMany List View Association to determine wether an account is reached or not. This can be for any object that has an Account lookup. Accounts with at least one result in the List View Association will be considered to have been reached. 

Make sure the List View Association is mapped correctly to the main listview's Accounts.
