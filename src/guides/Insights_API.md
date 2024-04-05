---
title: "Insights+ Layout REST API Documentation"
description: Learn how to add export and import Insights+ Layouts using the API
date: 2024-04-05T08:15:49.824Z
---
# Insights+ Layout REST API Documentation

The Insights+ Layout API provides endpoints for importing, exporting, and activating layouts within a specified Salesforce (SF) organization.

## Export Layout

**GET** `<instance>/services/apexrest/cpt/layout/{ID}/export`

Exports the JSON representation of a layout identified by the layout ID.

### Response

- The response will be a JSON object representing the layout.
  
<br>

## Import Layout

**POST** `<instance>/services/apexrest/cpt/layout/import`

Imports a layout using a JSON representation.

### Request Body (JSON Format)
```json
{
    "json": {},
    "layoutId": "ID",
    "htmlReportId": "ID",
    "replace": boolean
}
```

### Description of Request Body Fields

- `json`: A JSON formatted string that defines the structure and settings of the layout to be imported.
- `layoutId`: (Optional) The ID of the layout that you want to replace. If `replace` is set to `true`, this field or the htmlReportId must be provided.
- `htmlReportId`: (Optional) The ID of the HTML report that the new layout is associated with. If no layoutId is specified, the htmlReportId will be used to attempt to retreive a layoutId.
- `replace`: (Optional) A boolean flag that, when set to `true`, indicates that the existing layout specified by `layoutId` should be replaced with the new layout defined in the `json` field. The old layout will be deleted.

### Response

- The response will be the ID of the newly imported Insights+ Layout.
  
<br>

## Activate Layout

**PUT** `<instance>/services/apexrest/cpt/layout/{ID}/activate`

Updates the status field to 'Active' for the layout identified by the layout ID.

### Response

- The response will OK with a 200 status code.
  
<br>

## Notes

- Replace `<instance>` with your Salesforce instance URL.
- Replace `{ID}` in the URI with the actual ID of the layout you wish to interact with.
- For the import endpoint, the `json` field in the request body must be a valid JSON object representing the layout.
- The `replace` field in the import request body is optional; if set to `true` and a valid `layoutId` is provided, the existing layout will be replaced by the imported layout.

<br>

## Error Codes

- `204` - No Content: The request was processed, but no content was found.
- `400` - Bad Request: The request was invalid or cannot be otherwise served.
- `500` - Internal Server Error: An unexpected condition was encountered.

<br>

## Examples

### Exporting a Layout

To export a layout with the ID `abc123`, you would send a GET request to:

```plaintext
GET <instance>/services/apexrest/cpt/layout/abc123/export
```

### Importing a Layout

To import a new layout with an optional replacement of an existing layout, you would send a POST request with the appropriate JSON body to:

```plaintext
POST <instance>/services/apexrest/cpt/layout/import
```

### Activating a Layout

To activate a layout with the ID `def456`, you would send a PUT request to:

```plaintext
PUT <instance>/services/apexrest/cpt/layout/def456/activate
```
