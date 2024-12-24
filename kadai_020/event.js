// btnというidを持つHTML要素を取得し定数に代入
const clickBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
  // textというidを持つHTML要素を取得し定数に代入
  const mainText = document.getElementById('text');
  // ボタンが押されたら、H2に「ボタンをクリックしました」を表示
  mainText.textContent = 'ボタンをクリックしました';
});