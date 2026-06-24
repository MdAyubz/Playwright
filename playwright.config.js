// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
    timeout: 40 * 1000, //This timeout is for components in PW for assertion diff timeout is used. This is applicable to evry step

    expect: { //This timeout is for assertion level timeout.
      timeout: 40 * 1000
    },
    reporter:'html',

    use:{
      browserName: 'firefox',
      headless: true, //This will open the browser in headless mode. If we want to see the browser then we need to set it to false


    }
  
  /* Configure projects for major browsers 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    

    
  ],*/

  
});

module.exports = config

