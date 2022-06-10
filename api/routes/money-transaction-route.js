const { Router } = require("express");
const MoneyTransactionController = require("../controllers/MoneyTransactionController");

const router = Router()

router.get("/", MoneyTransactionController.get);
/* router.post("/create", MoneyTransactionController.create);
router.put("/update/:id", MoneyTransactionController.update);
router.delete("/delete/:id", MoneyTransactionController.delete);
 */

module.exports = router;
