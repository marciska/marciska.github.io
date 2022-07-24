/*!
 * Custom JS file to add a copy button by Marco Omainska
 * Copyright 2022 Marco Omainska - marciska.com
*/

var codeBlocks = document.querySelectorAll('[data-copyable=true], .highlight pre');

codeBlocks.forEach((codeBlock, index) => {
  // save code text into variable
  const code = codeBlock.innerText.trim();

  // create button
  var copyButton = document.createElement('button');
  copyButton.className = 'copy_code_button';
  copyButton.type = 'button';
  copyButton.ariaLabel = 'Copy code to clipboard';
  copyButton.innerText = 'Copy';

  // Accessible alert whose inner text changes when we copy.
  // const copiedAlert = document.createElement('span');
  // copiedAlert.setAttribute('role', 'alert');
  // copiedAlert.classList.add('screen-reader-only');
  
  // append button to container
  codeBlock.append(copyButton);
  // codeBlock.append(copiedAlert);

  copyButton.addEventListener('click', function () {
    // copy code to clipboard
    window.navigator.clipboard.writeText(code);
    
    // update button/alert text
    const { innerText: originalText } = copyButton;
    copyButton.innerText = 'Copied';
    // copiedAlert.innerText = 'Copied';

    // toggle class for additional styling
    copyButton.classList.add('copied');

    // reset button after specific timeout
    const copyDuration = 3000;
    setTimeout(() => {
      // copiedAlert.innerText = '';
      copyButton.innerText = originalText;
      copyButton.classList.remove('copied');
    }, copyDuration);
  });
});
