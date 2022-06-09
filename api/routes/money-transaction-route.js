const express = require('express');
const router = express.Router();

const MoneyTransactionController = require("../controllers/MoneyTransactionController");

router.get("/", MoneyTransactionController.get);
router.post("/create", MoneyTransactionController.create);
router.put("/update/:id", MoneyTransactionController.update);
router.delete("/delete/:id", MoneyTransactionController.delete);


module.exports = router;
