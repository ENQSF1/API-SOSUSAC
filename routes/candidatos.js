const { Router } = require("express");
const router = Router();

const candidatos = require("../candidatos.json");

router.get("/", (req, res) => {
  res.json(candidatos);
});

router.get("/:id", (req, res) => {
  const candidato = candidatos.find((c) => c.id === parseInt(req.params.id));
  if (!candidato) return res.status(404).send("Estudiante no encontrado");
  else res.send(candidato);
});

module.exports = router;
