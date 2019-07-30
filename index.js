$(document).ready(() => {
  var items = [
    {
      "step": 0,
      "selector": "#step1",
      "selectorNext": "#step4",
      "title": "Ajaxed title from server",
      "content": "I was found because I have selector=#demo_stopOn",
      "width": "400px",
      "placement": "right"
    },
    {
      "step": 1,
      "selector": "#step2",
      "selectorNext": "#step3",
      "title": "Ajaxed 2 title from server",
      "content": "I was found because I have selector=#demo_stopOn",
      "width": "400px",
      "placement": "right"
    },
    {
      "step": 2,
      "selector": "#step3",
      "selectorNext": "#step4",
      "title": "Ajaxed title from server",
      "content": "I was found because I have selector=#demo_stopOn",
      "width": "400px",
      "placement": "right"
    },
    {
      "step": 3,
      "selector": "#step4",
      "selectorNext": "#step4",
      "title": "Ajaxed title from server",
      "content": "I was found because I have selector=#demo_stopOn",
      "width": "400px",
      "placement": "right"
    },
    {
      "step": 4,
      "selector": "#step5",
      "selectorNext": "#step5",
      "title": "Ajaxed Title 5",
      "content": "I was found because I have selector=#demo_ajax",
      "width": "400px",
      "placement": "botton"
    }
  ];
  var options = {
    items: items
  }

  bootstro.start('', options);
  items.map(item => {
    var next_el = item.selectorNext;
    var selector_el = item.selector;
    if($(next_el).is(":visible")){
      $(selector_el).click(() => {
        bootstro.go_to($(next_el).attr('data-bootstro-step'));
      });
    }else{
      var modal_el = $(next_el).closest('.modal');
      if (modal_el.size() > 0) {
        $(modal_el).on('shown.bs.modal', function () {
          bootstro.go_to($(next_el).attr('data-bootstro-step'));
        });
      }
    }
  })
});