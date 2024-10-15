// 正規表現用に特殊文字をエスケープする関数
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // 特殊文字をエスケープ
}

// 拡充した変換リストを定義
// OpenGL関連の変換リストを拡充
const conversionList = {
  こんにちは: "Hello, World!",
  ありがとう: "return Thanks",
  さようなら: "System.exit(0)",
  やっていきましょう: "行ってみよー",
  です: "Death",
  それで: "ほんで",
  お金がない: "お金よこせ",
  簡単: "O(1)の複雑さ",
  難しい: "O(n^2)の難問",
  理解できる: "デバッグ済み",
  わからない: "nullポインタ参照",
  バグ: "Exception",
  直す: "デバッグする",
  オーバーライド: "メソッドオーバーライド",
  最適化: "パフォーマンスチューニング",
  新しい: "最新バージョン",
  古い: "レガシーコード",
  進める: "プッシュしていく",
  止まる: "breakステートメント",
  動く: "動的リンク",
  "C++": "C++ (クロスプラットフォームの勇者)",
  Rust: "Rust (高速で安全な言語)",
  Java: "Java (ゲームエンジンの盟主)",
  OpenGL: "OpenGL (グラフィックの王者)",
  プログラミング: "魔術のコード",
  頂点シェーダー: "vertex shader (頂点変換の使者)",
  フラグメントシェーダー: "fragment shader (ピクセルの魔術師)",
  レンダリング: "描画処理",
  バッファ: "データの流れ",
  テクスチャ: "ピクセルのスキン",
  GLSL: "OpenGLの呪文言語",
  フレームバッファ: "シーンのキャンバス",
  頂点配列: "vertex array (モデルの骨格)",
  変換行列: "transformation matrix (空間の魔法陣)",
  深度テスト: "Zバッファリング (奥行きの守護者)",
  ブレンド: "アルファ合成",
  光源: "ライティングのエンティティ",
  影: "シャドウマッピング",
  視点行列: "camera matrix (視界の操縦者)",
  モデル行列: "model matrix (形状の設計図)",
  法線ベクトル: "ノーマル (光の反射師)",
  頂点バッファオブジェクト: "VBO (データの貯蔵庫)",
  頂点インデックスバッファ: "IBO (接続点のリスト)",
  描画コール: "draw call (レンダリング命令)",
  フラグメント: "ピクセルの最小単位",
  アンチエイリアス: "ジャギー消しの技法",
  シェーダープログラム: "shader program (レンダリングの魔法書)",
  ユニフォーム変数: "uniform (シェーダーへの贈り物)",
  属性変数: "attribute (頂点の特性)",
  視野角: "field of view (FOVの角度)",
  クリッピング: "描画範囲の調整",
  ビューポート: "画面表示領域",
};

// テキストを変換する関数
function convertText() {
  let input = document.getElementById("inputText").value;

  // 変換リストを使用してテキストを変換
  for (const [key, value] of Object.entries(conversionList)) {
    const regex = new RegExp(escapeRegExp(key), "g"); // エスケープされた正規表現を使用
    input = input.replace(regex, value);
  }

  document.getElementById("outputText").innerText = input;
}

// テキストエリアをクリアする関数
function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").innerText = "";
}
