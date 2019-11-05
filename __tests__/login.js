
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });


    const testLogin = async () => {
        await page.goto('http://story-publi-1qcvdwkf9rohm-2058986296.us-east-2.elb.amazonaws.com/login');

        const email = await page.$('[name="email"]');
        const password = await page.$('[name="password"]');
        const submit = await page.$('[type="submit"]');


        await email.type('admin@story.com');
        await password.type('password');
        await submit.click();


        return await page.waitForNavigation({ waitUntil: 'networkidle0' });
    }


  })
