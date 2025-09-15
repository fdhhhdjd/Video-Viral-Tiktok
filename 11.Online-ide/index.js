function partitions(N) {
    let cur = [];
  
    function backtrack(remain, maxPick) {
      if (remain === 0) {
        console.log(cur.join(" + "));
        return;
      }
      for (let x = 1; x <= Math.min(maxPick, remain); x++) {
        cur.push(x);                    // Thêm số x vào tổ hợp hiện tại
        backtrack(remain - x, x);       // Gọi đệ quy để tiếp tục với phần còn lại (remain - x)
        cur.pop();                      // Loại bỏ x khỏi tổ hợp để thử giá trị khác
      }
    }
  
    backtrack(N, N); // Bắt đầu đệ quy với tổng ban đầu là N và giá trị lớn nhất có thể chọn là N
  }
  
  // Ví dụ: phân tích số 4
  partitions(4); // Gọi hàm để phân tích số 4 thành tổng các số nguyên dương