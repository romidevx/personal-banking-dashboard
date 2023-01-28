
export function formatData(item) {
  // FORMAT DATE
  let agora = new Date(item).toDateString();
  return agora;
}