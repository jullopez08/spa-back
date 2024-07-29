"use strict";
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
Object.defineProperty(exports, "__esModule", { value: true });
// GET /appointment => Obtener el detalle de un turno específico.
// POST /appointment/schedule => Agendar un nuevo turno.
// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
const express_1 = require("express");
const appointmentsController_1 = require("../controllers/appointmentsController");
const router = (0, express_1.Router)();
router.get("/", appointmentsController_1.getAptmentsCtroller);
router.get("/:id", appointmentsController_1.getAptmentCtroller);
router.post("/schedule", appointmentsController_1.postAptmentScheduleCtroller);
router.put("/:id/cancel", appointmentsController_1.putAptmentCancelCtroller);
exports.default = router;
