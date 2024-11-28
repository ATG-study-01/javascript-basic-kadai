// Date() コンストラクターで現在の日付を取得
const today = new Date();

// getFullYearメソッドに基づき定数todayから指定の日時の年を返す
const year = today.getFullYear();

// getMonthメソッドに基づき定数todayから指定の日時の月を返す
const month = today.getMonth() + 1 ;

// getDateメソッドに基づき定数todayから指定の日時の日を返す
const day = today.getDate();

// コンソールに出力
console.log(year + '年' + month + '月' + day + '日');