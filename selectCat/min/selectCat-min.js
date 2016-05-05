"use strict";var myCats;angular.module("myWishListApp.selectCat",["ngRoute","firebase"]).config(["$routeProvider",function(e,t){e.when("/selectCat",{templateUrl:"selectCat/selectCat.html",controller:"selectCatCtrl"})}]).controller("selectCatCtrl",["$scope","$location","$firebaseArray","$firebaseObject",function(e,t,s,c){function a(){1==listCreated?(document.getElementById("addItemsScreen").style.display="block",document.getElementById("addCat").style.display="none",document.getElementById("categoryChoicesScreen").style.display="none",e.category=whichList,console.log(listCreated)):(document.getElementById("addItemsScreen").style.display="none",document.getElementById("addCat").style.display="block",document.getElementById("categoryChoicesScreen").style.display="block",e.category=whichList)}function o(){document.getElementById("slideOutMenu").style.visibility="hidden",document.getElementById("slideOutMenu").removeEventListener("transitionend",o)}console.log("selectCategoryScreen");var i=new Firebase("https://mywishlistlg.firebaseio.com/"),l=document.getElementById("categoryChoicesScreen").children,n=i.getAuth(),r=["noCategories"];console.log("Authenticated user with uid: WELCOME",n,n.password.email,n.uid),e.listName="Welcome: "+n.password.email;var y=!0;e.cat0="Apparel",e.cat1="Home",e.cat2="Books",e.cat3="Pet",e.cat4="Sports",e.cat5="Accessories",e.cat6="Groceries",e.cat7="Music",e.button_clicked=!0,a(),e.AddPost=function(c){if(1==listCreated)var a=new Firebase("https://mywishlistlg.firebaseio.com/theUsers/"+whichList+"/Articles/");else{var a=new Firebase("https://mywishlistlg.firebaseio.com/theUsers/"+c+"/Articles/");whichList=c}var o=e.category,i=s(a),l=e.myPosts.details,r=e.myPosts.details,y=e.myPosts.link,m=e.myPosts.note,d=e.myPosts.price,h=n.password.email;a.push({category:o,title:r,details:l,link:y,note:m,price:d,email:h},function(e){e?console.log("Error:",e):console.log("loading")}),t.path("/fullList")};var m=new Firebase("https://mywishlistlg.firebaseio.com/theUsers"),d=m.orderByChild("email").equalTo(n.password.email);e.emails=s(d);for(var h=s(d),u=0;u<l.length;u++)l[u].id="myChoice"+u;e.AddCategory=function(c,a){console.log(a);var o=new Firebase("https://mywishlistlg.firebaseio.com/theUsers/"+a+"/"),i=s(o),l=new Firebase("https://mywishlistlg.firebaseio.com/theUsers/"+a+"/yourCategories"),r=c,y=n.password.email;o.child("yourCategories").on("value",function(e){myCats=e.val()}),"noCategories"==myCats[0]?myCats=[c]:(console.log(myCats),myCats.indexOf(c)>-1?(alert("category already exists"),t.path("/welcome")):myCats.push(c)),l.set(myCats),listCreated=!0,e.button_clicked=!0;var m=e.category;return document.getElementById("addItemsScreen").style.display="block",document.getElementById("addCat").style.display="none",document.getElementById("categoryChoicesScreen").style.display="none",!1},e.mySelection=function(t){console.log("myChoice"+t);for(var s=document.getElementsByClassName("chosenCat"),c=0;c<s.length;c++)s[c].className="cat";switch(t){case 0:myChoice0.className="chosenCat",e.current_Selection=e.cat0,e.category=e.cat0,whichList="Apparel";break;case 1:myChoice1.className="chosenCat",e.current_Selection=e.cat1,e.category=e.cat1,whichList="Home";break;case 2:myChoice2.className="chosenCat",e.current_Selection=e.cat2,e.category=e.cat2,whichList="Books";break;case 3:myChoice3.className="chosenCat",e.current_Selection=e.cat3,e.category=e.cat3,whichList="Pet";break;case 4:myChoice4.className="chosenCat",e.current_Selection=e.cat4,e.category=e.cat4,whichList="Sports";break;case 5:myChoice5.className="chosenCat",e.current_Selection=e.cat5,e.category=e.cat5,whichList="Accessories";break;case 6:myChoice6.className="chosenCat",e.current_Selection=e.cat6,e.category=e.cat6,whichList="Games";break;case 7:myChoice7.className="chosenCat",e.current_Selection=e.cat6,e.category=e.cat7,whichList="Music"}e.button_clicked=!1},e.gotSelectCat=function(){t.path("/selectCat")},e.showMyLists=function(){listCreated=!1,t.path("/welcome")},e.showMenu=function(){document.getElementById("myMenu").style.display="none",document.getElementById("myMenuClose").style.display="block",document.getElementById("slideOutMenu").style.opacity="1",document.getElementById("slideOutMenu").style.visibility="visible"},e.closeMenu=function(){document.getElementById("myMenu").style.display="block",document.getElementById("myMenuClose").style.display="none",document.getElementById("slideOutMenu").style.opacity="0",document.getElementById("slideOutMenu").addEventListener("transitionend",o)}}]);