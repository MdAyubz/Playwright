// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
    timeout: 60 * 1000, //This timeout is for components in PW for assertion diff timeout is used. This is applicable to evry step

    expect: { //This timeout is for assertion level timeout.
      timeout: 60 * 1000
    },
    reporter:'html',

    use:{
      browserName: 'firefox',
      
     // headless: false, //This will open the browser in headless mode. If we want to see the browser then we need to set it to false


    }
    
});

module.exports = config

