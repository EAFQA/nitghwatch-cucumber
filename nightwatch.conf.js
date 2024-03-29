const chromedriver = require('chromedriver');

module.exports = {
    src_folders: ["steps"], //tests is a folder in workspace which has the step definitions
    page_objects_path: 'pages/', //page_objects folder where selectors are saved
    test_settings: {
        default: {
            screenshots: {
                enabled: true,
                path: 'screenshots'
            },
           launch_url: 'https://www.gympass-staging.com/',
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: 'chrome'
            },
              test_workers: {
                  enabled: true,
                  workers: "auto"
                }
        }
    }
};