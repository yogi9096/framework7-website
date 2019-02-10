module.exports = (content = '') => {
  if (content.indexOf('data-device-preview') < 0) {
    return content;
  }
  content = content.replace(/\n([ ]{1,})([^(^\n]*)\(data-device-preview="([^"]*)"\)([^\n]*)\n/g, (string, indent, before, url) => {
    if (string.indexOf('.with-device') >= 0) {
      indent += '  ';
    }
    return `${string}${indent}.docs-mobile-preview-links
${indent}  a(href="${url}?theme=ios" target="_blank").mobile-preview-ios
${indent}  a(href="${url}?theme=md" target="_blank").mobile-preview-md
`;
  });

  return content;
};
