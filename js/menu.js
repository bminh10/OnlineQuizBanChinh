// menu.js
let chu = [
  "📈 Tiến độ của bạn đang rất ổn – hãy duy trì nhé!",
  "🔥 Đừng để ngắt mạch học tập – chọn một quiz và bắt đầu ngay!",
  "📚 Mỗi ngày một quiz – kiến thức sẽ dần đầy lên từng chút một!",
  "🧠 Kiến thức là sức mạnh – bạn đã sẵn sàng chinh phục hôm nay chưa?",
  "⏰ Chỉ cần 5 phút mỗi ngày để rèn luyện trí tuệ!",
  "😉 Học hôm nay, giỏi ngày mai – chọn một chủ đề để bắt đầu!",
  "💪 Hãy thử làm ít nhất 1 quiz hôm nay để duy trì thói quen học nhé!",
  "😘 Cùng đạt mục tiêu 5 quiz mỗi tuần nhé – bắt đầu từ hôm nay!",
  "💡 Mỗi câu hỏi là một bước tiến – bạn làm được mà!",
];

let random = Math.floor(Math.random() * chu.length);
document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("duo");
  if (element) {
    element.innerHTML = chu[random];
  }
});


