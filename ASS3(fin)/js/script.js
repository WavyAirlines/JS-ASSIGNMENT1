// Program variables/constants
// We need to grab the whole form element
// The form id is "smoothieForm" ... not "smoothie-form"
//const smoothieform = document.querySelector("#smoothie-form");
const OrderPlaced = document.querySelector("#Order");
const pb = document.querySelector("#peanut-butter");
const milk = document.querySelector("#milk");
const yogurt = document.querySelector("#yogurt");
const protein = document.querySelector("#protein-powder");
//const size = document.getElementById("size");
const output = document.getElementById("output");
const cupimg = document.getElementById("cupimg");

// const ingredients = (pb, milk, yogurt, protein);
const size = document.querySelector("size");
const flavor = document.querySelector("#sFlavor");
class Smoothie {
    size;
    ingredients;
    flavor;
    // Try to get the Smoothie Flavor!
    constructor(size, ingredients, flavor) {
        this.size = size;
        this.ingredients = ingredients;
        this.flavor = flavor;
    }

    serveit(output) {
        const cup = document.createElement("img");
        let cupimg = 'images/Smoothieimg.png';
        document.getElementById("output").style.display = "block";

        let cupsize;
        // The below case values have to match your HTML form values which are Title Case (I changed them below)
        switch(this.size) {
            case 'Small' :
                cupsize = '100';
                break;
            case 'Medium' :
                cupsize = '125';
                break;
            case 'Large' :
                cupsize = '150';
                break;
            default :
                cupsize = '100';
        }
        cup.setAttribute('height', cupsize);
        // Ingredients is an array, so we need a loop
        let ingredientList = ", ";
        for (let i = 0; i < this.ingredients.length; i ++) {
            //ingredientList += `${this.ingredients[i].value}, `;
        }
        this.ingredients.forEach((item) => {
            //console.log(item);
            ingredientList += `${item.value} `;
        });
        if (this.ingredients.length === 0) ingredientList = " nothing :("
        console.log(`A ${this.size}, ${this.flavor} Smoothie with ${ingredientList}`);
        let description = `A ${this.size}, ${this.flavor} Smoothie with${ingredientList}`;
        output.textContent = description;
    }
}
//let CustomerOrder = new Smoothie(size, ingredients);
//CustomerOrder.serveit();

// Functions (we only need one - this is called when the Event Listener below is fired)
function createSmoothie(event){
    // prevent the form from sending the browser to the URL in the action attribute (default behavior)
    // event.preventDefault();
    // Grab values from the form that the user typed in
    let size = document.querySelector("#size").value;
    // Only nab the checkbox items that are checked (the below uses querySelectorAll)...it is an array
    let ingredients = document.querySelectorAll('[name="ingredients"]:checked');
    let flavor = document.querySelector("#sFlavor").value;
    // Create a new Smoothie object using the size, and ingredients from the form
    let CustomerOrder = new Smoothie(size, ingredients, flavor);
    // Call up the serveit method to see the smoothie
    CustomerOrder.serveit(output);
}

// Event listeners (we only have one - when the form is submitted)
    // let form = document.getElementById("smoothieForm");
        let form = document.getElementById("smoothieForm");
        form.addEventListener("submit", createSmoothie);




