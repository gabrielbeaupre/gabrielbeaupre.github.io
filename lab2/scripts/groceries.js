	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "eau: 1.00$",
		lactoseFree: true,
		nutFree: true,

		price: 1.00
	},
	{
		name: "boisson: 1.50$",
		lactoseFree: true,
		nutFree: true,
	
		price: 1.50
	},
	{
		name: "bonbon: 1.99$",
		lactoseFree: true,
		nutFree: true,
	
		price: 1.99
	},
	{
		name: "chocolat: 1.99$",
		lactoseFree: false,
		nutFree: true,

		price: 1.99
	},
	{
		name: "salade: 2.50$",
		lactoseFree: true,
		nutFree: true,

		price: 2.50
	},
	{
		name: "frite: 3.00$",
		lactoseFree: true,
		nutFree: true,
		price: 3.00
	},
	{
		name: "penut: 3.99$",
		lactoseFree: true,
		nutFree: false,
		price: 3.99
	},
	{
		name: "fraise: 4.99$",
		lactoseFree: true,
		nutFree: true,
		price: 4.99
	},
	{
		name: "yogourt: 5.99$",
		lactoseFree: false,
		nutFree: true,
	
		price: 5.99
	},
	{
		name: "poulet: 7.99$",
		lactoseFree: true,
		nutFree: true,

		price: 7.99
	},
	{
		name: "steak: 10.00$",
		lactoseFree: true,
		nutFree: true,
	
		price: 10.00
	},



];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "OrganiqueLactoseFree"&& (prods[i].name==="salade: 2.50$"||prods[i].name==="fraise: 4.99$"||prods[i].name==="yogourt: 5.99$")){
			product_names.push(prods[i].name);
		}
		else if (restriction == "OrganiqueNutFree" && (prods[i].name==="salade: 2.50$"||prods[i].name==="fraise: 4.99$"||prods[i].name==="yogourt: 5.99$")){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
