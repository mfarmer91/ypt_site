//Add dropdown #nav for mobile versions.

//Cycle through each nav, and create options within a select.
//Switch button selected property when nav is navigated to.
//Change to correct page.

var $nav = $("nav");
var $select = $("<select id='dropdown_menu'></select>");

$nav.append($select);

$("nav a").each(function() {
    var $anchor = $(this);
    var $option = $("<option></option>");
    
    if ($anchor.parent().hasClass("selected")){
        $anchor.prop("selected", true);
    }
    
    $option.val($anchor.attr("href"));
    var $anchorText = $anchor.text();
    
    $option.text($anchorText);
    $select.append($option);
})

$select.change(function() {
    window.location = $select.val();
})