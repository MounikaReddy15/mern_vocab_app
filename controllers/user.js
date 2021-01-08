const Vocab = require("../models/vocab");
const https = require("https");
const fetch = require("node-fetch");
const app_id = process.env.APP_ID;
const app_key = process.env.APP_KEY;

module.exports.addWord = async function (req, res) {
  try {
    const wordId = req.body.word;
    const fields = "definitions";
    const strictMatch = "false";

    let response = await fetch(
      `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${wordId}?fields=${fields}&strictMatch=${strictMatch}`,
      {
        method: "GET",
        headers: {
          app_id: app_id,
          app_key: app_key,
        },
      }
    );
    let result = await response.json();
    let meaning = result.results[0].lexicalEntries[0].entries[0].senses;
    const definitionsMap = meaning.map((mean) => `${mean.definitions}`);
    console.log(definitionsMap, "definitionsMap");
    const cate = result.results[0].lexicalEntries[0].lexicalCategory.text;

    let newVocab = await new Vocab({
      word: req.body.word,
      meaning: definitionsMap,
      category: cate,
    });
    newVocab.save();
    return res.status(200).json({
      success: true,
      message: "Word Added",
      newVocab,
    });
  } catch (err) {
    console.log("*******", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
