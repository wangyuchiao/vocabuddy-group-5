# vocabuddy-group-5

## 小組名稱
AC^3

## 組員姓名
王禹喬、陳瑀萱、劉芸兆、鍾姝亭、陳羿安

## 組員的 GitHub 帳號
wangyuchiao、Hsuan0528、Yunnn-45、Julie1239、alicesnorlax

## 專案簡介
用Google Colab 製作的英文單字學習程式，可以顯示單字與中文解釋。

## 組員分工
1. 王禹喬：建立 Repository 與邀請 Collaborators
2. 王禹喬：新增單字並 commit
3. 鍾姝亭：新增隨機卡功能
4. 鍾姝亭：整理 README
5. 王禹喬：E2 練習（VS Code 版與 Colab 版，成果在 `ytp-e2/`）

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
- Review 紀錄：待補（Lab 14）。

## Google Colab 開啟連結
https://colab.research.google.com/github/wangyuchiao/vocabuddy-group-5/blob/main/VocaBuddy.ipynb

## 程式執行方式
1. 點上方 Colab 連結開啟 Notebook
2. 選擇「執行階段 → 全部執行」
3. 查看下方輸出結果
