"use strict";

const menuData = {
  items: []
};

const laptops = [
  {
    size: 13,
    color: "white",
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];

const source = document.querySelector('#built-template').innerHTML.trim();
const template = Handlebars.compile(source);


const container = document.querySelector('#content-placeholder');

let btnFilter = document.querySelector("a[type=submit]");

let filters = { size: [], color: [], release_date: [] };

function statusChecked(event) {
  event.preventDefault();
  event.stopPropagation();
  let sizes = document.querySelector("#size");
  let colors = document.querySelector("#color");
  let years = document.querySelector("#year");  

  filters.size = [...sizes.querySelectorAll("input")]
    .filter(_ => _.checked)
    .map(_ => Number.parseInt(_.value));

  filters.color = [...colors.querySelectorAll("input")]
    .filter(_ => _.checked)
    .map(_ => _.value);

  filters.release_date = [...years.querySelectorAll("input")]
    .filter(_ => _.checked)
    .map(_ => Number.parseInt(_.value));

  filterCards();

  return false;
}

function filterCards() {
  menuData.items = laptops.filter(el => {
    if (
      filters.size.length == 0 &&
      filters.color.length == 0 &&
      filters.release_date.length == 0
    ) {
      return false;
    } else {
      return (
        (filters.size.includes(el.size) || filters.size.length == 0) &&
        (filters.color.includes(el.color) || filters.color.length == 0) &&
        (filters.release_date.includes(el.release_date) ||
          filters.release_date.length == 0)
      );
    }
  });
  const markup = template(menuData);

  container.innerHTML = markup;
}

btnFilter.addEventListener("click", statusChecked);


// const source = document.querySelector('built-template').innerHTML.trim();
// const tmp = Handlebars.compile(source);
// const markup = tmp(laptops);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;