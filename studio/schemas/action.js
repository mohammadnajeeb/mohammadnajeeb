export default {
    "type": "object",
    "name": "action",
    "title": "Action",
    "fields": [
        {
            "type": "string",
            "name": "label",
            "title": "Label",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "url",
            "title": "URL",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "type",
            "title": "Type",
            "initialValue": "link",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "link",
                    "button",
                    "icon"
                ]
            }
        },
        {
            "type": "string",
            "name": "icon_class",
            "title": "Icon",
            "description": "Font Awesome icon class name, used only when type is \"icon\".",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "new_window",
            "title": "Open in new tab/window",
            "validation": null
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
            "title": "label"
        }
    }
}