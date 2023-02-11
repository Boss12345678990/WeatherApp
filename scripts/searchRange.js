var searchRange = function (nums, target) {
    if (!nums) {
      return [-1, -1];
    }
    let i = 0;
    let j = nums.length - 1;
    let num = 0;
    let res = [];
    while (j < i) {
      if (nums[i] === target) {
        res.push(i);
      } else {
        i++;
      }
  
      if (nums[j] === target) {
        res.push(j);
      } else {
        j--;
      }
    }
    if (!res) {
      return [-1, -1];
    } else {
      return res;
    }
  };
  