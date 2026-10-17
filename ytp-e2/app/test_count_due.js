const assert = require("assert");
const { countDue } = require("./srs.js");

assert.strictEqual(countDue([], 100), 0);                                      // 空陣列
assert.strictEqual(countDue([{due:99}, {due:100}, {due:101}], 100), 2);        // 過去、今天算、未來不算
assert.strictEqual(countDue([{due:100}], 100), 1);                             // 今天到期也要算（<=）
assert.strictEqual(countDue([{due:101}, {due:102}], 100), 0);                  // 全部未到期
assert.strictEqual(countDue([{due:1}, {due:50}], 100), 2);                     // 全部已過期

// 重跑相同輸入，結果相同
const same = [{due:99}, {due:100}, {due:101}];
assert.strictEqual(countDue(same, 100), countDue(same, 100));

// 不改輸入：呼叫前後內容一致
const input = [{due:99, box:2}, {due:100, box:3}, {due:101, box:1}];
const before = JSON.stringify(input);
countDue(input, 100);
assert.strictEqual(JSON.stringify(input), before);

console.log("countDue tests passed ✓");
