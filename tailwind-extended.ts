const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities } : any) {
  const utilities: { [key: string]: { 'font-size': string; 'line-height': string } } = {};

  const sizes = {
    '10a17': { 'font-size': '10px', 'line-height': '17px' },
    '11a16': { 'font-size': '11px', 'line-height': '16.5px' },
    '12a18': { 'font-size': '12px', 'line-height': '18px' },
    '14a18': { 'font-size': '14px', 'line-height': '18.9px' },
    '14a21': { 'font-size': '14px', 'line-height': '21px' },
    '15a22': { 'font-size': '15px', 'line-height': '22.5px' },
    '16a21': { 'font-size': '16px', 'line-height': '21.6px' },
    '16a24': { 'font-size': '16px', 'line-height': '24px' },
    '16a27': { 'font-size': '16px', 'line-height': '27.2px' },
    '18a27': { 'font-size': '18px', 'line-height': '27px' },
    '20a26': { 'font-size': '20px', 'line-height': '26px' },
    '24a31': { 'font-size': '24px', 'line-height': '31.2px' },
    '30a39': { 'font-size': '30px', 'line-height': '39px' },
  };

  Object.entries(sizes).forEach(([key, value]) => {
    utilities[`.t${key}`] = {
      'font-size': value['font-size'],
      'line-height': value['line-height'],
    };
  });

  addUtilities(utilities, ['responsive', 'hover']);
});
