# Auto-Inculde

## Install

```bash
npm i -S auto-include
```


## Usage

```bash
var autoinclude=require('auto-include');
console.log(autoinclude);
var jsfiles=autoinclude.path(_path).getJS(_index); // by default array either string (_index==0||null)
var cssfiles=autoinclude.path(_path).getCSS(_index)  // by default array either string (_index==0||null)

or

global.jsfile=autoinclude.path(path.join(__dirname, 'build/dist/js')).getJS(0);
global.cssfile=autoinclude.path(path.join(__dirname, 'build/dist/css')).getCSS(0);


layout:

<link rel="stylesheet" href="...print.....cssfile......" />
<script type="text/javascript" src="...print.....jsfile......"></script>

```

## Purpose to include dist folder dynamic filename into your layout.
