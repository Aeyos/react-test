export const phoneFormat = phone => {
  if (phone && phone.length) {
    const nums = phone.match(/\d/g);
    if (nums) {
      return nums.join('').replace(/^0?(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');
    }
  }
  return phone;
}
