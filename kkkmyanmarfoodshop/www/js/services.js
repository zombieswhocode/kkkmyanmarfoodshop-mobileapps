angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('FoodService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var foods = [
        { title: 'ဝက္သားဆီျပန္', id: 0, price: '၂ဝဝဝ က်ပ္' , img: 'IMG_6951.JPG' },
        { title: 'ဝက္မွ်စ္ခ်ဥ္', id: 1, price: '၂၀ဝဝ က်ပ္' , img: 'IMG_7041.JPG' },
        { title: 'ဝက္ကလီစာ', id: 2, price: '၁၇ဝဝ က်ပ္' , img: 'IMG_7002.JPG' },
        { title: 'ဆိတ္နံရိုးပဲ', id: 3, price: '၁၇ဝဝ က်ပ္' , img: 'IMG_6936.JPG' },
        { title: 'ဆိတ္ကလီစာ', id: 4, price: '၁၇ဝဝ က်ပ္' , img: 'IMG_7007.JPG' },
        { title: 'ပုစြန္ထုပ္', id: 5, price:'၄ဝဝဝ က်ပ္' , img: 'IMG_6934.JPG' }
  ];

  return {
    all: function() {
      return foods;
    },
    get: function(foodId) {
      // Simple index lookup
      return foods[foodId];
    }
  }
})
.factory('MonthlyService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var planlists = [
        { title: 'တစ္ေၾကာင္းပို႔ေစ်းႏႈန္း (မနက္စာ၊ ညစာ တစ္ႀကိမ္ပို႔) တစ္ေယာက္စာ (B+) ', id: 0, price: '၁၃၅၀၀၀ က်ပ္' },
        { title: 'တစ္ေၾကာင္းပို႔ေစ်းႏႈန္း (မနက္စာ၊ ညစာ တစ္ႀကိမ္ပို႔) ႏွစ္ေယာက္စာ (A+)', id: 1, price: '၁၉၃၀၀၀ က်ပ္'  },
        { title: 'တစ္ေၾကာင္းပို႔ေစ်းႏႈန္း (မနက္စာ၊ ညစာ တစ္ႀကိမ္ပို႔) သံုးေယာက္စာ ', id: 2, price: '၃၀၈၀၀၀ က်ပ္'  },
        { title: 'ႏွစ္ေၾကာင္းပို႔ေစ်းႏႈန္း (မနက္စာ၊ ညစာ ႏွစ္ႀကိမ္ခြဲပို႔) တစ္ေယာက္စာ (B-)', id: 3, price: '၁၅၅၀ဝဝ က်ပ္'  },
        { title: 'ႏွစ္ေၾကာင္းပို႔ေစ်းႏႈန္း (မနက္စာ၊ ညစာ ႏွစ္ႀကိမ္ခြဲပို႔) ႏွစ္ေယာက္စာ (A-)', id: 4, price: '၂၁၃၀၀၀ က်ပ္' },
        { title: 'ႏွစ္ေၾကာင္းပို႔ေစ်းႏႈန္း (မနက္စာ၊ ညစာ ႏွစ္ႀကိမ္ခြဲပို႔) သံုးေယာက္စာ', id: 5, price:'၃၂၈၀၀၀ က်ပ္'  },
        { title: 'တစ္ေယာက္စာ မနက္စာ (၁)ပိုင္း ၁ လ (B-)', id: 6, price:'၈၃၅၀၀ က်ပ္'  },
        { title: 'ႏွစ္ေယာက္စာ မနက္စာ (၁)ပိုင္း ၁ လ(A-)', id: 7, price:'၁၃၅၀၀၀ က်ပ္'  },
        { title: 'တစ္ေယာက္စာ (၁၅)ရက္စာ ၁ လ(b+) (၁၅)ရက္ ', id: 8, price:'၇၃၅၀၀ က်ပ္'  },
        { title: 'ႏွစ္ေယာက္စာ (၁၅)ရက္စာ ၁ လ(A+) (၁၅)ရက္ ', id: 8, price:'၁၂၅၀၀ က်ပ္'  }
  ];

  return {
    all: function(plantId) {
      return planlists;
    },
    get: function(planId) {
      // Simple index lookup
      return planlists[planId];
    }
  }
});
