var _ = require('lodash');
var fs = require('fs');
var path = require('path');


module.exports ={
  _path: '',
  _filenames: [],
  _jsfiles:[],
  _cssfiles:[],

  path: function(_dir) {
    this._path = _dir;
    this.filename();
    return this;
  },
  filename: function() {
    this._filenames=fs.readdirSync(this._path);
    return this;
  },
  extension: function() {
      this._jsfiles=_.filter(this._filenames,function(file){
          return _.endsWith('.js');
      });
      this._cssfiles=_.fitler(this._filenames,function(file){
          return _.endsWith('.css');
      });
    return this;
  },
  getCSS: function(_index) {
    this._cssfiles=_.filter(this._filenames,function(file){
      return path.extname(file).toLowerCase()==='.css';
    });
    this._cssfiles=!_.isUndefined(_index)?this._cssfiles[_index]:this._cssfiles;
    return this._cssfiles;
  },
  getJS: function(_index) {
    this._jsfiles=_.filter(this._filenames,function(file){
        return path.extname(file).toLowerCase()==='.js';
    });
    this._jsfiles=!_.isUndefined(_index)?this._jsfiles[_index]:this._jsfiles;

    return  this._jsfiles;
  }

};
