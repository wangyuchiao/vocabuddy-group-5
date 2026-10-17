# vocabuddy-group-5

## 小組名稱
AC^3

## 組員姓名
王禹喬、陳瑀萱、劉芸兆、鍾姝亭、陳羿安

## 組員的 GitHub 帳號
wangyuchiao、Hsuan0528、Yunnn-45、Julie1239、alicesnorlax

## 專案簡介
英文單字學習專案。原本是用 Google Colab 製作的單字卡（顯示單字與中文解釋、隨機卡），E2 練習中另外加入網頁版（`ytp-e2/app/`），並新增三個程式主題單字與到期計數函式 `countDue`。

## 組員分工
1. 王禹喬：建立 Repository 與邀請 Collaborators
2. 王禹喬：新增單字並 commit
3. 鍾姝亭：新增隨機卡功能
4. 鍾姝亭：整理 README
5. 王禹喬：E2 練習（VS Code 版與 Colab 版，成果在 `ytp-e2/`）

## 主要功能

### Colab 版
- 單字卡：點卡片翻面看中文，按「下一張」換單字。
- 隨機單字：按「隨機單字」隨機抽一個單字。

### 網頁版（`ytp-e2/app/`）
「來源」欄標示「起點」的，是課堂提供的程式原本就有的功能；標示「新增」的，是我們這次加入的。

| 功能 | 說明 | 來源 |
|---|---|---|
| 單字卡複習 | 顯示英文，按「顯示答案」看中文，再按「記得」或「忘了」 | 起點 |
| 間隔複習（Leitner 盒） | 盒 1 到 5，間隔 1、2、4、8、16 天；答對升一級，答錯回盒 1；只複習到期的卡，答錯的卡當天排到隊尾重考 | 起點 |
| 單字包 CSV 匯入 | 貼上 `en,zh` 的 CSV 文字，逐行驗證並顯示錯誤行號；匯入的單字存在瀏覽器，可一鍵清除 | 起點 |
| 離線快取（PWA） | 用 Service Worker 快取主要檔案，附 manifest 與圖示 | 起點 |
| 時間旅行測試 | 在瀏覽器 Console 輸入 `vbTravel(1)` 快轉一天，方便驗證複習排程 | 起點 |
| AI 例句、考我弱點 | 呼叫 Anthropic API，需要自備 API key（只存在瀏覽器）；課堂未操作 | 起點 |
| 三個程式主題單字 | loop、variable、debug | 新增 |
| 到期計數 `countDue(states, today)` | 計算 `due <= today` 的筆數，不改輸入、不讀時鐘；目前只有函式與測試，尚未接到畫面 | 新增 |

## 內建單字

**Colab 版**（11 個）：algorithm 演算法、recursion 遞迴、vocabulary 字彙、memorize 背誦、efficient 有效率的、persist 堅持；持續、retrieve 取回；檢索、interval 間隔、collaboration 協作、repository 儲存庫、commit 提交。

**網頁版**（21 個）：

| 主題 | 單字 |
|---|---|
| 學習與程式（起點） | algorithm 演算法、recursion 遞迴、vocabulary 字彙、memorize 背誦、efficient 有效率的、persist 堅持；持續、retrieve 取回；檢索、interval 間隔 |
| 動物（起點） | elephant 大象、dolphin 海豚、eagle 老鷹、penguin 企鵝、giraffe 長頸鹿、squirrel 松鼠、octopus 章魚、kangaroo 袋鼠、butterfly 蝴蝶、crocodile 鱷魚 |
| 程式主題（E2 新增） | loop 迴圈、variable 變數、debug 除錯 |

## E2 練習成果（2026-10-17）
在課堂提供的起點（v1.1 的 lab10 快照）上，用 AI 協助完成同一個修改，並在兩個環境各做一次。成果放在 `ytp-e2/`。

- 新增單字：loop＝迴圈、variable＝變數、debug＝除錯（`words.js` 由 18 字變成 21 字）
- 新增純函式：`countDue(states, today)`，回傳 `due <= today` 的筆數（`srs.js`），不改輸入、不讀時鐘
- 新增測試：`test_count_due.js`，並通過課堂提供的合約測試 `e2_contract.js`

### 檔案位置
| 路徑 | 內容 |
|---|---|
| `ytp-e2/app/` | VS Code（本機 AI 工具）版成果 |
| `ytp-e2/colab/e2-result.zip` | Colab 版下載的成果 |
| `ytp-e2/colab/YTP_E2_Colab_group5.ipynb` | Colab 筆記本（含執行輸出） |

### 驗證方式
在 `ytp-e2/app/` 資料夾執行（需要 Node.js）：

```
node test_srs.js
node test_csv.js
node check_words.js
node test_count_due.js
node e2_contract.js
```

全部通過，`check_words.js` 顯示共 21 字。這些是純函式與資料的測試，不等於瀏覽器畫面、離線快取等行為的驗收。

### 兩個環境的比較
- VS Code：AI 直接讀寫本機檔案，Node v24.20.0（Windows）。
- Colab：AI 看不到檔案，需要把帶行號的程式輸出貼給它，再把回傳的完整檔案貼回儲存格，Node v20.19.0。
- 兩邊的程式內容相同，是因為使用同一個 AI 產出；兩個環境的差異在操作過程，不在結果。

### 使用 AI 的紀錄
- 使用 Claude（VS Code 版用 Claude Code，Colab 版用對話視窗）。
- Colab 版依投影片流程：先請 AI 列計畫，經回覆「執行」後才取得程式。
- Review 紀錄：見下方「Review 紀錄（Lab 14）」。

## Review 紀錄（Lab 14）

### 審查範圍與方式
- 範圍：E2 的實際變更，也就是 `617a41a`（課堂起點）到 `09fa652`（E2 成果）之間 `ytp-e2/app/` 與 `README.md` 的差異。
- 人審：組員在 Colab 步驟 7 的 diff 比較格，以及 VS Code 版的 `git diff` 檢視變更，內容與預期一致（三個單字、`countDue`、新測試檔），未發現其他問題。
- AI 審：由 Claude 以唯讀方式檢查同一份 diff（需求符合、邊界、回歸、額外改動）。限制：這次審查與實作在同一個對話中進行，不是獨立的新對話，獨立性有限。
- 測試證據：`test_srs.js`、`test_csv.js`、`check_words.js`、`test_count_due.js`、`e2_contract.js` 全部通過（21 字）。

### 重點：「今天到期也要算」
| 項目 | 內容 |
|---|---|
| 需求 | 回傳 `due <= today` 的筆數；`due` 等於 `today`（今天到期）也要算 |
| 程式 | `ytp-e2/app/srs.js` 第 14 行：`if (s.due <= today) n++;` |
| 測試 | `ytp-e2/app/test_count_due.js` 第 5 行（`due` 為 99、100、101，`today=100`，預期 2）、第 6 行（`due=100`，`today=100`，預期 1）；`ytp-e2/app/e2_contract.js` 第 8 行（同樣預期 2） |
| 驗證 | 在臨時副本把 `<=` 改成 `<`：`test_count_due.js` 與 `e2_contract.js` 都失敗（`1 !== 2`）；改回 `<=` 後五支測試全部通過 |
| 結論 | 這個邊界未發現問題。若有人主張 `<` 也可以，反證是：`due=100`、`today=100` 預期為 1，用 `<` 會得到 0 |

### 人審與 AI 審查的對照
| 項目 | 內容 |
|---|---|
| 共同發現（兩邊都指出的問題） | 無。兩邊都沒有指出需要修正的程式錯誤。 |
| 只有人發現（AI 漏掉的地方） | 無。 |
| 只有 AI 發現（人要再查證） | 1. 【中】README 原有的「本次新增的單字與功能」段落（collaboration、repository、commit；隨機卡）在 E2 commit `09fa652` 中被移除。查證：`git diff 31863e9 09fa652 -- README.md` 確實刪除了該段。<br>2. 【低】`countDue` 沒有檢查輸入。實際執行的結果：`[{due:"99"}]`、`today=100` 回傳 1（字串被自動轉成數字）；`due` 為 `NaN` 或缺少時不計入（回傳 0）；`states` 為 `null` 或元素為 `null` 會拋出 `TypeError`。 |
| AI 誤報（附反證與不採納原因） | 項目 1：經組員查證，那段是組員刻意移除的，不是誤刪。它記錄的是上一次任務的內容，這次 README 改為記錄 E2 的成果。不採納。 |
| 最後決定 | 1. 不採納：維持現狀，不還原「本次新增的單字與功能」段落。<br>2. 不採納：題目規定輸入為有限數值，本堂不納入非法輸入處理；若日後把 `countDue` 接上畫面，再補輸入驗證。<br>3. 「今天到期」邊界維持 `<=`，不修改程式。 |

## Google Colab 開啟連結
https://colab.research.google.com/github/wangyuchiao/vocabuddy-group-5/blob/main/VocaBuddy.ipynb

## 程式執行方式

### Colab 版
1. 點上方 Colab 連結開啟 Notebook
2. 選擇「執行階段 → 全部執行」
3. 查看下方輸出結果

### 網頁版
請用本機伺服器開啟（Service Worker 需要 localhost 或 HTTPS 才能運作）。在 `ytp-e2/app/` 資料夾執行：

```
python3 -m http.server 8000
```

再用瀏覽器開啟 http://localhost:8000，停止時按 Ctrl+C。沒有 Python 時，也可以改用 Node.js 的 http-server 等靜態伺服器。

## 專案檔案

| 檔案 | 用途 |
|---|---|
| `VocaBuddy.ipynb` | Colab 版單字卡與隨機單字 |
| `ytp-e2/app/index.html` | 網頁版的畫面與主要程式（複習流程、學習紀錄、CSV 匯入、AI 功能） |
| `ytp-e2/app/words.js` | 單字包（21 個單字） |
| `ytp-e2/app/srs.js` | 間隔複習排程 `schedule`、間隔表 `INTERVALS`，以及新增的 `countDue` |
| `ytp-e2/app/csv.js` | CSV 解析 `parseCSV` 與驗證 `validateWords` |
| `ytp-e2/app/sw.js`、`manifest.json`、`icon.png` | 離線快取、App 名稱與圖示 |
| `ytp-e2/app/check_words.js` | 檢查單字包的欄位與重複 |
| `ytp-e2/app/test_srs.js`、`test_csv.js`、`test_count_due.js` | 排程、CSV、到期計數的測試 |
| `ytp-e2/app/e2_contract.js` | 課堂提供的合約測試 |
| `ytp-e2/colab/` | Colab 版成果 zip 與筆記本 |

## 資料保存與注意事項
- 網頁版的學習紀錄與匯入的單字，存在使用者目前瀏覽器的 localStorage（`vb-log` 記錄作答次數、錯誤次數、盒級、到期日；`vb-words` 記錄匯入的單字），沒有雲端同步，清除網站資料後會消失。
- Service Worker 會優先讀取快取。修改 `words.js` 等前端檔案後，舊的瀏覽器可能仍看到舊內容，需要在開發者工具清除 Service Worker 與快取後重新載入，或更新 `sw.js` 的 `CACHE` 版本名稱。本次 E2 修改了 `words.js`，但沒有更新 `CACHE`。
- `countDue` 目前只有函式與測試，尚未接到畫面。
- 本次的測試涵蓋純函式與資料（見「驗證方式」），沒有驗收瀏覽器畫面、離線快取與 AI 功能。
