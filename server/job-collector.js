const {
  LinkedinScraper,
  ERelevanceFilterOptions,
  ETimeFilterOptions,
  EJobTypeFilterOptions,
  EExperienceLevelOptions,
  events,
} = require("linkedin-jobs-scraper");

console.log('Configuring Scraper');

(async () => {
  // Each scraper instance is associated with one browser.
  // Concurrent queries will run on different pages within the same browser instance.
  const scraper = new LinkedinScraper({
    headless: true,
    slowMo: 50,
    args: [
      "--lang=en-GB",
    ],
  });

  // Add listeners for scraper events
  scraper.on(events.scraper.data, (data) => {
    console.log(
      data.description.length,
      data.descriptionHTML.length,
      `Query='${data.query}'`,
      `Location='${data.location}'`,
      `Title='${data.title}'`,
      `Company='${data.company ? data.company : "N/A"}'`,
      `Place='${data.place}'`,
      `Date='${data.date}'`,
      `Link='${data.link}'`,
      `applyLink='${data.applyLink ? data.applyLink : "N/A"}'`,
      `senorityLevel='${data.senorityLevel}'`,
      `function='${data.jobFunction}'`,
      `employmentType='${data.employmentType}'`,
      `industries='${data.industries}'`,
    );
  });

  scraper.on(events.scraper.error, (err) => {
    console.error(err);
  });

  scraper.on(events.scraper.end, () => {
    console.log('All done!');
  });

  // Add listeners for puppeteer browser events
  scraper.on(events.puppeteer.browser.targetcreated, () => {
  });
  scraper.on(events.puppeteer.browser.targetchanged, () => {
  });
  scraper.on(events.puppeteer.browser.targetdestroyed, () => {
  });
  scraper.on(events.puppeteer.browser.disconnected, () => {
  });

  // Custom function executed on browser side to extract job description
  const descriptionFn = () => document.querySelector(".description__text")
    .innerText
    .replace(/[\s\n\r]+/g, " ")
    .trim();

  // Run queries concurrently
  await Promise.all([
    /*
    scraper.run({
      query: "Graphic Designer",
      options: {
        locations: ["London"],
        descriptionFn: descriptionFn,
        filters: {
          relevance: ERelevanceFilterOptions.RELEVANT,
          time: ETimeFilterOptions.MONTH,
        }
      }
    }),
   */
    // Run queries serially
    scraper.run([
      {
        query: "Project Manager",
        options: {
          limit: 10, // This will override global option limit (33)
        }
        //locations: ["Germany"], // This will be merged with the global options => ["New York", "Germany"]
      }
    ], { // Global options for this run, will be merged individually with each query options (if any)
      locations: ["Charlotte", "Atlanta"],
      optimize: true,
      limit: 33,
    }),
  ]);

  // Close browser
  await scraper.close();
})();
