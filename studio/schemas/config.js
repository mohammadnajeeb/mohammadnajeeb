export default {
    "type": "document",
    "name": "config",
    "title": "Site Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseurl",
            "title": "Base URL",
            "description": "Serve the website from the given base URL",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "permalink",
            "title": "Permalink",
            "description": "The output path for your pages, posts, or collections.",
            "hidden": false,
            "initialValue": "/posts/:slug:output_ext",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "/posts/:slug:output_ext"
                ]
            }
        },
        {
            "type": "string",
            "name": "description",
            "title": "Site Description",
            "description": "The default site description used in meta data.",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout_style",
            "title": "Layout Style",
            "description": "The style of the theme layout.",
            "initialValue": "simple",
            "validation": null,
            "options": {
                "list": [
                    "simple",
                    "overflow"
                ]
            }
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Color Palette",
            "description": "The color palette used for the site.",
            "initialValue": "green",
            "validation": null,
            "options": {
                "list": [
                    "blue",
                    "green",
                    "orange",
                    "violet"
                ]
            }
        },
        {
            "type": "object",
            "name": "header",
            "title": "Header Configuration",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "title",
                    "title": "Header Title",
                    "description": "The title displayed on the left side. If value is not set, the author name will be used.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "tagline",
                    "title": "Header Tagline",
                    "description": "The tagline displayed on the left side.",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "profile_img",
                    "title": "Profile Image",
                    "description": "The author profile image displayed on the left side.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "background",
                    "title": "Background",
                    "description": "The background of the left side.",
                    "initialValue": "dark",
                    "validation": null,
                    "options": {
                        "list": [
                            "dark",
                            "light"
                        ]
                    }
                },
                {
                    "type": "boolean",
                    "name": "has_nav",
                    "title": "Enable Navigation Menu",
                    "description": "Display the navigation menu bar on the left side.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "nav_links",
                    "title": "Navigation Links",
                    "description": "List of navigation links.",
                    "validation": null,
                    "of": [
                        {
                            "type": "action"
                        }
                    ]
                },
                {
                    "type": "boolean",
                    "name": "has_social",
                    "title": "Enable Social Links",
                    "description": "Display social links on the left side.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "social_links",
                    "title": "Social Links",
                    "description": "List of social links on the left side.",
                    "validation": null,
                    "of": [
                        {
                            "type": "action"
                        }
                    ]
                }
            ]
        },
        {
            "type": "object",
            "name": "footer",
            "title": "Footer Configuration",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "content",
                    "title": "Footer Content",
                    "description": "The copyright text displayed in the footer.",
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "links",
                    "title": "Links",
                    "description": "List of links in the footer.",
                    "validation": null,
                    "of": [
                        {
                            "type": "action"
                        }
                    ]
                }
            ]
        },
        {
            "type": "object",
            "name": "sass",
            "title": "Sass",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "number",
                    "name": "indentWidth",
                    "title": "Indent Width",
                    "description": "Used to determine the number of spaces or tabs to be used for indentation.",
                    "initialValue": 4,
                    "validation": Rule => Rule.integer()
                },
                {
                    "type": "string",
                    "name": "style",
                    "title": "Output Style",
                    "description": "Determines the output format of the final CSS style.",
                    "initialValue": "nested",
                    "validation": null,
                    "options": {
                        "list": [
                            "nested",
                            "expanded",
                            "compact",
                            "compressed"
                        ]
                    }
                },
                {
                    "type": "number",
                    "name": "precision",
                    "title": "Precision",
                    "description": "Used to determine how many digits after the decimal will be allowed.",
                    "initialValue": 10,
                    "validation": Rule => Rule.integer()
                }
            ]
        },
        {
            "type": "array",
            "name": "plugins",
            "title": "Plugins",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "array",
            "name": "exclude",
            "title": "Exclude",
            "description": "Exclude directories and/or files from the conversion.",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "_config.yml"
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
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true
}