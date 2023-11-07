const { Router } = require("express");
const router = Router();

const valores = require("../valores.json");

router.get("/", (req, res) => {
  res.json(valores);
});

router.get("/:id", (req, res) => {
  const valor = valores.find((c) => c.id === parseInt(req.params.id));
  if (!valor) return res.status(404).send("valor no encontrado");
  else res.send(valor);
});

module.exports = router;
