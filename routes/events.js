// import { sse, ISseResponse } from "@toverux/expresse";
var sse = require('@toverux/expresse')
var w=require('../worker');

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", sse.sse({ flushAfterWrite: true }), function(req, res, next) {
  // let messageId = parseInt(req.header("Last-Event-ID"), 10) || 0;

  w.someEvent.addListener("hello", b => {
    res.sse.event("hello", b);
  });
});

module.exports = router;
