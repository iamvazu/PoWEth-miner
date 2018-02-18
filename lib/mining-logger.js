


  var LocalStorage = require('node-localstorage').LocalStorage;


    const fs   = require('fs');
    const path = require('path');


var logStorage;

var errorLog = [];

var stdLog = [];

module.exports =  {

  init(vault)
  {
    this.vault = vault;
    logStorage = new LocalStorage(vault.getpowethLocalFolderPath()+'/logs');

    if(this.logsExist())
    {
      errorLog = JSON.parse(logStorage.getItem('error') )  ;
      stdLog = JSON.parse(logStorage.getItem('stdout') )  ;
    }


    this.saveLogs();
  },


  logsExist()
  {
    if (!fs.existsSync(this.vault.getpowethLocalFolderPath()) || !fs.existsSync(this.vault.getpowethLocalFolderPath() +'/logs' )  ){
      return false;
    }

    if (!fs.existsSync(this.vault.getpowethLocalFolderPath()+'/logs/stdout' ) ){
      return false;
    }

    return true;
  },

  appendToStandardLog(s)
  {
    var newline = ""
    newline += this.getDateTime()
    newline += s
    newline += '\\n';

    stdLog.push(newline)
    this.saveLogs();
  },


  appendToErrorLog(s)
  {
    var newline = ""
    newline += this.getDateTime()
    newline += s
    newline += '\\n';

    errorLog.push(newline)
    this.saveLogs();
  },

  saveLogs()
  {

    logStorage.setItem('stdout',JSON.stringify(stdLog));
    logStorage.setItem('error',JSON.stringify(errorLog));

  },


   getDateTime() {

      var date = new Date();

      var hour = date.getHours();
      hour = (hour < 10 ? "0" : "") + hour;

      var min  = date.getMinutes();
      min = (min < 10 ? "0" : "") + min;

      var sec  = date.getSeconds();
      sec = (sec < 10 ? "0" : "") + sec;

      var year = date.getFullYear();

      var month = date.getMonth() + 1;
      month = (month < 10 ? "0" : "") + month;

      var day  = date.getDate();
      day = (day < 10 ? "0" : "") + day;

      return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

  }



}