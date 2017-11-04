/*

    more.html

*/

// guiding which wrapper in more.html or settings.html to open
// multiple pages in single html
// approach can be made from anywhere on this app

function morehtmlSettings() {
  // directing which wrapper to show in more.html
  sideBar_items_receiving();
  // must be executed after items are displayed
  listItemSettings();
}








// function sideBar_items_receiving
/*
  description:
    1.  directing which wrapper to show in more.html
  precaution:
    1.  it must be called earlier than any other coder-made functions on loading more.html
*/
function sideBar_items_receiving() {
  // find which wrapper is chosen
  // decode page number from url parameters
  var pageNumber = null;
  pageNumber = getURLParameter('page');

  // topBar-Brand and wrapper settings
  topBar_Brand = document.getElementById('topBar-Brand');
  switch (pageNumber) {

    case '0':
      topBar_Brand.innerHTML = '공지사항';
      document.getElementById('wrapper-news').style.display = 'block';
      break;

    case '1':
      topBar_Brand.innerHTML = '고객센터';
      document.getElementById('wrapper-customer').style.display = 'block';
      // wrapper-questionList is under wrapper-customer
      customer_questionList();
      break;

    case '2':
      topBar_Brand.innerHTML = '주문내역';
      document.getElementById('wrapper-orderList').style.display = 'block';
      // switching which orderList to show
      orderList_switchOrderList();
      // loading user's orderList from the server
      orderList_loadOrderList();
      // when orderDetail-back is clicked close the hide wrapper and show the orderList wrapper
      document.getElementById('orderDetail-back').addEventListener('click', function() {
        // hide the current wrapper which is orderList
        document.getElementById('wrapper-orderList').style.display = 'block';
        // show orderDetail wrapper
        document.getElementById('wrapper-orderDetail').style.display = 'none';
      });
      break;

    case '3':
      topBar_Brand.innerHTML = '포인트관리';
      document.getElementById('wrapper-managePoints').style.display = 'block';
      // settings for reloading contents
      document.getElementById('more-listItem-loadMorePoints').addEventListener('click', managePoints_reloadPoints);
      break;

    default:
      // default page for more.html is to show wrapper-news
      topBar_Brand.innerHTML = '공지사항';
      document.getElementById('wrapper-news').style.display = 'block';
      break;
  }
}







// url parameter decoder
function getURLParameter(name) {
  return decodeURIComponent(
    (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||
     [,""])[1].replace(/\+/g, '%20'))||
    null
}









// function listItemSettings
/*
  description:
    1.  this function adds eventListeners to listItems
        and manage open close feature on listItem-contexts
  precaution:
    1.  listItems with its context must be placed higher than
        the ones without context
    2.  should not be executed on already applied elements
        1.  either reload all elements
        2.  or partially execute
*/
function listItemSettings() {

  var listItems = $('.more-listItem:visible');
  var listItem_contexts = $('.more-listItem-context:visible');

  // debugging
  // alert("listItems.length = " + listItems.length);
  // alert("listItem_contexts.length = " + listItem_contexts.length);

  // repetition count must be sustained to be the number of all targeting type elements
  for (var i = 0; i < listItem_contexts.length; i++) {

    // if the element has NEVER been gone through this function
    if (listItem_contexts[i].getAttribute('isOpen') == undefined) {

      // set all listItem closed
      listItem_contexts[i].setAttribute('isOpen', false);
      // remember contexts' heights;
      listItem_contexts[i].setAttribute('original-height', listItem_contexts[i].offsetHeight);
      // set their heights 0
      listItem_contexts[i].style.height = '0';


      // find out which listItems is clicked
      // when one of the listItems is clicked
      listItems[i].addEventListener('click', (function(i) {
        return function() {
          var angle = $('.more-listItem-angle:visible')[i];
          var context = listItem_contexts[i];
          // alert(target_ListItem.getAttribute('isOpen'));
          if (context.getAttribute('isOpen') == 'false') { // if not opened=closed, open
            // get the context's height
            var height = context.getAttribute('original-height');
            // change height from 0
            context.style.height = height + "px";
            // set it open
            context.setAttribute('isOpen', true);
            // flip more-listItem-angle
            angle.classList.remove('fa-angle-down');
            angle.classList.add('fa-angle-up');

          } else { // if already opened, close
            // change height to 0
            context.style.height = '0';
            // set it closed
            context.setAttribute('isOpen', false);
            // flip more-listItem-angle
            angle.classList.remove('fa-angle-up');
            angle.classList.add('fa-angle-down');
          }
        };
      })(i), false);

    } else { // if the element has already been gone through this function
      // Do Nothing
    }
  }
}







// wrapper-questionList is under wrapper-customer
// when more-listItem-toQuestionList is clicked
// wrapper-questionList should only be visible
function customer_questionList() {
  document.getElementById('more-listItem-toQuestionList').addEventListener('click', function() {
    // debugging
    // alert('guideTo_wrapper_questionList');

    // hide all other wrappers
    wrappers = document.getElementsByClassName('wrapper-more');
    for (var i = 0; i < wrappers.length; i++) {
      wrappers[i].style.display = 'none';
    }
    // show wrapper-questionList
    document.getElementById('wrapper-questionList').style.display = 'block';

    // reset listItemSettings
    listItemSettings();
  });
}








// function orderList_switchOrderList
/*
  description:
    1. switching orderList depending on which button of more-orderList-selectView is clicked
*/
function orderList_switchOrderList() {

  var productButton = document.getElementById('more-orderList-selectView-buttonProduct');
  var couponButton = document.getElementById('more-orderList-selectView-buttonCoupon')
  var productList = document.getElementById('more-productList');
  var couponList = document.getElementById('more-couponList');

  // default settings to set productButton is clicked
  productButton.style.backgroundColor = '#4DC03D';
  productButton.style.color = 'white';
  // show productList already done in its css property

  // when productList button is clicked
  productButton.addEventListener('click', function() {
    // restore the unselected button's properties
    couponButton.style.backgroundColor = 'white';
    couponButton.style.color = 'black';
    // change button's background-color and text color
    this.style.backgroundColor = '#4DC03D';
    this.style.color = 'white';
    // hide couponList
    couponList.style.display = 'none';
    // show productList
    productList.style.display = 'block';
  });

  // when couponList button is clicked
  couponButton.addEventListener('click', function() {
    // restore the unselected button's properties
    productButton.style.backgroundColor = 'white';
    productButton.style.color = 'black';
    // change button's background-color and text color
    this.style.backgroundColor = '#4DC03D';
    this.style.color = 'white';
    // show couponList
    productList.style.display = 'none';
    // hide productList
    couponList.style.display = 'block';
  });
}







// function orderList_loadOrderList
/*
  description:
    1.  loads productList and couponList data from the server
    2.  orderCode is the imageName
  template:
    <!-- listItem -->
    <li class="more-orderListItem">
      <span id="orderCode" style="display: none">product3</span>
      <img class="more-orderListItem-image" src="images/product3.jpg">
      <div class="more-orderListItem-text">
        쿠폰1 쿠폰1 쿠폰1 쿠폰1 쿠폰1 쿠폰1 쿠폰1 쿠폰1<br />
        수량: 1개<br />
        결제금액: 21,500원
      </div>
    </li>
*/
function orderList_loadOrderList() {
  // 1 get data from server as jsontext
  // 1 get data from server as jsontext
  // 1 get data from server as jsontext

  // debugging JSON example DO NOT erase
  // debugging JSON example DO NOT erase
  // debugging JSON example DO NOT erase
  var jsontext = ' { "productList": [ {"itemCode":"product3","orderTitle":"서버 서버 서버 서버 서버 서버 서버 서버 서버 서버", "orderCount":"0", "orderPrice":"00,000"}, {"itemCode":"product3", "orderTitle":"서버 서버 서버 서버 서버 서버 서버 서버 서버 서버", "orderCount":"0", "orderPrice":"00,000"} ] }';
  var exampleorderJSON = JSON.parse(jsontext);

  // debugging JSON example DO NOT erase
  // debugging JSON example DO NOT erase
  // debugging JSON example DO NOT erase
  var orderJSON = {
    "productList":[
      {"orderCode": "dummyid1231410101", "itemCode":"product1", "orderTitle":"Downy 섬유유연제 에이프릴 프레쉬향 3.06 x2", "orderCount":"1", "orderPrice":"21,500"},
      {"orderCode": "dummyid1231410102", "itemCode":"product2", "orderTitle":"Cowny 다른유연제 비프릴 좋은향 2.95 x1", "orderCount":"2", "orderPrice":"32,600"},
      {"orderCode": "dummyid1231410103", "itemCode":"product3", "orderTitle":"1 서버 1 서버 1 서버 서버 서버 서버 서버 서버 서버 서버", "orderCount":"0", "orderPrice":"00,000"},
      {"orderCode": "dummyid1231410104", "itemCode":"product3", "orderTitle":"2 서버 2 서버 2 서버 서버 서버 서버 서버 서버 서버 서버", "orderCount":"0", "orderPrice":"00,000"},
      {"orderCode": "dummyid1231410105", "itemCode":"product3", "orderTitle":"3 서버 3 서버 3 서버 서버 서버 서버 서버 서버 서버 서버", "orderCount":"0", "orderPrice":"00,000"},
      {"orderCode": "dummyid1231410106", "itemCode":"product3", "orderTitle":"4 서버 4 서버 4 서버 서버 서버 서버 서버 서버 서버 서버", "orderCount":"0", "orderPrice":"00,000"}
    ],
    "couponList":[
      {"orderCode": "dummyid1231410107", "itemCode":"product3", "orderTitle":"쿠폰1 쿠폰1 쿠폰1 쿠폰1 쿠폰1 쿠폰1 쿠폰1 쿠폰1", "orderCount":"1", "orderPrice":"21,500"},
      {"orderCode": "dummyid1231410108", "itemCode":"product3", "orderTitle":"쿠폰2 쿠폰2 쿠폰2 쿠폰2 쿠폰2 쿠폰2 쿠폰2 쿠폰2", "orderCount":"2", "orderPrice":"32,600"},
      {"orderCode": "dummyid1231410109", "itemCode":"product3", "orderTitle":"1 서버쿠폰 1 서버쿠폰 1 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰", "orderCount":"0", "orderPrice":"00,000"},
      {"orderCode": "dummyid12314101010", "itemCode":"product3", "orderTitle":"2 서버쿠폰 2 서버쿠폰 2 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰", "orderCount":"0", "orderPrice":"00,000"},
      {"orderCode": "dummyid12314101011", "itemCode":"product3", "orderTitle":"3 서버쿠폰 3 서버쿠폰 3 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰 서버쿠폰", "orderCount":"0", "orderPrice":"00,000"}
    ]
  };

  // debugging
  // alert(orderJSON.productList.length);

  // order variables initialization
  var orderCode = null;
  var itemCode = null;
  var orderTitle = null;
  var orderCount = null;
  var orderPrice = null;

  var content = null;
  var div = null;

  // 2 loading and HTMLformatting productsList from orderJSON
  // 2 loading and HTMLformatting productsList from orderJSON
  // 2 loading and HTMLformatting productsList from orderJSON
  for (var i = 0; i < orderJSON.productList.length ; i++) {
    orderCode = orderJSON.productList[i].orderCode;
    itemCode = orderJSON.productList[i].itemCode;
    orderTitle = orderJSON.productList[i].orderTitle;
    orderCount = orderJSON.productList[i].orderCount;
    orderPrice = orderJSON.productList[i].orderPrice;

    // 3 fit data in the desired DOM structure
    // 3 fit data in the desired DOM structure
    // 3 fit data in the desired DOM structure
    content = '<!-- listItem --><li class="more-orderListItem"><span id="orderCode" style="display: none">' + orderCode + '</span><img class="more-orderListItem-image"src="images/' + itemCode + '.jpg"><div class="more-orderListItem-text">' + orderTitle + '<br />수량: ' + orderCount + '개<br />결제금액: ' + orderPrice + '원</div></li>';

    // dummy div
    div = document.createElement('div');
    div.innerHTML = content;

    // 4 append loaded htmls to productList
    // 4 append loaded htmls to productList
    // 4 append loaded htmls to productList
    document.getElementById('more-productList').appendChild(div);

    // 5 adding eventListener to just appened node
    // 5 adding eventListener to just appened node
    // 5 adding eventListener to just appened node
    div.addEventListener('click', (function(i, itemCode) {
      return function() {
        orderList_viewDetailedOrder(i, itemCode);
      };
    })(i, itemCode), false);
  }

  // 2 loading and HTMLformatting productsList from orderJSON
  // 2 loading and HTMLformatting productsList from orderJSON
  // 2 loading and HTMLformatting productsList from orderJSON
  for (i = 0; i < orderJSON.couponList.length; i++) {
    // order variables
    orderCode = orderJSON.couponList[i].orderCode;
    itemCode = orderJSON.couponList[i].itemCode;
    orderTitle = orderJSON.couponList[i].orderTitle;
    orderCount = orderJSON.couponList[i].orderCount;
    orderPrice = orderJSON.couponList[i].orderPrice;

    // 3 fit data in the desired DOM structure
    // 3 fit data in the desired DOM structure
    // 3 fit data in the desired DOM structure
    content = '<!-- listItem --><li class="more-orderListItem"><span id="orderCode" style="display: none">' + orderCode + '</span><img class="more-orderListItem-image"src="images/' + itemCode + '.jpg"><div class="more-orderListItem-text">' + orderTitle + '<br />수량: ' + orderCount + '개<br />결제금액: ' + orderPrice + '원</div></li>';

    // dummy div
    div = document.createElement('div');
    div.innerHTML = content;

    // 4 append loaded htmls to productList
    // 4 append loaded htmls to productList
    // 4 append loaded htmls to productList
    document.getElementById('more-couponList').appendChild(div);

    // 5 adding eventListener to just appened node
    // 5 adding eventListener to just appened node
    // 5 adding eventListener to just appened node
    div.addEventListener('click', (function(i, itemCode) {
      return function() {
        orderList_viewDetailedOrder(i, itemCode);
      };
    })(i, itemCode), false);
  }
}








// function orderList_viewDetailedOrder
/*
  description:
    1.  both product and coupon listItems being clicked calls this function
*/
function orderList_viewDetailedOrder(i, itemCode) {
  // hide the current wrapper which is orderList
  document.getElementById('wrapper-orderList').style.display = 'none';
  // show orderDetail wrapper
  document.getElementById('wrapper-orderDetail').style.display = 'block';

  // debugging
  // alert(itemCode);

  // determine whether the order is product or coupon
  // if item is product
  if (itemCode.indexOf('product') == 0) {
    // request the server to load product detailed data
    orderList_loadProductDetail(itemCode);

  // if item is coupon
  } else {
    // request the server to load product detailed data
    orderList_loadCouponDetail();
  }
}









// function orderList_loadProductDetail
/*
  description:
    1. loads detailed product data that's clicked
*/
function orderList_loadProductDetail() {
  // get data from server by sending id and orderCode
  // get data from server by sending id and orderCode
  // get data from server by sending id and orderCode


  // send id and orderNumber

  var productJSON = {"itemCode":"product3", "itemName":"Downy 섬유유연제 에이프릴 프레쉬향 3.06x2", "itemCount":"1", "option":"없음", "itemPrice":"21,500", "customerName":"홍길동", "customerAddress":"인천시 부평구 부평4동", "customerPhone":"123-4567-8901", "memo":"없음", "deliveryStatus":"배송 중", "deliveryCode":"123-456-7890" };

  // debugging
  // alert('product');

  // formatting
  var itemCode = productJSON.itemCode;
  var title = productJSON.itemName;
  var orderInfo = '상품명: ' + productJSON.itemName + '<br />수량: ' +  productJSON.itemCount + '개<br />옵션: ' + productJSON.option + '<br />결제금액: ' + productJSON.itemPrice + '원<br />';
  var deliveryInfo = '성명: ' + productJSON.customerName + '<br />배송지역: ' + productJSON.customerAddress + '<br />연락처: ' + productJSON.customerPhone + '<br />메모: ' + productJSON.memo + '<br />';
  var processInfo = '상태: ' + productJSON.deliveryStatus + '<br />운송장 번호: ' + productJSON.deliveryCode + '<span id="orderDetail-copyDeliveryNumber" class="btn btn-default fa fa-copy"></span>';

  // parsing HTML
  // change image
  document.getElementById("orderDetail-image").src = 'images/' + itemCode +'.jpg';
  // title
  document.getElementById('orderDetail-title').innerHTML = title;
  // orderInfo
  document.getElementById('orderDetail-orderInfo').innerHTML = orderInfo;
  // deliveryInfo
  document.getElementById('orderDetail-deliveryInfo').innerHTML = deliveryInfo;
  // processInfo
  document.getElementById('orderDetail-processInfo').innerHTML = processInfo;
}











// function orderList_loadCouponDetail
/*
  description:
    1. loads detailed coupon data that's clicked
*/
function orderList_loadCouponDetail() {
  // alert('coupon');

}









/*

    wrapper-managePoints related functions

*/

// function managePoints_reloadPoints
/*
  description:
    1.  get points data from the server and display on the page
  resources:
    1.  template is described below

  template:
    <!-- listItem -->
    <li class="more-listItem">
      <label class="more-listItem-label">[2014년 9월 17일] 적립 포인트 1,000p</label>
      <span class="more-listItem-angle fa fa-angle-down fa-3x"></span>
    </li>
    <!-- context -->
    <div class="more-listItem-context">
      <p class="more-listItem-context-text">
        포인트 상세내역<br />
        포인트 상세내역<br />
        포인트 상세내역<br />
        포인트 상세내역<br />
        포인트 상세내역<br />
        포인트 상세내역<br />
        포인트 상세내역<br />
        포인트 상세내역<br />
      </p>
    </div>
*/
function managePoints_reloadPoints() {
  // 1. get data from server

  // debugging JSON example DO NOT erase
  // debugging JSON example DO NOT erase
  // debugging JSON example DO NOT erase
  var orderJSON = {
    "pointList":[
      {"date":"20201231", "type":0, "point":"1000"},
      {"date":"30201231", "type":1, "point":"2000"},
      {"date":"40201231", "type":2, "point":"3000"},
      {"date":"50201231", "type":0, "point":"4000"},
      {"date":"60201231", "type":1, "point":"5000"},
      {"date":"70201231", "type":2, "point":"6000"}
    ]
  };

  var label = null;
  var type = null;
  var context = null;

  // 3. loading and HTMLformatting pointList from orderJSON
  // 3. loading and HTMLformatting pointList from orderJSON
  // 3. loading and HTMLformatting pointList from orderJSON
  for (var i = 0; i < orderJSON.pointList.length ; i++) {

    // 2. format
    // label looks like: '[0000년 0월 00일] 수거/소멸/적립 포인트 1,000p'
    // translate type
    switch (orderJSON.pointList[i].type) {
      case 0: type = "수거"; break;
      case 1: type = "적립"; break;
      case 2: type = "소멸"; break;
      default: break;
    }
    label = "[" + orderJSON.pointList[i].date + "] " + type + " 포인트 " + orderJSON.pointList[i].point + "p";
    context = '서버 상세내역<br />서버 상세내역<br />서버 상세내역<br />';

    // fit data in the desired DOM structure
    var content = '<!-- listItem --><li class="more-listItem"><label class="more-listItem-label">' + label + '</label><span class="more-listItem-angle fa fa-angle-down fa-3x"></span></li><!-- context --><div class="more-listItem-context"><p class="more-listItem-context-text">' + context + '</p></div>';

    // dummy div
    var div = document.createElement('div');
    div.innerHTML = content;

    // append loaded htmls to productList
    document.getElementById('more-pointList').appendChild(div);
  }

  // 4. reset listItemSettings
  listItemSettings();
}
