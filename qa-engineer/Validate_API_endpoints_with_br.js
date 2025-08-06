{
    "REQUEST_MCP": {
        "puppeteer.mcp3_puppeteer_navigate": {
            "url": "https://www.postman.com/"
        },
        "puppeteer.mcp3_puppeteer_fill_form": {
            "selectors": {
                "methodSelector": "#http-method",
                "urlSelector": "#endpoint-url",
                "headersSelector": "#request-headers",
                "bodySelector": "#request-body"
            },
            "values": {
                "method": "GET",
                "url": "https://api.example.com/tasks",
                "headers": "Content-Type: application/json",
                "body": ""
            }
        },
        "puppeteer.mcp3_puppeteer_click": {
            "selector": "#send-request"
        },
        "puppeteer.mcp3_puppeteer_get_text": {
            "selector": "#response-body"
        },
        "puppeteer.mcp3_puppeteer_get_status": {
            "selector": "#response-status"
        }
    }
}