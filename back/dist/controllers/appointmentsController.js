"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAptmentCancelCtroller = exports.postAptmentScheduleCtroller = exports.getAptmentCtroller = exports.getAptmentsCtroller = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const getAptmentsCtroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turnoGetCtro = yield (0, appointmentsService_1.getAllTurnos)();
        res.status(200).json(turnoGetCtro);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAptmentsCtroller = getAptmentsCtroller;
const getAptmentCtroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const turnoIdGetCtro = yield (0, appointmentsService_1.getAllTurnoById)(Number(id));
        res.status(200).json(turnoIdGetCtro);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAptmentCtroller = getAptmentCtroller;
const postAptmentScheduleCtroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appmentData = req.body;
        const agendaTurno = yield (0, appointmentsService_1.createTurnos)(appmentData);
        res.status(200).json(agendaTurno);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.postAptmentScheduleCtroller = postAptmentScheduleCtroller;
const putAptmentCancelCtroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const turnoCancel = yield (0, appointmentsService_1.cancelTurno)(id);
        if (turnoCancel !== null) {
            return res.status(200).json(turnoCancel);
        }
        else {
            res.status(404).json({
                message: "Turno no se encontró",
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.putAptmentCancelCtroller = putAptmentCancelCtroller;
