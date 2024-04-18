const express = require("express");

const router = express.Router();

router.get("/user", (req, res) => {
    res.json({
        data: "umesh user here"
    })
});

module.exports = router;