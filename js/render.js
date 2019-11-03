class Render{
  constructor(){
    this.downloadsArray = ['Library.js v1'];
    this.overVeiwArray = ['Introduction','Getting Started']
    this.methodsArray = ['sessionClear()', 'sessionGet(key)', 'sessionSave(key,value)','sessionDelete(key)',
      'localClear()', 'localGet(key)', 'localSave(key,value)', 'localDelete(key)', 'storageClear()','randomBetween(min,max)']
    this.renderArray = [this.renderIntroduction, this.renderGettingStarted];
    this.renderMethodsArray = [this.renderSessionClear, this.renderSessionGet, this.renderSessionSave, this.renderSessionDelete, this.renderLocalClear, this.renderLocalGet, this.renderLocalSave, this.renderLocalDelete, this.renderStorageClear,this.renderRandomBetween]
    this.downloadsRender = [this.renderDownloadv1]
    this.renderStart();
    this.header = null;
    this.catchLine = null;
    this.pSection = null;
    }
  renderStart(){
    this.header = $('#header');
    this.catchLine = $('#catchLine');
    this.pSection = $('#rightPSection');
    let overviewList = $('#overviewList'),
      methodsList = $('#methodsList'),
      downloadsList = $('#downloadsList');
    for(let index = 0; index<this.overVeiwArray.length;index++){
      let newLi = $('<li>').on('click', this.renderArray[index]);
      newLi.text(this.overVeiwArray[index]);
      overviewList.append(newLi);
    }
    $('#overviewList li:nth-child(1)').addClass('liSelected');
    for (let index = 0; index < this.methodsArray.length; index++) {
      let newLi = $('<li>').on('click', this.renderMethodsArray[index]);
      newLi.text(this.methodsArray[index]);
      methodsList.append(newLi);
    }
    for (let index = 0; index < this.downloadsArray.length; index++) {
      let newLi = $('<li>').on('click', this.downloadsRender[index]);
      newLi.text(this.downloadsArray[index]);
      downloadsList.append(newLi);
    }
    this.renderIntroduction();
  }
  renderIntroduction(){
    $('#rightPSection *').remove();
    $('#header').text('Introduction');
    $('#catchLine').text('This is a class JS library made by Roger Enand');
    let newP = $('<p>').addClass('contents').text(`Using this JS library you will be able to save, retrieve,
    and delete both session and local data stored in the users browser.
    Using the provided methods, the task of retrieving and saving data is easy.
    Normally for retrieveing or saving, you have to check if the data exists,
    and if so, get or save.These methods do that for you to make it very simple.`)
    $('#rightPSection').append(newP)
  }
  renderGettingStarted(){
    $('#header').text('Getting Started');
    $('#catchLine').text('Guide for those getting started or refreshing their knowledge');
    $('#rightPSection *').remove();
    let newP = $('<p>').addClass('contents').text(`Thank you for choosing Library.js, a JS class library
    designed to help with data storage. It makes data storage much easier by letting you save recive and delete data
    while validating it and error handling. Rather than using many lines of code to do each thing, this
    library allows you to do it all in one line. By using clases you can have access to the library only where you need.`),
    newH1 = $('<h2>').addClass('contents').text('Instalation Guide');
    $('#rightPSection').append(newP,newH1)
  }
  renderSessionClear(){
    $('#rightPSection *').remove();
    $('#header').text('sessionClear() Method');
  }
  renderSessionGet() {
    $('#rightPSection *').remove();
    $('#header').text('sessionGet() Method');
  }
  renderSessionSave() {
    $('#rightPSection *').remove();
    $('#header').text('sessionSave() Method');
  }
  renderSessionDelete() {
    $('#rightPSection *').remove();
    $('#header').text('sessionDelete() Method');
  }
  renderLocalClear() {
    $('#rightPSection *').remove();
    $('#header').text('localClear() Method');
  }
  renderLocalGet() {
    $('#rightPSection *').remove();
    $('#header').text('localGet() Method');
  }
  renderLocalSave() {
    $('#rightPSection *').remove();
    $('#header').text('localSave() Method');
  }
  renderLocalDelete() {
    $('#rightPSection *').remove();
    $('#header').text('localDelete() Method');
  }
  renderStorageClear() {
    $('#rightPSection *').remove();
    $('#header').text('storageClear() Method');
  }
  renderRandomBetween() {
    $('#rightPSection *').remove();
    $('#header').text('randomBetween() Method');
  }
  renderDownloadv1() {
    $('#rightPSection *').remove();
    $('#header').text('Download Version 1');
  }
}
