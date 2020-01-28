
// General DropDown
const elementDropdownGeneralLink = document.querySelectorAll("#menuWrap #lnkMPERSONAL")[0];

// Drop down Items
const elementDropdownGeneralMenu = document.querySelectorAll("#divMPERSONAL")[0];

// Drop down Menu
const elementDropdownGeneralMenuItems = document.querySelectorAll("#divMPERSONAL ul li");



// Requests DropDown
const elementDropdownRequestsLink = document.querySelectorAll("#menuWrap #lnkMSUPPORT")[0];

// Drop down Items
const elementDropdownRequestsMenu = document.querySelectorAll("#divMSUPPORT")[0];

// Drop down Menu
const elementDropdownRequestsMenuItems = document.querySelectorAll("#divMSUPPORT ul li");



// Analytics DropDown
const elementDropdownAnalyticsLink = document.querySelectorAll("#menuWrap #lnkMCOGNOS")[0];

// Drop down Items
const elementDropdownAnalyticsMenu = document.querySelectorAll("#divMCOGNOS")[0];

// Drop down Menu
const elementDropdownAnalyticsMenuItems = document.querySelectorAll("#divMCOGNOS ul li");


// SETUP

// Setup General Dropdown
initDropDownButton(elementDropdownGeneralLink, elementDropdownGeneralMenu, elementDropdownGeneralMenuItems);

// Setup Request Dropdown
initDropDownButton(elementDropdownRequestsLink, elementDropdownRequestsMenu, elementDropdownRequestsMenuItems);

// Setup Analytics Dropdown
initDropDownButton(elementDropdownAnalyticsLink, elementDropdownAnalyticsMenu, elementDropdownAnalyticsMenuItems);

/**
 * Binds eventlisteners and CSS classes to elements;
 * @param {HtmlElement} button - The dropdown button
 * @param {HtmlElement} button - Container of dropdown content
 * @param { Array of HtmlElement} menuItems - An array of each menu item
 **/
function initDropDownButton(button, menu, menuItems) {
	// Drop Down Link
		
	button.classList.add('button');
	button.innerHTML = `<span>${button.innerHTML}</span>`
	
	// elementDropdownGeneral.classList.add('button');
	button.innerHTML += `<span class="icon is-small">
	        <i class="fas fa-angle-down" aria-hidden="true"></i>
	      </span>`;
	
	// Counts how many times the dropdown link onclick function has fired
	let toggledCount = 0;
	
	button.onclick = () => {
		console.log("dropdown click");
		if (toggledCount === 0) {
			console.log("False");
			menu.style = `transform: translateX(0px)`;
			button.setAttribute("data-toggle-dropdown", "true");
			
			// Switch Icon
			const icon = button.querySelector('i');
			icon.classList.remove("fa-angle-down");
			icon.classList.add("fa-angle-up");
		}
		
		toggledCount += 1;
		return false;
	}
	
	document.addEventListener('click', (e) => {
		
		console.log("doc click");
		if (toggledCount > 1) {
			console.log("data true")
			menu.style = `transform: translateX(-1000px)`;
			button.setAttribute("data-toggle-dropdown", "false");
			
			// Switch Icon
			const icon = button.querySelector('i');
			icon.classList.remove("fa-angle-up");
			icon.classList.add("fa-angle-down");
			
			toggledCount = 0;
		} else if (toggledCount === 1) {
			toggledCount += 1;
		}
		
	});

	
	
	let menuitems = [...menuItems];
	
	console.log(menuitems);
	
	menuitems.forEach((item) => {
		console.log(item);
		item.classList.add("dropdown-item");
	});
}