// babel.config.js
module.exports = function(api) {
    api.cache(true);
  
    const presets = [
      [
        '@babel/preset-env',
        {
          targets: 'last 2 versions, > 1%',
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ];
  
    const plugins = ['@babel/plugin-proposal-class-properties'];
  
    return {
      presets,
      plugins,
    };
  };
  