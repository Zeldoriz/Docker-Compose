"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/send', (req, res) => {
    const payload = {
        payload: req.query.payload,
        time: new Date().getDate()
    };
    console.log(payload.time, new Date().getDate());
    console.log(payload);
    res.send(payload);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map