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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchArmors = exports.fetchWeapons = exports.fetchModules = void 0;
const axios_1 = __importDefault(require("axios"));
const API_BASE_URL = 'https://knight-jdr-systeme.fr/fr/api';
// Fetch modules from the external API
const fetchModules = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${API_BASE_URL}/module`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching modules:', error);
        throw error;
    }
});
exports.fetchModules = fetchModules;
// Fetch weapons from the external API
const fetchWeapons = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${API_BASE_URL}/weapons`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching weapons:', error);
        throw error;
    }
});
exports.fetchWeapons = fetchWeapons;
// Fetch armors from the external API
const fetchArmors = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${API_BASE_URL}/armors`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching armors:', error);
        throw error;
    }
});
exports.fetchArmors = fetchArmors;
