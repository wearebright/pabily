(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{212:function(e,t,a){"use strict";var r=a(3),n=a(4),o=a(7),s=a(6),l=a(8),c=a(0),i=a.n(c),m=a(18),u=a.n(m),h=a(221),g=a.n(h),d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={shareButton:!1},a.shareLink=function(e){navigator.share&&navigator.share({url:e.link}).then(function(){return console.log("Successful share")}).catch(function(e){return console.log("Error sharing",e)})},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){navigator.share&&this.setState({shareButton:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,this.state.shareButton&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns nav-home-btn",style:{position:"relative"},onClick:function(){return e.shareLink(e.props)}},i.a.createElement("i",{className:"si si-share"}),i.a.createElement(u.a,{duration:"500"})))}}]),t}(c.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},i.a.createElement("div",{className:"block m-0"},i.a.createElement("div",{className:"block-content p-0 ".concat(this.props.dark&&"nav-dark")},i.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&i.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/")},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(u.a,{duration:"500"})),this.props.goto_orders_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/my-orders")},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(u.a,{duration:"500"})),this.props.goto_accounts_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/my-account")},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(u.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns ".concat(this.props.dark&&"nav-dark"),style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.goBack()},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(u.a,{duration:"500"}))),i.a.createElement("p",{className:"form-control search-input d-flex align-items-center ".concat(this.props.dark&&"nav-dark")},this.props.logo&&i.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?i.a.createElement(i.a.Fragment,null,this.props.from_checkout?i.a.createElement("span",{className:"nav-page-title"},localStorage.getItem("cartToPayText")," ",i.a.createElement("span",{style:{color:localStorage.getItem("storeColor")}},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),this.props.title,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))):i.a.createElement("span",{className:"nav-page-title"},this.props.title)):null,this.props.has_delivery_icon&&i.a.createElement(g.a,{left:!0},i.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?i.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},i.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),i.a.createElement("br",null),i.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},i.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,i.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&i.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},i.a.createElement("i",{className:"si si-magnifier"}),i.a.createElement(u.a,{duration:"500"})),this.props.homeButton&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns nav-home-btn",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/")},200)}},i.a.createElement("i",{className:"si si-home"}),i.a.createElement(u.a,{duration:"500"})),this.props.shareButton&&i.a.createElement(d,{link:window.location.href})))))))}}]),t}(c.Component);p.contextTypes={router:function(){return null}};t.a=p},221:function(e,t,a){"use strict";function r(e,t){var a=t.left,r=t.right,n=t.mirror,o=t.opposite,s=(a?1:0)|(r?2:0)|(n?16:0)|(o?32:0)|(e?64:0);if(u.hasOwnProperty(s))return u[s];if(!n!=!(e&&o)){var l=[r,a];a=l[0],r=l[1]}var c=a?"-100%":r?"100%":"0",m=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+c+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+c+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return u[s]=(0,i.animation)(m),u[s]}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.defaults,t=e.children,a=(e.out,e.forever),n=e.timeout,o=e.duration,s=void 0===o?i.defaults.duration:o,c=e.delay,m=void 0===c?i.defaults.delay:c,u=e.count,h=void 0===u?i.defaults.count:u,g=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),d={make:r,duration:void 0===n?s:n,delay:m,forever:a,count:h,style:{animationFillMode:"both"}};return g.left,g.right,g.mirror,g.opposite,(0,l.default)(g,d,d,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,s=a(76),l=(o=s)&&o.__esModule?o:{default:o},c=a(2),i=a(57),m={out:c.bool,left:c.bool,right:c.bool,mirror:c.bool,opposite:c.bool,duration:c.number,timeout:c.number,delay:c.number,count:c.number,forever:c.bool},u={};n.propTypes=m,t.default=n,e.exports=t.default},331:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(4),o=a(7),s=a(6),l=a(8),c=a(0),i=a.n(c),m=a(42),u=a(49),h=a(18),g=a.n(h),d=a(44),p=a.n(d),y=a(354),f=a(52),E=a.n(f),v=a(16),b=a(83),x=a(212),S=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={total:null,restaurants:[],loading:!1,loading_more:!0,selfpickup:!1,userPreferredSelectionDelivery:!0,userPreferredSelectionSelfPickup:!1,no_restaurants:!1,data:[],review_data:[],isHomeDelivery:!0},a.getMyFavoriteRestaurants=function(){if(localStorage.getItem("userSetAddress")){a.setState({loading:!0});var e=JSON.parse(localStorage.getItem("userSetAddress"));a.props.getFavoriteRestaurants(e.lat,e.lng).then(function(e){e&&e.payload.length?a.setState({total:e.payload.length,no_restaurants:!1,loading:!1,loading_more:!1}):a.setState({total:0,no_restaurants:!0,loading:!1,loading_more:!1})})}},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.getMyFavoriteRestaurants(),"DELIVERY"===localStorage.getItem("userPreferredSelection")&&this.setState({userPreferredSelectionDelivery:!0,isHomeDelivery:!0}),"SELFPICKUP"===localStorage.getItem("userPreferredSelection")&&"true"===localStorage.getItem("enSPU")?this.setState({userPreferredSelectionSelfPickup:!0,isHomeDelivery:!1}):(localStorage.setItem("userPreferredSelection","DELIVERY"),localStorage.setItem("userSelected","DELIVERY"),this.setState({userPreferredSelectionDelivery:!0,isHomeDelivery:!0}))}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{boxshadow:!0,has_title:!0,title:localStorage.getItem("favouriteStoresPageTitle"),disable_search:!0,goto_accounts_page:!0,homeButton:!0}),i.a.createElement("div",{className:"bg-white mb-100"},this.state.no_restaurants&&i.a.createElement("div",{className:"bg-light "+("true"===localStorage.getItem("enSPU")?"sticky-top":"pt-3")},i.a.createElement("div",{className:"px-15 py-3 d-flex justify-content-between align-items-center pt-100"},i.a.createElement("h1",{className:"restaurant-count mb-0 mr-2"},localStorage.getItem("noRestaurantMessage")))),this.state.loading?i.a.createElement(m.a,{height:378,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},i.a.createElement("rect",{x:"20",y:"20",rx:"4",ry:"4",width:"80",height:"78"}),i.a.createElement("rect",{x:"144",y:"30",rx:"0",ry:"0",width:"115",height:"18"}),i.a.createElement("rect",{x:"144",y:"60",rx:"0",ry:"0",width:"165",height:"16"}),i.a.createElement("rect",{x:"20",y:"145",rx:"4",ry:"4",width:"80",height:"78"}),i.a.createElement("rect",{x:"144",y:"155",rx:"0",ry:"0",width:"115",height:"18"}),i.a.createElement("rect",{x:"144",y:"185",rx:"0",ry:"0",width:"165",height:"16"}),i.a.createElement("rect",{x:"20",y:"270",rx:"4",ry:"4",width:"80",height:"78"}),i.a.createElement("rect",{x:"144",y:"280",rx:"0",ry:"0",width:"115",height:"18"}),i.a.createElement("rect",{x:"144",y:"310",rx:"0",ry:"0",width:"165",height:"16"})):i.a.createElement(i.a.Fragment,null,0===this.props.restaurants.length?i.a.createElement(m.a,{height:378,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},i.a.createElement("rect",{x:"20",y:"20",rx:"4",ry:"4",width:"80",height:"78"}),i.a.createElement("rect",{x:"144",y:"30",rx:"0",ry:"0",width:"115",height:"18"}),i.a.createElement("rect",{x:"144",y:"60",rx:"0",ry:"0",width:"165",height:"16"}),i.a.createElement("rect",{x:"20",y:"145",rx:"4",ry:"4",width:"80",height:"78"}),i.a.createElement("rect",{x:"144",y:"155",rx:"0",ry:"0",width:"115",height:"18"}),i.a.createElement("rect",{x:"144",y:"185",rx:"0",ry:"0",width:"165",height:"16"}),i.a.createElement("rect",{x:"20",y:"270",rx:"4",ry:"4",width:"80",height:"78"}),i.a.createElement("rect",{x:"144",y:"280",rx:"0",ry:"0",width:"115",height:"18"}),i.a.createElement("rect",{x:"144",y:"310",rx:"0",ry:"0",width:"165",height:"16"})):i.a.createElement("div",{className:"pt-50"},this.props.restaurants.map(function(t,a){return i.a.createElement(i.a.Fragment,{key:t.id},i.a.createElement(p.a,null,i.a.createElement("div",{className:"col-xs-12 col-sm-12 restaurant-block"},i.a.createElement(u.a,{to:"../stores/"+t.slug,delay:200,className:"block text-center mb-3",clickAction:function(){"DELIVERY"===localStorage.getItem("userPreferredSelection")&&1===t.delivery_type&&localStorage.setItem("userSelected","DELIVERY"),"SELFPICKUP"===localStorage.getItem("userPreferredSelection")&&2===t.delivery_type&&localStorage.setItem("userSelected","SELFPICKUP"),"DELIVERY"===localStorage.getItem("userPreferredSelection")&&3===t.delivery_type&&localStorage.setItem("userSelected","DELIVERY"),"SELFPICKUP"===localStorage.getItem("userPreferredSelection")&&3===t.delivery_type&&localStorage.setItem("userSelected","SELFPICKUP")}},i.a.createElement("div",{className:"block-content block-content-full ".concat(t.is_featured&&t.is_active?"ribbon ribbon-bookmark ribbon-warning pt-2":"pt-2"," ")},t.is_featured?i.a.createElement("div",{className:"ribbon-box"},localStorage.getItem("restaurantFeaturedText")):null,i.a.createElement(E.a,{duration:500},i.a.createElement("img",{src:t.image,alt:t.name,className:"restaurant-image ".concat(!t.is_active&&"restaurant-not-active")}))),i.a.createElement("div",{className:"block-content block-content-full restaurant-info"},i.a.createElement("div",{className:"font-w600 mb-5 text-dark"},t.name),i.a.createElement("div",{className:"font-size-sm text-muted truncate-text text-muted"},t.description),!t.is_active&&i.a.createElement("span",{className:"restaurant-not-active-msg"},localStorage.getItem("restaurantNotActiveMsg")),i.a.createElement("hr",{className:"my-10"}),i.a.createElement("div",{className:"text-center restaurant-meta mt-5 d-flex align-items-center justify-content-between text-muted"},i.a.createElement("div",{className:"col-2 p-0 text-left"},i.a.createElement("i",{className:"fa fa-star pr-1 ".concat(!t.is_active&&"restaurant-not-active"),style:{color:localStorage.getItem("storeColor")}})," ","0"===t.avgRating?t.rating:t.avgRating),i.a.createElement("div",{className:"col-4 p-0 text-center"},e.state.selfpickup?i.a.createElement("span",null,i.a.createElement("i",{className:"si si-pointer pr-1"}),t.distance&&t.distance.toFixed(1)," ","Km"):i.a.createElement("span",null,i.a.createElement("i",{className:"si si-clock pr-1"})," ",t.delivery_time," ",localStorage.getItem("homePageMinsText"))),i.a.createElement("div",{className:"col-6 p-0 text-center"},i.a.createElement("i",{className:"si si-wallet"})," ","left"===localStorage.getItem("currencySymbolAlign")&&i.a.createElement(i.a.Fragment,null,localStorage.getItem("currencyFormat"),t.price_range," "),"right"===localStorage.getItem("currencySymbolAlign")&&i.a.createElement(i.a.Fragment,null,t.price_range,localStorage.getItem("currencyFormat")," "),localStorage.getItem("homePageForTwoText")))),i.a.createElement(g.a,{duration:"500",hasTouch:!1})))))}))),this.state.loading_more?i.a.createElement("div",{className:""},i.a.createElement(m.a,{height:120,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},i.a.createElement("rect",{x:"20",y:"20",rx:"4",ry:"4",width:"80",height:"78"}),i.a.createElement("rect",{x:"144",y:"35",rx:"0",ry:"0",width:"115",height:"18"}),i.a.createElement("rect",{x:"144",y:"65",rx:"0",ry:"0",width:"165",height:"16"}))):null))}}]),t}(c.Component);t.default=Object(y.a)(Object(v.b)(function(e){return{restaurants:e.restaurant.favoriteRestaurants}},{getDeliveryRestaurants:b.a,getSelfpickupRestaurants:b.e,getFavoriteRestaurants:b.b})(S))}}]);