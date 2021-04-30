let openBtnID = document.getElementById('open-btn'),
   nameValue = document.getElementsByClassName('name-value')[0],
   budgetValue = document.getElementsByClassName('budget-value')[0],
   goodsValue = document.getElementsByClassName('goods-value')[0],
   itemsValue = document.getElementsByClassName('items-value')[0],
   employersValue = document.getElementsByClassName('employers-value')[0],
   discountValue = document.getElementsByClassName('discount-value')[0],
   isOpenValue = document.getElementsByClassName('isopen-value')[0];

let inputGoodsItem = document.getElementsByClassName('goods-item'),
   btnGoods = document.getElementsByTagName('button')[1],
   btnBudget = document.getElementsByTagName('button')[2],
   btnEmployers = document.getElementsByTagName('button')[3],
   chooseItem = document.querySelector('.choose-item'),
   timeValue = document.querySelector('.time-value'),
   countBudgetValue = document.querySelector('.count-budget-value'),
   hireEmployersItem = document.getElementsByClassName('hire-employers-item');

let Budget,
   price;

openBtnID.addEventListener('click', () => {
   Budget = prompt("Ваш бюджет?", '');

   while (isNaN(Budget) || Budget == "" || Budget == null) {
      Budget = prompt("Ваш бюджет?", '');
   }
   budgetValue.textContent = Budget;
   nameValue.textContent = prompt("Название вашего магазины?", '').toUpperCase();
});

btnGoods.addEventListener('click', () => {
   for (let i = 0; i < inputGoodsItem.length; i++) {
      let a = inputGoodsItem[i].value

      if ((typeof (a)) === "string" && (typeof (a)) != null && a.length < 50) {
         console.log("Всё верно!");
         mainList.ShopGoods[i] = a;
         goodsValue.textContent = mainList.ShopGoods;
      } else {
         i = i - 1;
      }
   }
});

btnEmployers.addEventListener('click', () => {
   for (let i = 0; i < hireEmployersItem.length; i++) {
      let name = hireEmployersItem[i].value;
      mainList.employers[i] = name;

      employersValue.textContent += mainList.employers[i] + ", ";
   }
});

chooseItem.addEventListener('change', () => {
   let items = chooseItem.value;

   if (isNaN(items) && items != '') {
      mainList.shopItems = items.split(",");
      mainList.shopItems.sort();

      itemsValue.textContent = mainList.shopItems;
   }
});

timeValue.addEventListener('change', () => {
   let time = timeValue.value;

   if (time < 0) {
      console.log("Такого не может быть!")
      mainList.open = false;
   } else if (time > 8 && time < 20) {
      console.log("Время работать")
      mainList.open = true;
   } else if (time < 24) {
      console.log("Уже слишком поздно");
      mainList.open = false;
   } else {
      console.log("В сутках всего 24 часа!");
      mainList.open = false;
   };

   if (mainList.open == true) {
      isOpenValue.style.backgroundColor = 'white'
      isOpenValue.textContent = "Открыто"
   }
   else {
      isOpenValue.style.backgroundColor = 'red'
   }
});

btnBudget.addEventListener('click', () => {
   countBudgetValue.value = Budget / 30;
});

let mainList = {
   UserBudget: Budget,
   UserShopName: nameValue.textContent,
   ShopGoods: [],
   employers: [],
   open: false,
   discount: true,
   shopItems: []
};

discountValue.addEventListener('click', () => {
   
   if (mainList.discount == true) {
      discountValue.style.backgroundColor = 'white'
      discountValue.value = Budget * 0.8;
      discountValue.textContent = discountValue.value;
      console.log(Budget * 0.8)
   } else if (mainList.discount != true) {
      console.log(Budget)
      discountValue.style.backgroundColor = 'red'
   }
});

console.log(mainList);