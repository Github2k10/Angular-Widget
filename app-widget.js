(function() {
  // Function to load a script
  function loadScript(src, onload) {
      var script = document.createElement('script');
      script.src = src;
      script.onload = onload;
      document.head.appendChild(script);
  }

  // Function to load a stylesheet
  function loadStylesheet(href) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
  }

  // Path to your hosted files
  var basePath = 'https://github2k10.github.io/Angular-Widget/dist/'; // Replace with your actual base path
  var scriptFiles = [
      basePath + 'runtime.d599c23de0356b38.js',
      basePath + 'polyfills.5c19a47cbefc780b.js',
      basePath + 'main.f6da18913a2d8e28.js'
  ];
  var cssFile = basePath + 'styles.ef46db3751d8e999.css';

  // Load the stylesheet
  loadStylesheet(cssFile);

  // Load the scripts in sequence
  function loadScriptsSequentially(scripts, index) {
      if (index < scripts.length) {
          loadScript(scripts[index], function() {
              loadScriptsSequentially(scripts, index + 1);
          });
      } else {
          // All scripts loaded, initialize the chatbot
          var chatbotContainer = document.createElement('div');
          chatbotContainer.id = 'chatbot-container';
          document.body.appendChild(chatbotContainer);
      }
  }

  loadScriptsSequentially(scriptFiles, 0);
})();
