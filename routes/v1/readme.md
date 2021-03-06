# NodeBB Write API

Current version : 0.0.0

*Prior to v1.0.0, the API spec is liable to change without warning!*

## General

This spec outlines the various calls exposed by this plugin, as well as expected inputs and outputs.
All API calls are prefixed `/api/vX`, where `X` is the version of API you are interfacing with.

## Authentication

Authentication is handled via HTTP Bearer Token, as generated by the Write API. Presently, the only way to generate a bearer token is via the Administration page (`admin/plugins/write-api`). You can generate a token and associate it with a uid.

## Error Handling

When the API encounters an error, it will do it's best to report what went wrong.
Errors will follow the format specified in this example:

    {
        status: "error",
        message: "User authentication is required for this API endpoint."
    }

## Endpoints

### Topics

#### `POST /category/:cid`

This route creates a new topic under the category specified in the URL.

**This call requires an access token**

* (Required) cid
    * The category id which this topic will be associated with
* (Required) title
    * A topic title
* (Required) content
    * The topic's main text body content

