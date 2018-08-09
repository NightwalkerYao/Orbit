/**	Genoha Torrent Tracker
**	jS for Default Theme by NightWalker Yao (http://about.me/nightwalker.y)
**/
document.addEventListener('DOMContentLoaded', function() {
	var leftSidesElements = document.querySelectorAll('.sidenav');
    var LFSNInstances = M.Sidenav.init(leftSidesElements, {});
    var COLelems = document.querySelectorAll('.collapsible.expandable');
    var COLinstances = M.Collapsible.init(COLelems,{accordion: true});
    var DDelems = document.querySelectorAll('.dropdown-trigger');
    var DDinstances = M.Dropdown.init(DDelems, {hover:false, alignment:'right', closeOnClick:true, constrainWidth:false,coverTrigger:false,inDuration:500,outDuration:400});
    var FSelems = document.querySelectorAll('select');
    var FSinstances = M.FormSelect.init(FSelems, {/*classes: 'formSelect0'*/});
});
