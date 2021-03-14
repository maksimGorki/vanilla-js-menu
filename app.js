const heroesMenu = [
  {
    id: 1,
    title: "queen of pain",
    category: "intelligence",
    price: 2,
    img: "./images/queenofpain.png",
    desc: `The Queen of Pain lets loose a piercing scream around her, damaging nearby enemies.`,
  },
  {
    id: 2,
    title: "shadow fiend",
    category: "agility",
    price: 3,
    img: "./images/nevermore.png",
    desc: `Shadow Fiend gathers his captured souls to release them as lines of demonic energy.`,
  },
  {
    id: 3,
    title: "keeper of the light",
    category: "intelligence",
    price: 3,
    img: "./images/kotl.png",
    desc: `Channels light energy, building power the longer it's channeled. Once released, a wave is sent forth that deals damage and gives vision in its path.`,
  },
  {
    id: 4,
    title: "anti mage",
    category: "agility",
    price: 1,
    img: "./images/antimage.png",
    desc: `Burns an opponent's mana on each attack. Mana Break deals 50% of the mana burned as damage to the target.`,
  },
  {
    id: 5,
    title: "abaddon",
    category: "strength",
    price: 2,
    img: "./images/abaddon.png",
    desc: `Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.`,
  },
  {
    id: 6,
    title: "kunkka",
    category: "strength",
    price: 2,
    img: "./images/kunkka.png",
    desc: `Kunkka's legendary sword grants increased damage and cleaves a large area of effect in front of him for a single strike.`,
  },
  {
    id: 7,
    title: "tuskar",
    category: "strength",
    price: 1,
    img: "./images/tusk.png",
    desc: `Tusk compresses shards of ice into a ball of frozen energy that damages all enemies it comes in contact with.`,
  },
  {
    id: 8,
    title: "gyrocopter",
    category: "agility",
    price: 3,
    img: "./images/gyrocopter.png",
    desc: `Launches a salvo of rockets at nearby enemy units in a radius around the Gyrocopter. `,
  },
  {
    id: 9,
    title: "death prophet",
    category: "intelligence",
    price: 3,
    img: "./images/deathprophet.png",
    desc: `Sends a swarm of winged beasts to savage enemy units in front of Death Prophet.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
  displayHeroes(heroesMenu);
  displayMenuButtons();
});

const displayHeroes = (heroesArray) => {
  let displayMenu = heroesArray.map((hero) => {
    return `<article class="menu-item">
    <img src=${hero.img} class="photo" alt=${hero.title} />
    <div class="item-info">
      <header>
        <h4>${hero.title}</h4>
        <h4 class="price">
          <i class="star${hero.price}x"></i>
        </h4>
      </header>
      <p class="item-text">
        ${hero.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

const displayMenuButtons = () => {
  const categories = heroesMenu.reduce(
    (total, hero) => {
      if (!total.includes(hero.category)) {
        total.push(hero.category);
      }
      return total;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // console.log(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      category === "all"
        ? displayHeroes(heroesMenu)
        : displayHeroes(
            heroesMenu.filter((hero) => hero.category === category)
          );
    });
  });
};
