// default Settings
function defaultSettings() {
  // setting wrapper position top coordinate
  var barFixedTopHeight = document.getElementById('barFixedTop').offsetHeight;
  document.getElementById('wrapper-main').style.marginTop = barFixedTopHeight + "px";
  // other functions to include
  sideBar_items_sending();
}









// cordova settings
function cordovaSettings() {
  // fastclick.js register
  // FastClick.attach(document.body);
  // FastClick.attach('#main-wrapper');

  // alert('cordovaSettings');

  // Register the event listener
  // document.addEventListener("deviceready", onDeviceReady, false);

  // pause
  document.addEventListener("pause", cordovaOnPause, false);
  // clicks on document
  document.addEventListener("click", function() {
    // alert('document clicked');
    // example();
  });
}

function onDeviceReady() {
  // Do Something
  alert('onDeviceReady');
}

function cordovaOnPause() {
  // exit the app
  navigator.app.exitApp();
}

function example() {
  alert('example');
  // exit the app
  navigator.app.exitApp();
}







// tabs from howto.html
// when one of the subMenuBar-Tab is clicked
function tabClickedFromHowto() {
  var subMenuBar_Tab = document.getElementsByClassName('subMenuBar-Tab');
  var howto_contents = document.getElementsByClassName('howto-contents');

  // default settings for tabs
  subMenuBar_Tab[0].style.borderBottom = '4px solid white';
  howto_contents[0].style.display = 'block';

  for(var i = 0; i < howto_contents.length; i++) {
    // when tab is clicked
    subMenuBar_Tab[i].addEventListener('click', (function(i) {
      return function() {
        // reset all howto-contents
        for(var j = 0; j < howto_contents.length; j++) {
          subMenuBar_Tab[j].style.border = 'none'
          howto_contents[j].style.display = 'none';
        }

        this.style.borderBottom = '4px solid white';
        howto_contents[i].style.display = 'block';
      };
    })(i), false);
  }
}








// when tabs from store.html are clicked
function tabClickedFromStore(id) {

  // resetting style.border attribute for all tabs
  eventGoodsTab.style.borderBottom = 'none';
  lifeGoodsTab.style.borderBottom = 'none';
  secondHandedTab.style.borderBottom = 'none';
  document.getElementById('eventGoodsTab-contents').style.display = 'none';
  document.getElementById('lifeGoodsTab-contents').style.display = 'none';
  document.getElementById('secondHandedTab-contents').style.display = 'none';

  // show what's clicked
  document.getElementById(id).style.borderBottom = '4px solid white';
  document.getElementById(id + "-contents").style.display = 'block';
}








// when sideBar-Toggle is clicked
document.getElementById('sideBar-Toggle').addEventListener('click', function(event) {
  // preventing default events
  event.preventDefault();

  var sideBar = document.getElementById('sideBar');
  // var sideBarWidth = sideBar.offsetWidth;
  var wrapper = document.getElementById('wrapper-main');
  var barFixedTop = document.getElementById('barFixedTop');

  if (sideBar.classList.contains('openSideBar')) { // if objects are closed
    // reset attributes
    wrapper.classList.remove('openSideBar');
    sideBar.classList.remove('openSideBar');
    barFixedTop.classList.remove('openSideBar');
    // close
    wrapper.classList.add('closeSideBar');
    sideBar.classList.add('closeSideBar');
    barFixedTop.classList.add('closeSideBar');
  } else { // if objects are open
    // reset attributes
    wrapper.classList.remove('closeSideBar');
    sideBar.classList.remove('closeSideBar');
    barFixedTop.classList.remove('closeSideBar');
    // open
    wrapper.classList.add('openSideBar');
    sideBar.classList.add('openSideBar');
    barFixedTop.classList.add('openSideBar');
  }
});
/*
  // toggle open class
  sideBar.toggleClass("open");
  // slide
  if (sideBar.hasClass("open")) {
    sideBar.animate({
      right: "0px"
    }, 350, 'swing');
    wrapper.animate({
      right: sideBarWidth
    }, 350, 'swing');
    barFixedTop.animate({
      right: sideBarWidth
    }, 350, 'swing');

  } else {
    sideBar.animate({
      right: -sideBarWidth
    }, 350, 'swing');
    wrapper.animate({
      right: "0px"
    }, 350, 'swing');
    barFixedTop.animate({
      right: "0px"
    }, 350, 'swing');
  }
*/






/*

    sideBar related scripts

*/

// function sideBar_items_sending
/*
  description:
    1.  sending info about which wrapper to show in more.html
    2.  it can be called from anywhere on this app
*/
function sideBar_items_sending() {
  var sideBar_Items = document.getElementsByClassName('sidebar-Item');
  // addEventListener to all sideBar-Items
  for (var i = 0; i < sideBar_Items.length; i++) {
    // listen for clicks
    sideBar_Items[i].addEventListener('click', (function(i) {
      return function() {
        if (i >= 0 && i < sideBar_Items.length - 2) { // if items except two last items are clicked
          // move to more.html with page number corresonping to the clicked sideBar-Item number
          window.location = "more.html?page=" + i;

        } else if (i == sideBar_Items.length - 2) { // if second to last item is clicked
          // move to settings.html
          window.location = 'settings.html';
        }
        else { // if last item item is clicked
          // do logout=go to login.html
          window.location = 'login.html';
        }
      };
    })(i), false);
  }
}










/*

    pickup.html

*/

// when tabs from pickup.html are clicked
function tabClickedFromPickup(id) {

  // resetting style.border attribute for all tabs
  recycleTab.style.borderBottom = 'none';
  electronicsTab.style.borderBottom = 'none';
  document.getElementById('recycleTab-contents').style.display = 'none';
  document.getElementById('electronicsTab-contents').style.display = 'none';

  // show what's clicked
  document.getElementById(id).style.borderBottom = '4px solid white';
  document.getElementById(id + "-contents").style.display = 'block';
}






// when user requests electronicsRequest by clicking electronicsTab-pickupButton
// listening electronicsTab-pickup button
// this shows wrapper named pickup-electronicsRequest
document.getElementById('electronicsTab-pickupButton').addEventListener('click', function() {
  // hide current wrapper
  document.getElementById('electronicsTab-contents').style.display = 'none';
  // hide pickerProfile
  document.getElementById('pickerProfile').style.display = 'none';
  // show wrapper pickup-electronicsRequest
  document.getElementById('pickup-electronicsRequest').style.display = 'block';
});

