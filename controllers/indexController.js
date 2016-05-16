var indexController = can.Control({
  defaults: {
    view: '/views/index.mustache',
    name:''
  }
}, {
  init: function(el) {
    console.log(el);
  },
  '.test click':function(el,ev){
    ev.preventDefault();
    ev.stopPropagation();
    console.log('test this');
    $(el).html('Adding Some Text Here in Controller');
  },
  '.testanchor click':function(el,ev){
    console.log('test this');
    $(el).html('Adding Some Text Here in Controller');
  },
  '#js-main click':function(el,ev){

    //When someone clicks on this change the View to Load Welcome to WonderWe
    console.log(el); 
    console.log(this.options.name);    
    $(el).html(can.view(this.options.view,{}));
    //$('.main-section').remove(); 
    //controllerInstance.destroy();
    //$('.main-section').removeData();    
    //
  }
  
});