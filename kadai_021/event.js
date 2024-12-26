// btnとtextのidを持つ要素を定義する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックしたらイベントが発動
btn.addEventListener('click', () => {
  // 2秒後に
  setTimeout(() => {
  // テキスト切り替え
  text.textContent ='ボタンをクリックしました'}, 2000);
});