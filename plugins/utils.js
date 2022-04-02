/**
 * 删除html标签
 * @param {*} str 
 * @returns 
 */
export function delHtmlTag(str) {
  let str1 = str.replace(/<\/?.+?>/g, "").replace(/&nbsp;/g, "").replace(/&lt;/g, "").replace(/&gt;/g, "");
  return str1.length > 120 ? str1.slice(0,120) + '...' : str1;
}

// let tokenKey = "token";
export function setToken(token) {
  return this.$cookies.set('token', token);
}
export function getToken() {
  return this.$cookies.get('token');
}
export function removeToken() {
  return this.$cookies.remove('token');
}
