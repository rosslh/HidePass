var styles='input[type=password]{color:transparent !important;} input[type=password]:focus {border:2px solid red !important;}';

var styleTag=document.createElement('style');
if (styleTag.styleSheet)
    styleTag.styleSheet.cssText=styles;
else
    styleTag.appendChild(document.createTextNode(styles));

document.getElementsByTagName('head')[0].appendChild(styleTag);
