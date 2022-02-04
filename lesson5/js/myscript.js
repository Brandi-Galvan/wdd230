function assignAddChap(){
	function addChapter(){
		const list = document.querySelector('.list'); 
		const input = document.querySelector('#favorite');
		const item = document.createElement('li'); 
		const button = document.createElement('button'); 
		
			
		item.innerText = input.value; 
		
		
		button.innerText = '❌'; 
		
		
		button.addEventListener('click', x => {button.parentElement.remove()});
		
		
		item.appendChild(button); 
		
		
		list.appendChild(item); 
		
		
		input.value = ''; 
	
		
		input.focus(); 

	}
	
	document.querySelector('button').addEventListener('click',addChapter)
}

function init(){
    assignAddChap();
}

window.addEventListener('DOMContentLoaded', init);