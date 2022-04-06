import { ICloudWiseNetworkRepository } from "src/modules/job/domain/repositories/ICloudWiseNetworkRepository";
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fs = require("fs");

export class CloudWiseNetworkRepository implements ICloudWiseNetworkRepository {
  private url: string;

  constructor() { 
    this.url = "https://www.cloudwisesolutions.co.uk/thenetwork";
  }

  public async scrapeData() {
    const { data } = await axios.get(this.url);

    const $ = cheerio.load(data);

    const listItems = $(".archive-item--show-date");
    //console.log(listItems.html())
    const jobs = [];

    listItems.each((idx, el) => {
        const job = { description: "", post_date: "" };

        job.description = $(el).children("a").text();
        job.post_date = $(el).children("span").first().text().trim();

        jobs.push(job);
    });

    return jobs;
  }
}
