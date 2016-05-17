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
    //What is Proxy and Why we use Proxy
    var data=indexModel.getSomeData({"name":"venkat"},this.proxy('manipulateData'));
    
    //$('.main-section').remove(); 
    //controllerInstance.destroy();
    //$('.main-section').removeData();    
    //
  },
  manipulateData:function(res){
    console.log(res);
    //Do I Normally Render the View.
    $('#js-main').html(can.view(this.options.view,res));
  }
  
});