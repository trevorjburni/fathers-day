const path = require("path");
const router = require("../../../proj3-inventory-manager/inventory-manager/routes/api/inventory");

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;