const express = require("express");
const router = express.Router();
const Issue = require("../models/Issue");


// create issue
router.post("/", async (req, res) => {

  const issue = new Issue({
    title: req.body.title,
    description: req.body.description
  });

  await issue.save();

  res.json(issue);
});


// get all issues
router.get("/", async (req, res) => {

  const issues = await Issue.find();

  res.json(issues);
});


// upvote issue
router.put("/vote/:id", async (req, res) => {

  const issue = await Issue.findById(req.params.id);

  issue.votes += 1;

  await issue.save();

  res.json(issue);
});

module.exports = router;