import express from 'express';
import { getApp } from '../controller/app.controller.js';

const router = express.Router()

router.get("/", getApp) 

export default router