class App{
  constructor(){
    this.save = new Library();
    this.render = new Render();
    //this.toRender();
    this.applyEventHandlers();
  }
  applyEventHandlers() {
    $('li').on('click', function () {
      $('li').removeClass('liSelected');
      $(this).addClass('liSelected');
      //this.render.renderGettingStarted();
      // alert($('.liSelected').index());
    })
  }
}
