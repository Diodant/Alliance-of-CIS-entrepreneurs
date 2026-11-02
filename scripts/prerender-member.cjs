// Emit the same React profile and metadata as HTML for direct requests and crawlers.
const fs = require('fs');
const path = require('path');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { HelmetProvider } = require('react-helmet-async');
const babel = require('@babel/core');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src') + path.sep;
const build = path.join(root, 'build');
const manifest = JSON.parse(fs.readFileSync(path.join(build, 'asset-manifest.json'), 'utf8'));
const originalJsLoader = require.extensions['.js'];
function loadSource(module, filename) {
  if (!filename.startsWith(source)) return originalJsLoader(module, filename);
  const result = babel.transformFileSync(filename, {
    babelrc: false, configFile: false,
    presets: [require.resolve('@babel/preset-react')],
    plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
  });
  module._compile(result.code, filename);
}
require.extensions['.js'] = loadSource;
require.extensions['.jsx'] = loadSource;
require.extensions['.css'] = () => {};
for (const extension of ['.jpg', '.png', '.svg']) {
  require.extensions[extension] = (module, filename) => {
    const key = 'static/media/' + path.basename(filename);
    const asset = manifest.files[key];
    if (asset) {
      module.exports = asset;
    } else {
      // CRA embeds small raster images directly in the JavaScript bundle.
      const mime = { '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml' }[extension];
      const buffer = fs.readFileSync(filename);
      if (buffer.length >= 10000) throw new Error('Missing built asset: ' + key);
      module.exports = 'data:' + mime + ';base64,' + buffer.toString('base64');
    }
  };
}

const MemberProfile = require('../src/components/MemberProfile.jsx').default;
const Members = require('../src/components/Members.jsx').default;
const Header = require('../src/components/Header.jsx').default;
const Footer = require('../src/components/Footer.jsx').default;
const profile = require('../src/components/artemIvanov.json');
const context = {};
const body = renderToStaticMarkup(
  React.createElement(HelmetProvider, { context },
    React.createElement('div', { className: 'App' },
      React.createElement(Header), React.createElement(MemberProfile), React.createElement(Footer)))
);
const helmet = context.helmet;
const head = helmet.title.toString() + helmet.meta.toString() + helmet.link.toString() + helmet.script.toString();
const template = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
const html = template.replace(/<title>.*?<\/title>/, '')
  .replace('</head>', () => head + '</head>')
  .replace('<div id="root"></div>', () => '<div id="root">' + body + '</div>')
  .replace(/<noscript>.*?<\/noscript>/, '');
const destination = path.join(build, profile.path);
fs.mkdirSync(destination, { recursive: true });
fs.writeFileSync(path.join(destination, 'index.html'), html);
console.log('Prerendered member profile: ' + profile.path);

// The profile creates a real /members directory. Apache skips the SPA fallback
// for existing directories, so the parent route also needs an index document.
const membersBody = renderToStaticMarkup(
  React.createElement(HelmetProvider, {},
    React.createElement('div', { className: 'App' },
      React.createElement(Header), React.createElement(Members), React.createElement(Footer)))
);
const membersHtml = template
  .replace('<div id="root"></div>', () => '<div id="root">' + membersBody + '</div>')
  .replace(/<noscript>.*?<\/noscript>/, '');
fs.writeFileSync(path.join(build, 'members', 'index.html'), membersHtml);
console.log('Prerendered members directory: /members/');
