/**	Genoha Torrent Tracker
**	jS for Default Theme by NightWalker Yao (http://about.me/nightwalker.y)
**/
document.addEventListener('DOMContentLoaded', function() {
	var leftSidesElements = document.querySelectorAll('.sidenav');
    var LFSNInstances = M.Sidenav.init(leftSidesElements, {});
    var COLelems = document.querySelectorAll('.collapsible');
    var COLinstances = M.Collapsible.init(COLelems,{accordion: true});
    var DDelems = document.querySelectorAll('.dropdown-trigger');
    var DDinstances = M.Dropdown.init(DDelems, {hover:false, alignment:'right', closeOnClick:false, constrainWidth:false,coverTrigger:false,inDuration:500,outDuration:400});
    var FSelems = document.querySelectorAll('select');
    var FSinstances = M.FormSelect.init(FSelems, {/*classes: 'formSelect0'*/});
		var Modalelems = document.querySelectorAll('.modal');
    var Modalinstances = M.Modal.init(Modalelems, {});
});

$(document).ready(function(){
	$('.checkbox_select_all').change(function(){
		let chkd = $(this).is(':checked') ? true : false;
		$(this).closest('.checkboxes_wrapper').find(".checkbox_child").attr('checked', chkd)
	})

	$('#cm1 .category-folder,.context_l1 .category-folder').each(function(){
		$(this).contextMenu('.contextMenu1', {triggerOn: 'contextmenu'});
	});

	var item_props = null;

	$('.context_l2 .category-folder').each(function(){
		$(this).contextmenu(function(){
			var item_props = $(this).parent().attr('data-properties');
			if(item_props != null){
				item_props = JSON.parse(item_props);
				$('.item_props_name').html(item_props.name);
				$('.item_props_level').text(item_props.level);
				$('.item_props_created').text(item_props.created);
				$('.item_props_author').text(item_props.author);
				$('.item_props_subcats').text(item_props.subcats);
				$('.item_props_items').text(item_props.items);
				$('.item_props_published').text(item_props.published ? "Oui" : "Non");
			}
		})

		$(this).contextMenu('.contextMenu2', {triggerOn: 'contextmenu'});
	});

	$('.user-rank .user-rank-icon').contextMenu('.rankContextMenu', {triggerOn: 'contextmenu'});

	$('.sectionOptions').contextMenu('.sectionOptContext', {triggerOn: 'click'});

	$('.xplore-folder').contextMenu('.xploreFolderContext', {triggerOn: 'contextmenu'});

	$('.xplore-file').contextMenu('.xploreFileContext', {triggerOn: 'contextmenu'});

})
