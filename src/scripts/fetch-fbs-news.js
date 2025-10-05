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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/scripts/fetch-fbs-news.ts
var axios_1 = require("axios");
var cheerio = require("cheerio");
var fs_1 = require("fs");
var path_1 = require("path");
function fetchFbsNews() {
    return __awaiter(this, void 0, void 0, function () {
        var response, $_1, articles_1, outputPath, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get('https://fbs.com/news/', {
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (compatible; AstroBot/1.0)', // Mimic a browser to avoid blocks
                            },
                        })];
                case 1:
                    response = _a.sent();
                    $_1 = cheerio.load(response.data);
                    articles_1 = [];
                    // Adjust selectors based on FBS's HTML structure (inspect https://fbs.com/news/ in browser dev tools)
                    // Common pattern: articles in .news-list > article or similar; title in h2/a, date in time, excerpt in p, image in img
                    $_1('.news-item, article, .post-card').each(function (i, elem) {
                        if (i >= 10)
                            return; // Limit to top 10
                        var title = $_1(elem).find('h2 a, .title a').first().text().trim() || '';
                        var url = $_1(elem).find('h2 a, .title a').first().attr('href') || '';
                        var fullUrl = url.startsWith('http') ? url : "https://fbs.com".concat(url);
                        var date = $_1(elem).find('time, .date').first().text().trim() || '';
                        var excerpt = $_1(elem).find('p.excerpt, .summary').first().text().trim() || '';
                        var imageUrl = $_1(elem).find('img').first().attr('src') || '';
                        if (title && url) {
                            articles_1.push({ title: title, date: date, excerpt: excerpt, imageUrl: imageUrl, url: fullUrl });
                        }
                    });
                    outputPath = (0, path_1.resolve)('src/data/fbs-news.json');
                    (0, fs_1.writeFileSync)(outputPath, JSON.stringify(articles_1, null, 2));
                    console.log("Fetched ".concat(articles_1.length, " FBS news items to ").concat(outputPath));
                    return [2 /*return*/, articles_1];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error fetching FBS news:', error_1);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Run during build (call this in astro.config.mjs or a build hook)
fetchFbsNews();
