export function yearGenerate(element) {
  const date = ` ${new Date().getFullYear()}`;
  element.append(date);
}
