export default {
    "type": "object",
    "name": "section_form",
    "title": "Form Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Element ID",
            "description": "A unique identifier that can be used when linking to this section. Must not contain whitespace.",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "The text content of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "form_id",
            "title": "Form ID",
            "description": "A unique identifier of the form. Must not contain whitespace.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "form_action",
            "title": "Form Action",
            "description": "The path of your custom \"success\" page, if you want to replace the default success message.",
            "validation": null
        },
        {
            "type": "array",
            "name": "form_fields",
            "title": "Form Fields",
            "validation": null,
            "of": [
                {
                    "type": "form_field"
                }
            ]
        },
        {
            "type": "string",
            "name": "submit_label",
            "title": "Submit Button Label",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "section_form"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}