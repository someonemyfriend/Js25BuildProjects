const data = [
    {
        id : '1',
        question: "What are accordion components?",
        answear: "Accordion components are user interface elements"
    },
    {
        id : '2',
        question: "What are they used for?",
        answear: "Accordion components are user interface elements"
    },
    {
        id : '3',
        question: "Accordion as a musical instrument",
        answear: "Accordion components are user interface elements"
    },
    {
        id : '4',
        question: "What4 are accordion components?",
        answear: "Accordion components are user interface elements"
    }, {
        id : '5',
        question: "What5 are accordion components?",
        answear: "Accordion components are user interface elements"
    },
    {
        id : '6',
        question: "What6 are accordion components?",
        answear: "Accordion components are user interface elements"
    },

];

const accordionWrapper = document.querySelector('.accordion');

function createAccordionDate() {
    accordionWrapper.innerHTML = data.map(dataItem =>`
    <div class="accordion_item">
    <div class="accordion_title">
    <h3>${dataItem.question}</h3>
    <i class="fa-solid fa-arrow-down"></i>
    </div>
    <div class="accordion_content">
    <p>${dataItem.answear}</p>
    </div>
    </div>
    `).join("");
} 

createAccordionDate();

const getAccordionTitle = document.querySelectorAll('.accordion_title');

console.log("==================================================");
console.log(getAccordionTitle);
console.log("==================================================");

getAccordionTitle.forEach(currentItem => {
    currentItem.addEventListener('click', (event)=> {
        if (currentItem.classList.contains("active")) {
            currentItem.classList.remove("active")
        } else {
            let getAlreadyAddedActiveClass = document.querySelectorAll('.active');

            getAlreadyAddedActiveClass.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active');
            });

            currentItem.classList.add("active");
        }
    })
})






















