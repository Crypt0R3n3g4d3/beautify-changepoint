
let elementDropdownGeneral = document.querySelectorAll("#menuWrap #liMPERSONAL")[0];


let elementDropdownGeneralLink = document.querySelectorAll("#menuWrap #lnkMPERSONAL")[0];

// Drop down Items
let elementDropdownGeneralItems = document.querySelectorAll("#divMPERSONAL")[0];

// Drop down Menu
let elementDropdownGeneralMenu = document.querySelectorAll("#divMPERSONAL ul")[0];


// Drop Down Link

// Counts how many times the dropdown link onclick function has fired
let toggledCount = 0;

elementDropdownGeneralLink.onclick = () => {
	if (toggledCount === 0) {
		console.log("Data Drop Down False");
		elementDropdownGeneralItems.style = `transform: translateX(0px)`;
	}
	
	toggledCount += 1;
	return false;
}

document.addEventListener('click', (e) => {
	if (toggledCount > 1) {
		console.log("Drop down data true")
		elementDropdownGeneralItems.style = `transform: translateX(-1000px)`;
		elementDropdownGeneralLink.setAttribute("data-toggle-dropdown", "0");
		toggledCount = 0;
	}
});

elementDropdownGeneralLink.classList.add('button');

elementDropdownGeneralLink.innerHTML = `<span>${elementDropdownGeneralLink.innerHTML}</span>`



// elementDropdownGeneral.classList.add('button');
elementDropdownGeneralLink.innerHTML += `<span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>`;
      
console.log(elementDropdownGeneralLink);
      



// dropdown-menu


