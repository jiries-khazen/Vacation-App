const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
    try {
        let mockProducts = [
            {
                id: 1, destination: "Paris", price: 1000, imageUrl: "https://cutewallpaper.org/download.php?file=/24/eiffel-tower-vector-png/1036430898.jpg"
                , amountOfFollowers: 3, startDate: "02-05-2022", endDate: "02-06-2022"
            },
            {
                id: 2, destination: "London", price: 580, imageUrl: "https://www.kindpng.com/imgv/ihwRwRw_london-png-transparent-png/"
                , amountOfFollowers: 1, startDate: "03-06-2022", endDate: "03-07-2022"
            },
            {
                id: 3, destination: "Rome", price: 960, imageUrl: "https://www.kindpng.com/free/colosseum/"
                , amountOfFollowers: 11, startDate: "15-06-2022", endDate: "15-07-2022"
            }
        ]
        response.json(mockProducts);
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});

router.delete("/:id", async (request, response) => {
    try {
        response.json();
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});

module.exports = router;