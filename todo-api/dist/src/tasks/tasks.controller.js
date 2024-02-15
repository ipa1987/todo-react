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
exports.taskController = void 0;
const tasks_entity_1 = require("./tasks.entity");
const __1 = require("../..");
const class_transformer_1 = require("class-transformer");
const express_validator_1 = require("express-validator");
class TasksController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allTasks = yield __1.AppDataSource.getRepository(tasks_entity_1.Task).find({
                    order: {
                        date: 'ASC',
                    },
                });
                allTasks = (0, class_transformer_1.instanceToPlain)(allTasks);
                return res.json(allTasks).status(200);
            }
            catch (_errors) {
                return res
                    .json({ error: 'Internal server error' })
                    .status(500);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ errors: errors.array() });
            }
            const newTask = new tasks_entity_1.Task();
            newTask.title = req.body.title;
            newTask.date = req.body.date;
            newTask.description = req.body.description;
            newTask.priority = req.body.priority;
            newTask.status = req.body.status;
            try {
                let createdTask = yield __1.AppDataSource.getRepository(tasks_entity_1.Task).save(newTask);
                createdTask = (0, class_transformer_1.instanceToPlain)(createdTask);
                return res.json(createdTask).status(201);
            }
            catch (_errors) {
                return res
                    .json({ error: 'Internal server error' })
                    .status(500);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ errors: errors.array() });
            }
            let task;
            try {
                task = yield __1.AppDataSource.getRepository(tasks_entity_1.Task).findOne({
                    where: { id: req.body.id },
                });
            }
            catch (_errors) {
                return res
                    .json({ error: 'Internal server error' })
                    .status(500);
            }
            if (!task) {
                return res.status(404).json({
                    error: 'Task with the given id does not exist',
                });
            }
            let updatedTask;
            try {
                updatedTask = yield __1.AppDataSource.getRepository(tasks_entity_1.Task).update(req.body.id, (0, class_transformer_1.plainToInstance)(tasks_entity_1.Task, {
                    status: req.body.status,
                }));
                updatedTask = (0, class_transformer_1.instanceToPlain)(updatedTask);
                return res.json(updatedTask).status(200);
            }
            catch (_errors) {
                return res
                    .json({ error: 'Internal server error' })
                    .status(500);
            }
        });
    }
}
exports.taskController = new TasksController();
