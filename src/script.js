/**
 * Jugo Fresh Juices - Complete Interactive Script
 * Contains full dataset strictly from the Jugo Juice Shop menu cards:
 * - Fresh Juices (Regular / With Ice Cream / Pure)
 * - Soft Milkshakes
 * - Thick Shakes
 * - Mocktails (Buy 1 Get 1 Same Tail)
 * - Falooda
 * - Fruit Salads
 * - Ice Creams
 */

// ==========================================
// 1. COMPLETE MENU DATASET FROM SHOP MENU (Lassi removed)
// ==========================================
const MENU_DATA = [
  // --- FRESH JUICES ---
  {
    id: 'fj-banana',
    name: 'Banana Juice',
    category: 'fresh-juices',
    badge: 'Fresh Juice',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 60 },
      { type: 'With Ice Cream', price: 70 },
      { type: 'Pure', price: 80 }
    ],
    price: 60,
    image: '/images/banana_juice_1784820666742.jpg',
    description: 'Fresh banana blend packed with energy.'
  },
  {
    id: 'fj-papaya',
    name: 'Papaya Juice',
    category: 'fresh-juices',
    badge: 'Fresh Juice',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 60 },
      { type: 'With Ice Cream', price: 70 },
      { type: 'Pure', price: 80 }
    ],
    price: 60,
    image: '/images/papaya_juice_1784820681502.jpg',
    description: 'Healthy fresh papaya juice for good digestion.'
  },
  {
    id: 'fj-musk-melon',
    name: 'Musk Melon Juice',
    category: 'fresh-juices',
    badge: 'Fresh Juice',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 60 },
      { type: 'With Ice Cream', price: 70 },
      { type: 'Pure', price: 80 }
    ],
    price: 60,
    image: '/images/musk_melon_juice_1784820693867.jpg',
    description: 'Cool and hydrating fresh musk melon juice.'
  },
  {
    id: 'fj-grape',
    name: 'Grape Juice',
    category: 'fresh-juices',
    badge: 'Fresh Juice',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 60 },
      { type: 'With Ice Cream', price: 70 },
      { type: 'Pure', price: 80 }
    ],
    price: 60,
    image: '/images/grape_juice_1784820707487.jpg',
    description: 'Rich dark grape juice made fresh on order.'
  },
  {
    id: 'fj-pineapple',
    name: 'Pine-Apple Juice',
    category: 'fresh-juices',
    badge: 'Fresh Juice',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 60 },
      { type: 'With Ice Cream', price: 70 },
      { type: 'Pure', price: 80 }
    ],
    price: 60,
    image: '/images/pineapple_juice_1784813176340.jpg',
    description: 'Tangy and sweet natural pineapple juice.'
  },
  {
    id: 'fj-orange',
    name: 'Orange Juice',
    category: 'fresh-juices',
    badge: 'Fresh Juice',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 60 },
      { type: 'With Ice Cream', price: 70 },
      { type: 'Pure', price: 80 }
    ],
    price: 60,
    image: '/images/orange_juice_1784813125357.jpg',
    description: 'Freshly squeezed vitamin-C rich orange juice.'
  },
  {
    id: 'sea-sapota',
    name: 'Sapota',
    category: 'fresh-juices',
    badge: 'Seasonal',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 60 },
      { type: 'With Ice Cream', price: 70 },
      { type: 'Pure', price: 80 }
    ],
    price: 60,
    image: '/images/mixed_fruit_juice_1784813218559.jpg',
    description: 'Sweet and creamy chikoo sapota juice.'
  },
  {
    id: 'sea-watermelon',
    name: 'Water Melon',
    category: 'fresh-juices',
    badge: 'Seasonal',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 60 },
      { type: 'With Ice Cream', price: 70 },
      { type: 'Pure', price: 80 }
    ],
    price: 60,
    image: '/images/watermelon_juice_1784813148567.jpg',
    description: 'Chilled refreshing watermelon drink.'
  },
  {
    id: 'sea-mango',
    name: 'Mango',
    category: 'fresh-juices',
    badge: 'Seasonal King',
    available: false,
    unavailableMessage: '🌿 Out of Season • Available During Mango Season',

    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 100 },
      { type: 'With Ice Cream', price: 120 },
      { type: 'Pure', price: 150 }
    ],
    price: 100,
    image: '/images/mango_juice_1784813136475.jpg',
    description: 'Rich ripe seasonal mango pulp juice.'
  },
  {
    id: 'sea-custard-apple',
    name: 'Custard Apple',
    category: 'fresh-juices',
    badge: 'Seasonal Special',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 100 },
      { type: 'With Ice Cream', price: 120 },
      { type: 'Pure', price: 150 }
    ],
    price: 100,
    image: '/images/mixed_fruit_juice_1784813218559.jpg',
    description: 'Delicious sitaphal custard apple pulp drink.'
  },
  {
    id: 'sea-kiwi',
    name: 'Kiwi Juice',
    category: 'fresh-juices',
    badge: 'Exotic Seasonal',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 100 },
      { type: 'With Ice Cream', price: 120 },
      { type: 'Pure', price: 150 }
    ],
    price: 100,
    image: '/images/kiwi_juice_1784820721955.jpg',
    description: 'Tangy-sweet fresh kiwi seasonal juice.'
  },
  {
    id: 'sea-dragon-fruit',
    name: 'Dragon Fruit',
    category: 'fresh-juices',
    badge: 'Exotic Seasonal',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 120 },
      { type: 'With Ice Cream', price: 130 },
      { type: 'Pure', price: 150 }
    ],
    price: 120,
    image: '/images/dragon_fruit_juice_1784820733995.jpg',
    description: 'Vibrant and healthy fresh dragon fruit drink.'
  },
  {
    id: 'sea-avocado',
    name: 'Avocado',
    category: 'fresh-juices',
    badge: 'Superfood',
    hasNutsOption: true,
    variants: [
      { type: 'Regular', price: 110 },
      { type: 'With Ice Cream', price: 130 },
      { type: 'Pure', price: 150 }
    ],
    price: 110,
    image: '/images/avocado_smoothie_1784903516863.jpg',
    description: 'Creamy nutrient-packed avocado special.'
  },

  // --- SOFT MILKSHAKES ---
  {
    id: 'sm-strawberry',
    name: 'Strawberry',
    category: 'soft-milkshakes',
    price: 120,
    badge: '⭐ Bestseller',
    image: '/images/strawberry_juice_1784813189114.jpg',
    description: 'Smooth strawberry soft milkshake with chilled milk.'
  },
  {
    id: 'sm-butterscotch',
    name: 'Butterscotch',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Soft Shake',
    image: '/images/butterscotch_shake_1784903529161.jpg',
    description: 'Creamy butterscotch soft shake with crunchy bits.'
  },
  {
    id: 'sm-pista',
    name: 'Pista',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Soft Shake',
    image: '/images/pista_shake_1784903541916.jpg',
    description: 'Pistachio flavored smooth soft milkshake.'
  },
  {
    id: 'sm-pomegranate',
    name: 'Pomegranate',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Soft Shake',
    image: '/images/pomegranate_juice_1784813164650.jpg',
    description: 'Fresh pomegranate blended soft milkshake.'
  },
  {
    id: 'sm-kiwi',
    name: 'Kiwi',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Soft Shake',
    image: '/images/kiwi_juice_1784820721955.jpg',
    description: 'Tangy-sweet kiwi soft milkshake.'
  },
  {
    id: 'sm-grape',
    name: 'Grape',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Soft Shake',
    image: '/images/grape_juice_1784820707487.jpg',
    description: 'Juicy black grape soft milkshake.'
  },
  {
    id: 'sm-black-currant',
    name: 'Black Currant',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Soft Shake',
    image: '/images/black_currant_icecream_1784903629823.jpg',
    description: 'Flavorful black currant berry soft shake.'
  },
  {
    id: 'sm-kaju',
    name: 'Kaju',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Nutty Soft Shake',
    image: '/images/almond_badam_shake_1784903553402.jpg',
    description: 'Rich cashew nuts crushed into a soft shake.'
  },
  {
    id: 'sm-banana',
    name: 'Banana',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Soft Shake',
    image: '/images/banana_juice_1784820666742.jpg',
    description: 'Fresh banana soft milkshake.'
  },
  {
    id: 'sm-chocolate',
    name: 'Chocolate',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Soft Shake',
    image: '/images/thickshake_kitkat_1784813536009.jpg',
    description: 'Classic chocolate cocoa soft milkshake.'
  },
  {
    id: 'sm-almond',
    name: 'Almond',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Badam Soft Shake',
    image: '/images/almond_badam_shake_1784903553402.jpg',
    description: 'Healthy almond badam soft milkshake.'
  },
  {
    id: 'sm-caramel',
    name: 'Caramel',
    category: 'soft-milkshakes',
    price: 120,
    badge: 'Soft Shake',
    image: '/images/butterscotch_shake_1784903529161.jpg',
    description: 'Silky sweet caramel soft milkshake.'
  },
  {
    id: 'sm-american',
    name: 'Dry Fruits Soft Shake',
    category: 'soft-milkshakes',
    price: 120,
    badge: '⭐ Bestseller',
    image: '/images/almond_badam_shake_1784903553402.jpg',
    description: 'Rich dry fruits blend soft shake.'
  },

  // --- THICK SHAKES ---
  {
    id: 'ts-strawberry',
    name: 'Strawberry Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: '⭐ Bestseller',
    image: '/images/strawberry_juice_1784813189114.jpg',
    description: 'Dense and creamy strawberry thick shake.'
  },
  {
    id: 'ts-butterscotch',
    name: 'Butterscotch Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/butterscotch_shake_1784903529161.jpg',
    description: 'Butterscotch ice cream thick shake with crunch.'
  },
  {
    id: 'ts-pista',
    name: 'Pista Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/pista_shake_1784903541916.jpg',
    description: 'Pistachio ice cream rich thick shake.'
  },
  {
    id: 'ts-pomegranate',
    name: 'Pomegranate Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/pomegranate_juice_1784813164650.jpg',
    description: 'Thick pomegranate fruit shake.'
  },
  {
    id: 'ts-blackcurrant',
    name: 'Black Currant Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/black_currant_icecream_1784903629823.jpg',
    description: 'Black currant berry thick shake.'
  },
  {
    id: 'ts-grape',
    name: 'Grape Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/grape_juice_1784820707487.jpg',
    description: 'Dark grape creamy thick shake.'
  },
  {
    id: 'ts-orange',
    name: 'Orange Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/orange_juice_1784813125357.jpg',
    description: 'Zesty orange cream thick shake.'
  },
  {
    id: 'ts-kiwi',
    name: 'Kiwi Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/kiwi_juice_1784820721955.jpg',
    description: 'Exotic kiwi thick shake.'
  },
  {
    id: 'ts-kaju',
    name: 'Kaju Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/almond_badam_shake_1784903553402.jpg',
    description: 'Thick cashew nut ice cream shake.'
  },
  {
    id: 'ts-chocolate',
    name: 'Chocolate Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/chocolate_icecream_1784903639992.jpg',
    description: 'Double choco fudge thick shake.'
  },
  {
    id: 'ts-almond',
    name: 'Almond Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/almond_badam_shake_1784903553402.jpg',
    description: 'Badam almond thick shake.'
  },
  {
    id: 'ts-caramel',
    name: 'Caramel Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/butterscotch_shake_1784903529161.jpg',
    description: 'Caramel fudge thick shake.'
  },
  {
    id: 'ts-kitkat',
    name: 'Kitkat Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/thickshake_kitkat_1784813536009.jpg',
    description: 'Crushed KitKat wafers blended in thick choco ice cream.'
  },
  {
    id: 'ts-oreo',
    name: 'Oreo Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/thickshake_kitkat_1784813536009.jpg',
    description: 'Oreo cookies crushed with vanilla thick shake.'
  },
  {
    id: 'ts-banana',
    name: 'Banana Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: 'Thick Shake',
    image: '/images/banana_juice_1784820666742.jpg',
    description: 'Heavy banana ice cream thick shake.'
  },
  {
    id: 'ts-american',
    name: 'Dry Fruits Thick Shake',
    category: 'thick-shakes',
    price: 150,
    badge: '⭐ Bestseller',
    image: '/images/almond_badam_shake_1784903553402.jpg',
    description: 'Loaded dry fruits thick shake.'
  },

  // --- MOCKTAILS ---
  {
    id: 'm-blue-curacao',
    name: 'Blue Curacao',
    category: 'mocktails',
    price: 80,
    badge: 'BOGO Offer 🎁',
    image: '/images/blue_curacao_1784820746824.jpg',
    description: 'Refreshing blue citrus soda mocktail. (Buy 1 Get 1 Same Tail)'
  },
  {
    id: 'm-green-alien',
    name: 'Green Alien',
    category: 'mocktails',
    price: 80,
    badge: 'BOGO Offer 🎁',
    image: '/images/mojito_mocktail_1784903653998.jpg',
    description: 'Zesty green apple and lime fizz. (Buy 1 Get 1 Same Tail)'
  },
  {
    id: 'm-berry-splitter',
    name: 'Berry Splitter',
    category: 'mocktails',
    price: 80,
    badge: 'BOGO Offer 🎁',
    image: '/images/strawberry_juice_1784813189114.jpg',
    description: 'Tangy mixed berries crushed with soda. (Buy 1 Get 1 Same Tail)'
  },
  {
    id: 'm-apple-pie',
    name: 'Apple Pie',
    category: 'mocktails',
    price: 80,
    badge: 'BOGO Offer 🎁',
    image: '/images/mojito_mocktail_1784903653998.jpg',
    description: 'Crisp green apple mocktail with spice hint. (Buy 1 Get 1 Same Tail)'
  },
  {
    id: 'm-cranberry-crazy',
    name: 'Cranberry Crazy',
    category: 'mocktails',
    price: 80,
    badge: 'BOGO Offer 🎁',
    image: '/images/pomegranate_juice_1784813164650.jpg',
    description: 'Tart cranberry cooler with lemon juice. (Buy 1 Get 1 Same Tail)'
  },
  {
    id: 'm-strawberry-mojito',
    name: 'Strawberry Mojito',
    category: 'mocktails',
    price: 80,
    badge: 'BOGO Offer 🎁',
    image: '/images/strawberry_juice_1784813189114.jpg',
    description: 'Muddled strawberries, mint leaves and lime. (Buy 1 Get 1 Same Tail)'
  },
  {
    id: 'm-bubble-gum',
    name: 'Bubble Gum',
    category: 'mocktails',
    price: 80,
    badge: 'BOGO Offer 🎁',
    image: '/images/strawberry_juice_1784813189114.jpg',
    description: 'Sweet retro bubble gum flavored cooler. (Buy 1 Get 1 Same Tail)'
  },
  {
    id: 'm-mint-mojito',
    name: 'Mint Mojito',
    category: 'mocktails',
    price: 80,
    badge: 'BOGO Offer 🎁',
    image: '/images/mojito_mocktail_1784903653998.jpg',
    description: 'Classic crushed mint and sparkling lemon. (Buy 1 Get 1 Same Tail)'
  },
  {
    id: 'm-vanilla',
    name: 'Vanilla',
    category: 'mocktails',
    price: 80,
    badge: 'BOGO Offer 🎁',
    image: '/images/vanilla_icecream_1784903586309.jpg',
    description: 'Smooth vanilla mocktail drink. (Buy 1 Get 1 Same Tail)'
  },
  {
    id: 'm-mojito',
    name: 'Mojito',
    category: 'mocktails',
    price: 80,
    badge: 'BOGO Offer 🎁',
    image: '/images/mojito_mocktail_1784903653998.jpg',
    description: 'Refreshing classic lime mojito. (Buy 1 Get 1 Same Tail)'
  },

  // --- FALOODA ---
  {
    id: 'fal-rose',
    name: 'Rose Falooda',
    category: 'falooda',
    price: 110,
    badge: 'Falooda',
    hasNutsOption: true,
    image: '/images/rose_falooda_1784903564418.jpg',
    description: 'Rose syrup, basil seeds, vermicelli, and ice cream.'
  },
  {
    id: 'fal-mango',
    name: 'Mango Falooda',
    category: 'falooda',
    price: 110,
    badge: 'Falooda',
    hasNutsOption: true,
    image: '/images/mango_falooda_1784903574948.jpg',
    description: 'Mango pulp, basil seeds, vermicelli and ice cream.'
  },
  {
    id: 'fal-apple',
    name: 'Apple Falooda',
    category: 'falooda',
    price: 110,
    badge: 'Falooda',
    hasNutsOption: true,
    image: '/images/rose_falooda_1784903564418.jpg',
    description: 'Apple pieces, vermicelli, rose syrup and ice cream.'
  },
  {
    id: 'fal-fruit-cut',
    name: 'Fruit Cut',
    category: 'falooda',
    price: 120,
    badge: 'Fruit Cut',
    hasNutsOption: true,
    image: '/images/falooda_special_1784813559194.jpg',
    description: 'Assorted fresh cut fruits with falooda fixings.'
  },

  // --- ICE CREAMS ---
  {
    id: 'ic-vanilla',
    name: 'Vanilla',
    category: 'ice-creams',
    price: 59,
    badge: 'Ice Cream',
    hasNutsOption: true,
    image: '/images/vanilla_icecream_1784903586309.jpg',
    description: 'Classic smooth vanilla ice cream scoop.'
  },
  {
    id: 'ic-strawberry',
    name: 'Strawberry',
    category: 'ice-creams',
    price: 59,
    badge: 'Ice Cream',
    hasNutsOption: true,
    image: '/images/strawberry_icecream_1784903617256.jpg',
    description: 'Fresh strawberry ice cream scoop.'
  },
  {
    id: 'ic-butterscotch',
    name: 'Butterscotch',
    category: 'ice-creams',
    price: 69,
    badge: 'Ice Cream',
    hasNutsOption: true,
    image: '/images/butterscotch_icecream_1784903600808.jpg',
    description: 'Crunchy butterscotch praline ice cream scoop.'
  },
  {
    id: 'ic-pista-green',
    name: 'Pista Green',
    category: 'ice-creams',
    price: 69,
    badge: 'Ice Cream',
    hasNutsOption: true,
    image: '/images/pista_shake_1784903541916.jpg',
    description: 'Rich pistachio green ice cream scoop.'
  },
  {
    id: 'ic-black-currant',
    name: 'Black Currant',
    category: 'ice-creams',
    price: 79,
    badge: 'Ice Cream',
    hasNutsOption: true,
    image: '/images/black_currant_icecream_1784903629823.jpg',
    description: 'Black currant ice cream scoop.'
  },
  {
    id: 'ic-chocolate',
    name: 'Chocolate',
    category: 'ice-creams',
    price: 79,
    badge: 'Ice Cream',
    hasNutsOption: true,
    image: '/images/chocolate_icecream_1784903639992.jpg',
    description: 'Dark rich chocolate ice cream scoop.'
  },
  {
    id: 'ic-american',
    name: 'Dry Fruits',
    category: 'ice-creams',
    price: 79,
    badge: 'Ice Cream',
    hasNutsOption: true,
    image: '/images/almond_badam_shake_1784903553402.jpg',
    description: 'Dry fruits special ice cream scoop.'
  },
  {
    id: 'ic-kaju-kismis',
    name: 'Kaju Kismis',
    category: 'ice-creams',
    price: 79,
    badge: 'Ice Cream',
    hasNutsOption: true,
    image: '/images/icecream_scoops_1784813574474.jpg',
    description: 'Cashew and raisin infused ice cream scoop.'
  }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('jugo_cart') || '[]');

// State per product card (selected variant index, extra nuts, quantity)
const cardState = {};

const CATEGORIES = [
  { id: 'fresh-juices', title: '🥤 Fresh Juices', badge: 'Made Live Fresh' },
  { id: 'soft-milkshakes', title: '🥛 Soft Milkshakes', badge: 'Creamy & Chilled' },
  { id: 'thick-shakes', title: '🍫 Thick Shakes', badge: 'Rich & Loaded' },
  { id: 'mocktails', title: '🍹 Mocktails', badge: 'Buy 1 Get 1 Same Tail' },
  { id: 'falooda', title: '🍧 Falooda Specials', badge: 'Dessert Drink' },
  { id: 'ice-creams', title: '🍨 Ice Cream Scoops', badge: 'Chilled Treats' }
];

// ==========================================
// 2. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initFadeUpAnimations();
  renderMenu('');
  initSearchInput();
  updateCartUI();
  initContactForm();
});

// ==========================================
// 3. SCROLL & ANIMATIONS
// ==========================================
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');
  const closeBtn = document.getElementById('mobile-nav-close');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    }

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

function initFadeUpAnimations() {
  const fadeElems = document.querySelectorAll('.fade-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  fadeElems.forEach(el => observer.observe(el));
}

// ==========================================
// 4. MENU RENDER & SEARCH
// ==========================================
function renderMenu(searchQuery = '') {
  const container = document.getElementById('menu-container');
  if (!container) return;

  const q = searchQuery.toLowerCase().trim();

  let totalRendered = 0;
  let html = '';

  CATEGORIES.forEach(cat => {
    let items = MENU_DATA.filter(item => item.category === cat.id);

    if (q !== '') {
      items = items.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q)
      );
    }

    if (items.length > 0) {
      totalRendered += items.length;
      html += `
        <div class="category-section" id="cat-sec-${cat.id}">
          <div class="category-header">
            <div class="category-title-wrap">
              <h3 class="category-title">${cat.title}</h3>
              <span class="category-count">${items.length} ${items.length === 1 ? 'Item' : 'Items'}</span>
            </div>
            ${cat.badge ? `<span class="category-badge">${cat.badge}</span>` : ''}
          </div>
          <div class="menu-grid">
            ${items.map(renderCardHTML).join('')}
          </div>
        </div>
      `;
    }
  });

  if (totalRendered === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3>No items found</h3>
        <p style="color: var(--text-muted);">Try searching for another juice, shake, or salad name.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = html;
}

function renderCardHTML(item) {
  if (!cardState[item.id]) {
    cardState[item.id] = {
      variantIndex: 0,
      extraNuts: false,
      quantity: 1
    };
  }

  const state = cardState[item.id];
  let currentPrice = item.price;

  if (item.variants && item.variants.length > 0) {
    currentPrice = item.variants[state.variantIndex].price;
  }

  if (item.hasNutsOption && state.extraNuts) {
    currentPrice += 20;
  }

  return `
    <div class="product-card fade-up in-view" id="card-${item.id}">
      <div class="product-img-wrap">
        <span class="category-tag">${item.badge || formatCatName(item.category)}</span>
        <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy" referrerPolicy="no-referrer" />
        <div class="orange-price-badge">₹${currentPrice}</div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${item.name}</h3>
        <p class="product-desc">${item.description}</p>
        
        ${item.variants ? `
          <div class="variant-selector-wrap">
            <label class="variant-label">Type:</label>
            <div class="variant-btns">
              ${item.variants.map((v, idx) => `
                <button 
                  type="button"
                  onclick="selectVariant('${item.id}', ${idx})" 
                  class="variant-btn ${state.variantIndex === idx ? 'active' : ''}"
                >
                  ${v.type} (₹${v.price})
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${item.hasNutsOption ? `
          <div class="nuts-option-wrap">
            <label class="nuts-label">
              <input type="checkbox" onchange="toggleExtraNuts('${item.id}', this.checked)" ${state.extraNuts ? 'checked' : ''} class="nuts-checkbox" />
              <span>With Extra Nuts (+₹20)</span>
            </label>
          </div>
        ` : ''}

        <div class="card-action-row">
          <div class="card-qty-selector">
            <button type="button" class="qty-btn" onclick="changeCardQty('${item.id}', -1)" aria-label="Decrease quantity">-</button>
            <span class="qty-count" id="qty-count-${item.id}">${state.quantity || 1}</span>
            <button type="button" class="qty-btn" onclick="changeCardQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="btn-add-cart-green" onclick="addCardToCart('${item.id}')">
            <span>🛒 Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function selectVariant(itemId, variantIndex) {
  if (!cardState[itemId]) cardState[itemId] = { variantIndex: 0, extraNuts: false, quantity: 1 };
  cardState[itemId].variantIndex = variantIndex;
  
  const searchInput = document.getElementById('search-menu');
  renderMenu(searchInput ? searchInput.value : '');
}

function toggleExtraNuts(itemId, checked) {
  if (!cardState[itemId]) cardState[itemId] = { variantIndex: 0, extraNuts: false, quantity: 1 };
  cardState[itemId].extraNuts = checked;

  const searchInput = document.getElementById('search-menu');
  renderMenu(searchInput ? searchInput.value : '');
}

function changeCardQty(itemId, delta) {
  if (!cardState[itemId]) {
    cardState[itemId] = { variantIndex: 0, extraNuts: false, quantity: 1 };
  }
  const currentQty = cardState[itemId].quantity || 1;
  const newQty = Math.max(1, currentQty + delta);
  cardState[itemId].quantity = newQty;

  const qtyElem = document.getElementById(`qty-count-${itemId}`);
  if (qtyElem) {
    qtyElem.textContent = newQty;
  }
}

function formatCatName(cat) {
  return cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function initSearchInput() {
  const searchInput = document.getElementById('search-menu');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    renderMenu(e.target.value);
  });
}

// ==========================================
// 5. CART & WHATSAPP ORDERING
// ==========================================
function addCardToCart(itemId) {
  const item = MENU_DATA.find(m => m.id === itemId);
  if (!item) return;

  const state = cardState[itemId] || { variantIndex: 0, extraNuts: false, quantity: 1 };
  const quantityToAdd = state.quantity || 1;

  let finalName = item.name;
  let finalPrice = item.price;

  if (item.variants && item.variants.length > 0) {
    const v = item.variants[state.variantIndex];
    finalName += ` (${v.type})`;
    finalPrice = v.price;
  }

  if (item.hasNutsOption && state.extraNuts) {
    finalName += ' + Extra Nuts';
    finalPrice += 20;
  }

  const cartItemId = `${itemId}_v${state.variantIndex}_nuts${state.extraNuts ? 1 : 0}`;

  const existing = cart.find(c => c.cartItemId === cartItemId);
  if (existing) {
    existing.quantity += quantityToAdd;
  } else {
    cart.push({
      cartItemId,
      id: item.id,
      name: finalName,
      category: item.category,
      price: finalPrice,
      image: item.image,
      quantity: quantityToAdd
    });
  }

  // Reset card quantity back to 1 for subsequent additions
  state.quantity = 1;
  const qtyElem = document.getElementById(`qty-count-${itemId}`);
  if (qtyElem) {
    qtyElem.textContent = 1;
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${quantityToAdd}x ${finalName} to cart! 🥤`);
}

function updateCartQuantity(cartItemId, delta) {
  const idx = cart.findIndex(c => c.cartItemId === cartItemId);
  if (idx > -1) {
    cart[idx].quantity += delta;
    if (cart[idx].quantity <= 0) {
      cart.splice(idx, 1);
    }
  }
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('jugo_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  // Update Mobile Bottom Bar
  const mobileBar = document.getElementById('mobile-bottom-cart-bar');
  const mobileCount = document.getElementById('mobile-cart-count');
  const mobilePrice = document.getElementById('mobile-cart-price');

  if (mobileBar) {
    if (totalItems > 0) {
      mobileBar.classList.add('visible');
      if (mobileCount) mobileCount.textContent = `${totalItems} ${totalItems === 1 ? 'Item' : 'Items'}`;
      if (mobilePrice) mobilePrice.textContent = `₹${totalAmount}`;
    } else {
      mobileBar.classList.remove('visible');
    }
  }

  const drawerBody = document.getElementById('cart-drawer-items');
  const subtotalElem = document.getElementById('cart-subtotal');

  if (drawerBody) {
    if (cart.length === 0) {
      drawerBody.innerHTML = `
        <div style="text-align: center; padding: 48px 16px;">
          <div style="font-size: 3rem; margin-bottom: 12px;">🍊</div>
          <h4>Your order is empty</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 6px;">Select items from our menu to place a direct order!</p>
        </div>
      `;
    } else {
      drawerBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${cart.map(item => `
            <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: var(--bg-cream); border-radius: 12px; border: 1px solid var(--border-subtle);">
              <img src="${item.image}" alt="${item.name}" style="width: 54px; height: 54px; border-radius: 8px; object-fit: cover;" />
              <div style="flex-grow: 1;">
                <div style="font-weight: 700; font-size: 0.88rem;">${item.name}</div>
                <div style="font-size: 0.82rem; color: var(--primary-orange-dark); font-weight: 600;">₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}</div>
              </div>
              <div style="display: flex; align-items: center; gap: 6px;">
                <button onclick="updateCartQuantity('${item.cartItemId}', -1)" style="width: 28px; height: 28px; border-radius: 50%; background: #FFF; border: 1px solid #DDD; font-weight: 700;">-</button>
                <span style="font-size: 0.9rem; font-weight: 600;">${item.quantity}</span>
                <button onclick="updateCartQuantity('${item.cartItemId}', 1)" style="width: 28px; height: 28px; border-radius: 50%; background: #FFF; border: 1px solid #DDD; font-weight: 700;">+</button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  if (subtotalElem) {
    subtotalElem.textContent = `₹${totalAmount}`;
  }
}

function toggleCartDrawer() {
  const overlay = document.getElementById('drawer-overlay');
  if (overlay) {
    const isActive = overlay.classList.toggle('active');
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

function addQuickSpec(text) {
  const notesInput = document.getElementById('cart-notes');
  if (!notesInput) return;
  if (notesInput.value.trim() === '') {
    notesInput.value = text;
  } else if (!notesInput.value.includes(text)) {
    notesInput.value += ', ' + text;
  }
}

function placeWhatsAppOrder() {
  if (cart.length === 0) {
    showToast('Please add items to your cart first!');
    return;
  }

  const shopPhone = '917207785729';
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const orderList = cart.map(item => `• ${item.name} x ${item.quantity} (₹${item.price * item.quantity})`).join('\n');
  
  const notesInput = document.getElementById('cart-notes');
  const customNotes = notesInput ? notesInput.value.trim() : '';
  const specText = customNotes ? `\n\n📝 *Juice Specifications:* ${customNotes}` : '';

  const shopLocation = `📍 *Shop Location:* Jugo Fresh Juices, Morampudi, Rajamahendravaram, AP 533107\n🗺️ *Google Maps:* https://maps.google.com/?q=Morampudi,Rajamahendravaram,Andhra+Pradesh+533107`;

  const message = `Hello Jugo Fresh Juices! 🥤\n\nI would like to place a *Pre-Order* from the shop menu:\n\n${orderList}\n\n*Total Amount:* ₹${totalAmount}${specText}\n\n⚡ *Pre-Order Note:* Pre-ordering in advance helps avoid juice preparation wait time! Please reach the shop 15 mins after ordering.\n\n${shopLocation}\n\nPlease confirm pre-order status. Thank you!`;

  window.open(`https://wa.me/${shopPhone}?text=${encodeURIComponent(message)}`, '_blank');

  // Empty cart and clear notes once order is sent to WhatsApp
  cart = [];
  if (notesInput) notesInput.value = '';
  saveCart();
  updateCartUI();
  
  // Close drawer if open
  const overlay = document.getElementById('drawer-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  showToast('Pre-Order sent to WhatsApp! Your cart is now empty. 🥤');
}

// ==========================================
// 6. CONTACT FORM & TOAST
// ==========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name')?.value;
    const phone = document.getElementById('form-phone')?.value;
    const item = document.getElementById('form-item')?.value;
    const notes = document.getElementById('form-notes')?.value;

    const shopLocation = `📍 *Shop Location:* Jugo Fresh Juices, Morampudi, Rajamahendravaram, AP 533107\n🗺️ *Google Maps:* https://maps.google.com/?q=Morampudi,Rajamahendravaram,Andhra+Pradesh+533107`;

    const message = `Hello Jugo Fresh Juices! 🥤\n\n*Direct Pre-Order Request*\n*Name:* ${name}\n*Phone:* ${phone}\n*Selected Item:* ${item}\n*Special Request:* ${notes || 'None'}\n\n⚡ *Pre-Order Note:* Pre-ordering in advance helps avoid juice preparation wait time! Please reach the shop 15 mins after ordering.\n\n${shopLocation}`;
    
    window.open(`https://wa.me/917207785729?text=${encodeURIComponent(message)}`, '_blank');
    showToast('Redirecting to WhatsApp to send message!');
    form.reset();
  });
}

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// Global functions for inline HTML events
window.selectVariant = selectVariant;
window.toggleExtraNuts = toggleExtraNuts;
window.changeCardQty = changeCardQty;
window.addCardToCart = addCardToCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleCartDrawer = toggleCartDrawer;
window.placeWhatsAppOrder = placeWhatsAppOrder;
