/*Orbit Project - Open BitTorrent Tracker
/* By Inspirates WS
*/
var subCategoriesNames = ['Tout', ['Tout', 'Musiques', 'Concerts', 'Comédies'], ['Tout', 'Films', 'Séries TV', 'Emissions TV', 'Documentaires', 'Animations', 'Animations Séries', 'Concerts', 'Sports'], ['Tout', 'Livres', 'Magazines', 'Presses', 'Mangas', 'BD'], ['Tout', 'Formations', 'Android', 'Windows', 'Linux', 'Web', 'Emulateurs'], ['Tout', 'Android', 'Windows', 'Consoles', 'Linux'], ['Tout', 'Porn XXX', 'E-books', 'Parodies', 'Hentai']],
subCategoriesIds = ['1', ['2', '3', '4', '5'], ['6', '7', '8', '9', '10', '11', '12', '13', '14'], ['15', '16', '17', '18', '19', '20'], ['21', '22', '23', '24', '25', '26', '27'], ['28', '29', '30', '31', '32'], ['33', '34', '35', '36', '37']],
idx = 0,
subsName;

$(document).ready(function(){
	$('#category').on('change', function(){
		idx = this.selectedIndex;
		if(idx > 0){
			$('select#subcategory').html('<option value="0">Choisissez une sous-catégorie</option>').attr('disabled', false)
			for(subsName in subCategoriesNames[idx]){
				$('select#subcategory').append('<option value="'+subCategoriesIds[idx][subsName]+'">'+subCategoriesNames[idx][subsName]+'</option>')
			}
		}else{
			$('select#subcategory').html('<option value="0">Choisissez une sous-catégorie</option>').attr('disabled', true)
		}
		var subcatSelectElem = document.querySelectorAll('#subcategory');
    	var subcatSelectElem = M.FormSelect.init(subcatSelectElem, {});
	})
});
