export default defineEventHandler((event) => {
  // 取得查詢參數
  const query = getQuery(event);
  const callback = query.callback || 'callback'; // 預設 callback 名稱
  const lineIndex = query.lineIndex; // 測試線路的index

  // JSON 資料
  const data = {
    lineIndex: lineIndex,
  };

  // 生成 JSONP 格式的回應
  const jsonpResponse = `${callback}(${JSON.stringify(data)})`;

  // 設定 Content-Type 為 JavaScript
  event.node.res.setHeader('Content-Type', 'application/javascript');

  // 回傳 JSONP
  return jsonpResponse;
});
