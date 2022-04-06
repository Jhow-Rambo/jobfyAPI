import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import AppError from 'src/shared/errors/AppError';
import 'src/shared/container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, req: Request, res: Response) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});

// // Loading the dependencies. We don't need pretty
// // because we shall not log html to the terminal
// const axios = require("axios");
// const cheerio = require("cheerio");
// const pretty = require("pretty");
// const fs = require("fs");

// // URL of the page we want to scrape
// const url = "https://www.cloudwisesolutions.co.uk/thenetwork";

// async function scrapeData() { 
//   const { data } = await axios.get(url);

//   const $ = cheerio.load(data);

//   const listItems = $(".archive-item--show-date");
//   console.log(listItems.html())
//   const jobs = [];

//   listItems.each((idx, el) => {
//       // Object holding data for each country/jurisdiction
//       const job = { description: "", post_date: "" };
//       // Select the text content of a and span elements
//       // Store the textcontent in the above object
//       job.description = $(el).children("a").text();
//       job.post_date = $(el).children("span").first().text().trim();
//       // Populate countries array with country data
//       jobs.push(job);
//   });

//   console.log(jobs)
// }

// scrapeData();