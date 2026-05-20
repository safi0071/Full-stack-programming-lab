const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:country", async (req, res) => {

    try {

        const country = req.params.country;

        const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`;

        const response = await axios.get(url);

        const articles = response.data.articles;

        const newsData = articles.slice(0, 5).map((article) => {

            return {
                title: article.title,
                source: article.source.name,
                url: article.url,
                publishedAt: article.publishedAt
            };

        });

        res.json(newsData);

    }
    catch (error) {

        res.status(500).json({
            message: "Unable to fetch news"
        });

    }

});

module.exports = router;