const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:city", async (req, res) => {

    try {

        const city = req.params.city;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

        const response = await axios.get(url);

        const data = response.data;

        res.json({
            city: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].description,
            humidity: data.main.humidity
        });

    }
    catch (error) {

        res.status(500).json({
            message: "City not found or API error"
        });

    }

});

module.exports = router;