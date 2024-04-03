
# Insights+ Layout REST API Documentation

The Insights+ Layout API provides endpoints for importing, exporting, and activating layouts within a specified Salesforce (SF) organization.

## Export Layout Endpoint

**GET** `/cpt/layout/{ID}/export`

Exports the JSON representation of a layout identified by the layout ID.

### URI Example for Export Layout

```plaintext
GET /cpt/layout/12345/export
```

## Import Layout Endpoint

**POST** `/cpt/layout/import`

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

### URI Example for Import Layout

```plaintext
POST /cpt/layout/import
```

## Activate Layout Endpoint

**PUT** `/cpt/layout/{ID}/activate`

Updates the status field to 'Active' for the layout identified by the layout ID.

### URI Example for Activate Layout

```plaintext
PUT /cpt/layout/67890/activate
```

## Notes

- Replace `{ID}` in the URI with the actual ID of the layout you wish to interact with.
- For the import endpoint, the `json` field in the request body must be a valid JSON object representing the layout.
- The `replace` field in the import request body is optional; if set to `true` and a valid `layoutId` is provided, the existing layout will be replaced by the imported layout.

## Error Codes

- `204` - No Content: The request was processed, but no content was found.
- `400` - Bad Request: The request was invalid or cannot be otherwise served.
- `500` - Internal Server Error: An unexpected condition was encountered.

## Examples

### Exporting a Layout

To export a layout with the ID `abc123`, you would send a GET request to:

```plaintext
GET /cpt/layout/abc123/export
```

### Importing a Layout

To import a new layout with an optional replacement of an existing layout, you would send a POST request with the appropriate JSON body to:

```plaintext
POST /cpt/layout/import
```

### Activating a Layout

To activate a layout with the ID `def456`, you would send a PUT request to:

```plaintext
PUT /cpt/layout/def456/activate
```
```

This format provides a clear and organized structure for the API documentation, making it easy for users to find information about each specific endpoint, as well as general information and examples.
