(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        100: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = "PLACE_ORDER"
        },
        101: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = "CONFIRM_CART"
        },
        102: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = "GET_SINGLE_DELIVERY_ORDER"
        },
        103: function(e, t, a) {
            "use strict";
            var n = a(3),
                r = a(4),
                o = a(7),
                l = a(6),
                c = a(8),
                i = a(0),
                s = a.n(i),
                u = a(43),
                d = a(16),
                g = a(33),
                m = a(27),
                p = a(112),
                f = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++) c[i] = arguments[i];
                        return (a = Object(o.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(c)))).__useApp = function() {
                            a.refs.phoneView && a.refs.phoneView.classList.remove("blured"), a.refs.phone && a.refs.phone.classList.add("phone-use"), localStorage.setItem("useAppClicked", "true")
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            (this.props.itemId || this.props.restaurant) && (console.log("trigger use app button"), this.__useApp(), setTimeout(function() {
                                e.forceUpdate()
                            }, 2e3))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                                className: "container-fluid p-0 main-container-desktop"
                            }, s.a.createElement("div", {
                                className: "container"
                            }, s.a.createElement("div", {
                                className: "row"
                            }, s.a.createElement("div", {
                                className: "col-md-6"
                            }, s.a.createElement("div", {
                                className: "col-md-12 left-col"
                            }, s.a.createElement("img", {
                                src: "/assets/img/logos/".concat(localStorage.getItem("storeLogo")),
                                alt: localStorage.getItem("storeName"),
                                className: "desktop-logo"
                            }), s.a.createElement("h1", {
                                className: "desktop-title"
                            }, localStorage.getItem("desktopHeading")), s.a.createElement("h3", {
                                className: "desktop-subtitle",
                                dangerouslySetInnerHTML: {
                                    __html: localStorage.getItem("desktopSubHeading")
                                }
                            }), s.a.createElement("div", {
                                className: "btn-unblur",
                                onClick: this.__useApp,
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("desktopUseAppButton")))), s.a.createElement("div", {
                                className: "col-md-6 mt-50"
                            }, s.a.createElement("div", {
                                className: "col-md-12 ".concat("true" !== localStorage.getItem("useAppClicked") && "blured"),
                                ref: "phoneView"
                            }, s.a.createElement("div", {
                                className: "phone ".concat("true" === localStorage.getItem("useAppClicked") && "phone-use"),
                                ref: "phone"
                            }, s.a.createElement("div", {
                                className: "notch"
                            }), s.a.createElement("div", {
                                className: "iframe-wrapper"
                            }, s.a.createElement("iframe", {
                                title: "appIframe",
                                src: window.location,
                                frameBorder: "0",
                                id: "appIframe"
                            })))))))))
                        }
                    }]), t
                }(i.Component),
                h = a(52),
                S = a.n(h),
                E = a(78),
                v = a.n(E),
                b = a(56),
                y = a.n(b),
                I = function(e) {
                    function t() {
                        return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                                className: "container-fluid",
                                style: {
                                    backgroundColor: "#FBFBFD"
                                }
                            }, s.a.createElement("div", {
                                className: "container"
                            }, s.a.createElement("div", {
                                className: "row"
                            }, s.a.createElement(S.a, {
                                left: !0
                            }, s.a.createElement("div", {
                                className: "col-xl-3 d-table mt-50 mb-50"
                            }, s.a.createElement(y.a, {
                                className: "Tilt",
                                options: {
                                    max: 40,
                                    perspective: 650
                                }
                            }, s.a.createElement("div", {
                                className: "col-xl-12 text-center d-table-cell align-middle store-achievement"
                            }, "null" !== localStorage.getItem("desktopAchievementOneTitle") && s.a.createElement("h3", null, localStorage.getItem("desktopAchievementOneTitle")), "null" !== localStorage.getItem("desktopAchievementOneSub") && s.a.createElement("h4", {
                                className: "m-0"
                            }, localStorage.getItem("desktopAchievementOneSub")))))), s.a.createElement(v.a, {
                                top: !0
                            }, s.a.createElement("div", {
                                className: "col-xl-3 d-table mt-50 mb-50"
                            }, s.a.createElement(y.a, {
                                className: "Tilt",
                                options: {
                                    max: 40,
                                    perspective: 650
                                }
                            }, s.a.createElement("div", {
                                className: "col-xl-12 text-center d-table-cell align-middle store-achievement"
                            }, "null" !== localStorage.getItem("desktopAchievementTwoTitle") && s.a.createElement("h3", null, localStorage.getItem("desktopAchievementTwoTitle")), "null" !== localStorage.getItem("desktopAchievementTwoSub") && s.a.createElement("h4", {
                                className: "m-0"
                            }, localStorage.getItem("desktopAchievementTwoSub")))))), s.a.createElement(v.a, {
                                bottom: !0
                            }, s.a.createElement("div", {
                                className: "col-xl-3 d-table mt-50 mb-50"
                            }, s.a.createElement(y.a, {
                                className: "Tilt",
                                options: {
                                    max: 40,
                                    perspective: 650
                                }
                            }, s.a.createElement("div", {
                                className: "col-xl-12 text-center d-table-cell align-middle store-achievement"
                            }, "null" !== localStorage.getItem("desktopAchievementThreeTitle") && s.a.createElement("h3", null, localStorage.getItem("desktopAchievementThreeTitle")), "null" !== localStorage.getItem("desktopAchievementThreeSub") && s.a.createElement("h4", {
                                className: "m-0"
                            }, localStorage.getItem("desktopAchievementThreeSub")))))), s.a.createElement(S.a, {
                                right: !0
                            }, s.a.createElement("div", {
                                className: "col-xl-3 d-table mt-50 mb-50"
                            }, s.a.createElement(y.a, {
                                className: "Tilt",
                                options: {
                                    max: 40,
                                    perspective: 650
                                }
                            }, s.a.createElement("div", {
                                className: "col-xl-12 text-center d-table-cell align-middle store-achievement"
                            }, "null" !== localStorage.getItem("desktopAchievementFourTitle") && s.a.createElement("h3", null, localStorage.getItem("desktopAchievementFourTitle")), "null" !== localStorage.getItem("desktopAchievementFourSub") && s.a.createElement("h4", {
                                className: "m-0"
                            }, localStorage.getItem("desktopAchievementFourSub"))))))))))
                        }
                    }]), t
                }(i.Component),
                _ = function(e) {
                    function t() {
                        return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement(f, {
                                restaurant: this.props.restaurant,
                                itemId: this.props.itemId
                            }), s.a.createElement(I, null), s.a.createElement(p.a, {
                                languages: this.props.languages,
                                handleOnChange: this.props.handleOnChange
                            }))
                        }
                    }]), t
                }(i.Component),
                O = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++) c[i] = arguments[i];
                        return (a = Object(o.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            showGdpr: !1
                        }, a.handleGdprClick = function() {
                            localStorage.setItem("gdprAccepted", "true"), a.setState({
                                showGdpr: !1
                            })
                        }, a.handleOnChange = function(e) {
                            a.props.getSingleLanguageData(e.target.value), localStorage.setItem("userPreferedLanguage", e.target.value)
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            if (null === localStorage.getItem("desktopLoaded")) console.log("FIRST LOAD"), localStorage.setItem("desktopLoaded", "1");
                            else {
                                var e = parseInt(localStorage.getItem("desktopLoaded"));
                                localStorage.setItem("desktopLoaded", e + 1)
                            }
                            localStorage.getItem("storeColor") || this.props.getSettings(), localStorage.getItem("gdprAccepted") || (localStorage.setItem("gdprAccepted", "false"), "true" === localStorage.getItem("showGdpr") && this.setState({
                                showGdpr: !0
                            })), "true" === localStorage.getItem("showGdpr") && "false" === localStorage.getItem("gdprAccepted") && this.setState({
                                showGdpr: !0
                            })
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            if (this.props.languages !== e.languages)
                                if (localStorage.getItem("userPreferedLanguage")) this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));
                                else if (e.languages.length) {
                                var t = e.languages.filter(function(e) {
                                    return 1 === e.is_default
                                })[0].id;
                                this.props.getSingleLanguageData(t)
                            }
                            setTimeout(function() {
                                "1" === localStorage.getItem("desktopLoaded") && window.location.reload(!0)
                            }, 2e3)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return s.a.createElement(s.a.Fragment, null, "true" === localStorage.getItem("showTryItOnPhone") && s.a.createElement("div", {
                                className: "use-on-phone"
                            }, s.a.createElement("img", {
                                src: "/assets/img/various/phone-icon.png",
                                className: "float-phone",
                                alt: "phone"
                            }), s.a.createElement("span", {
                                className: "ml-20"
                            }, s.a.createElement("span", {
                                className: "font-w700"
                            }, localStorage.getItem("desktopTryItOnPhoneTitle")), s.a.createElement("br", null), localStorage.getItem("desktopTryItOnPhoneSubTitle"))), this.state.showGdpr && s.a.createElement("div", {
                                className: "fixed-gdpr"
                            }, s.a.createElement("span", {
                                dangerouslySetInnerHTML: {
                                    __html: localStorage.getItem("gdprMessage")
                                }
                            }), s.a.createElement("span", null, s.a.createElement("button", {
                                className: "btn btn-sm ml-2",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor")
                                },
                                onClick: this.handleGdprClick
                            }, localStorage.getItem("gdprConfirmButton")))), s.a.createElement(u.a, {
                                seotitle: localStorage.getItem("seoMetaTitle"),
                                seodescription: localStorage.getItem("seoMetaDescription"),
                                ogtype: "website",
                                ogtitle: localStorage.getItem("seoOgTitle"),
                                ogdescription: localStorage.getItem("seoOgDescription"),
                                ogurl: window.location.href,
                                twittertitle: localStorage.getItem("seoTwitterTitle"),
                                twitterdescription: localStorage.getItem("seoTwitterDescription")
                            }), s.a.createElement(_, {
                                languages: this.props.languages,
                                handleOnChange: this.handleOnChange,
                                restaurant: this.props.restaurant,
                                itemId: this.props.itemId
                            }))
                        }
                    }]), t
                }(i.Component);
            t.a = Object(d.b)(function(e) {
                return {
                    settings: e.settings.settings,
                    languages: e.languages.languages,
                    language: e.languages.language
                }
            }, {
                getSettings: g.a,
                getSingleLanguageData: m.b
            })(O)
        },
        112: function(e, t, a) {
            "use strict";
            var n = a(3),
                r = a(4),
                o = a(7),
                l = a(6),
                c = a(8),
                i = a(0),
                s = a.n(i),
                u = function(e) {
                    function t() {
                        return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement("footer", {
                                className: "desktop-footer bg-white opacity-1"
                            }, s.a.createElement("div", {
                                className: "container"
                            }, s.a.createElement("div", {
                                className: "content content-full"
                            }, s.a.createElement("div", {
                                className: "row items-push-2x mt-30",
                                style: {
                                    marginLeft: "25rem"
                                }
                            }, s.a.createElement("div", {
                                className: "col-md-6"
                            }, s.a.createElement("img", {
                                src: "/assets/img/logos/".concat(localStorage.getItem("storeLogo")),
                                alt: localStorage.getItem("storeName"),
                                className: "footer-logo mb-20"
                            }), s.a.createElement("div", {
                                className: "font-size-sm mb-30",
                                dangerouslySetInnerHTML: {
                                    __html: localStorage.getItem("desktopFooterAddress")
                                }
                            })), s.a.createElement("div", {
                                className: "col-md-6"
                            }, s.a.createElement("h3", {
                                className: "h5 font-w700"
                            }, localStorage.getItem("desktopFooterSocialHeader")), "null" !== localStorage.getItem("desktopSocialFacebookLink") && s.a.createElement("a", {
                                href: localStorage.getItem("desktopSocialFacebookLink"),
                                className: "btn btn-sm btn-rounded btn-alt-secondary mr-10",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, s.a.createElement("i", {
                                className: "fa fa-fw fa-facebook"
                            })), "null" !== localStorage.getItem("desktopSocialGoogleLink") && s.a.createElement("a", {
                                href: localStorage.getItem("desktopSocialGoogleLink"),
                                className: "btn btn-sm btn-rounded btn-alt-secondary mr-10",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, s.a.createElement("i", {
                                className: "fa fa-fw fa-google-plus"
                            })), "null" !== localStorage.getItem("desktopSocialYoutubeLink") && s.a.createElement("a", {
                                href: localStorage.getItem("desktopSocialYoutubeLink"),
                                className: "btn btn-sm btn-rounded btn-alt-secondary mr-10",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, s.a.createElement("i", {
                                className: "fa fa-fw fa-youtube-play"
                            })), "null" !== localStorage.getItem("desktopSocialInstagramLink") && s.a.createElement("a", {
                                href: localStorage.getItem("desktopSocialInstagramLink"),
                                className: "btn btn-sm btn-rounded btn-alt-secondary mr-10",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, s.a.createElement("i", {
                                className: "fa fa-fw fa-instagram"
                            })), this.props.languages && this.props.languages.length > 1 && s.a.createElement("div", {
                                className: "mt-4 d-flex align-items-center"
                            }, s.a.createElement("div", {
                                className: "mr-2"
                            }, localStorage.getItem("changeLanguageText")), s.a.createElement("select", {
                                onChange: this.props.handleOnChange,
                                defaultValue: localStorage.getItem("userPreferedLanguage") ? localStorage.getItem("userPreferedLanguage") : this.props.languages.filter(function(e) {
                                    return 1 === e.is_default
                                })[0].id,
                                className: "form-control language-select"
                            }, this.props.languages.map(function(e) {
                                return s.a.createElement("option", {
                                    value: e.id,
                                    key: e.id
                                }, e.language_name)
                            })))))))))
                        }
                    }]), t
                }(i.Component);
            t.a = u
        },
        114: function(e, t, a) {
            "use strict";
            var n = a(3),
                r = a(4),
                o = a(7),
                l = a(6),
                c = a(8),
                i = a(0),
                s = a.n(i),
                u = a(18),
                d = a.n(u),
                g = a(168),
                m = a(46),
                p = function(e) {
                    function t() {
                        return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                                className: "col-12 p-0 sticky-top"
                            }, s.a.createElement("div", {
                                className: "block m-0"
                            }, s.a.createElement("div", {
                                className: "block-content p-0"
                            }, s.a.createElement("div", {
                                className: "input-group search-box"
                            }, !this.props.disable_back_button && s.a.createElement("div", {
                                className: "input-group-prepend"
                            }, s.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns",
                                style: {
                                    position: "relative"
                                }
                            }, s.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), s.a.createElement(d.a, {
                                duration: "500"
                            }))), s.a.createElement("p", {
                                className: "form-control search-input"
                            }, this.props.logo && (this.props.logoLink ? s.a.createElement(g.a, {
                                to: "/"
                            }, s.a.createElement("img", {
                                src: "/assets/img/logos/".concat(localStorage.getItem("storeLogo")),
                                alt: localStorage.getItem("storeName"),
                                className: "store-logo"
                            })) : s.a.createElement("img", {
                                src: "/assets/img/logos/".concat(localStorage.getItem("storeLogo")),
                                alt: localStorage.getItem("storeName"),
                                className: "store-logo"
                            }))), s.a.createElement("div", {
                                className: "input-group-append"
                            }, s.a.createElement(m.a, {
                                type: "header"
                            }), s.a.createElement("button", {
                                type: "submit",
                                className: "btn nav-location truncate-text",
                                style: {
                                    position: "relative",
                                    maxWidth: window.innerWidth - 130
                                },
                                onClick: function() {
                                    e.props.loggedin ? e.context.router.history.push("/my-addresses") : e.context.router.history.push("/search-location")
                                }
                            }, localStorage.getItem("userSetAddress") && s.a.createElement(s.a.Fragment, null, s.a.createElement("span", null, null !== JSON.parse(localStorage.getItem("userSetAddress")).tag ? s.a.createElement("strong", {
                                className: "text-uppercase mr-1"
                            }, JSON.parse(localStorage.getItem("userSetAddress")).tag) : null, null !== JSON.parse(localStorage.getItem("userSetAddress")).house ? s.a.createElement("span", null, JSON.parse(localStorage.getItem("userSetAddress")).house.length > 12 ? "".concat(JSON.parse(localStorage.getItem("userSetAddress")).house.substring(0, 12), "...") : JSON.parse(localStorage.getItem("userSetAddress")).house) : s.a.createElement("span", null, JSON.parse(localStorage.getItem("userSetAddress")).address.length > 18 ? "".concat(JSON.parse(localStorage.getItem("userSetAddress")).address.substring(0, 18), "...") : JSON.parse(localStorage.getItem("userSetAddress")).address))), s.a.createElement("i", {
                                className: "si si-arrow-right nav-location-icon ml-1",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }), s.a.createElement(d.a, {
                                duration: "500"
                            }))))))))
                        }
                    }]), t
                }(i.Component);
            p.contextTypes = {
                router: function() {
                    return null
                }
            }, t.a = p
        },
        115: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return c
            });
            var n = a(70),
                r = a(9),
                o = a(5),
                l = a.n(o),
                c = function(e, t, a) {
                    return function(o) {
                        l.a.post(r.W, {
                            push_token: e,
                            user_id: t,
                            token: a
                        }).then(function(e) {
                            e.data && console.log("Notification Token Saved");
                            var t = e.data;
                            return o({
                                type: n.a,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }
        },
        116: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return c
            }), a.d(t, "b", function() {
                return i
            }), a.d(t, "c", function() {
                return s
            });
            var n = a(30),
                r = a(9),
                o = a(5),
                l = a.n(o),
                c = function(e, t) {
                    return function(a) {
                        l.a.post(r.o, {
                            user_id: e,
                            token: t
                        }).then(function(e) {
                            var t = e.data,
                                r = t.filter(function(e) {
                                    return 0 === e.is_read
                                }).length;
                            return [a({
                                type: n.a,
                                payload: t
                            }), a({
                                type: n.b,
                                payload: r
                            })]
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                i = function(e, t) {
                    return function(a) {
                        l.a.post(r.T, {
                            user_id: e,
                            token: t
                        }).then(function(e) {
                            var t = e.data,
                                r = t.filter(function(e) {
                                    return 0 === e.is_read
                                }).length;
                            return [a({
                                type: n.a,
                                payload: t
                            }), a({
                                type: n.b,
                                payload: r
                            })]
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                s = function(e, t, a) {
                    return function(o) {
                        return l.a.post(r.U, {
                            user_id: e,
                            notification_id: t,
                            token: a
                        }).then(function(e) {
                            var t = e.data,
                                a = t.filter(function(e) {
                                    return 0 === e.is_read
                                }).length;
                            return [o({
                                type: n.a,
                                payload: t
                            }), o({
                                type: n.b,
                                payload: a
                            })]
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }
        },
        117: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = "GET_POPULAR_LOCATIONS"
        },
        118: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = "GET_PAYMENT_GATEWAYS"
        },
        119: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = "GET_DELIVERY_ORDERS"
        },
        12: function(e, t, a) {
            "use strict";
            a.d(t, "c", function() {
                return n
            }), a.d(t, "e", function() {
                return r
            }), a.d(t, "d", function() {
                return o
            }), a.d(t, "j", function() {
                return l
            }), a.d(t, "h", function() {
                return c
            }), a.d(t, "k", function() {
                return i
            }), a.d(t, "f", function() {
                return s
            }), a.d(t, "b", function() {
                return u
            }), a.d(t, "i", function() {
                return d
            }), a.d(t, "l", function() {
                return g
            }), a.d(t, "a", function() {
                return m
            }), a.d(t, "g", function() {
                return p
            });
            var n = "LOGIN_USER",
                r = "REGISTER_USER",
                o = "LOGOUT_USER",
                l = "UPDATE_USER_INFO",
                c = "SEND_OTP",
                i = "VERIFY_OTP",
                s = "RUNNING_ORDER",
                u = "GET_WALLET_TRANSACTIONS",
                d = "SEND_PASSWORD_RESET_EMAIL",
                g = "VERIFY_PASSWORD_RESET_OTP",
                m = "CHANGE_USER_PASSWORD",
                p = "SAVE_VAT_NUMBER"
        },
        13: function(e, t, a) {
            "use strict";
            var n = a(3),
                r = a(4),
                o = a(7),
                l = a(6),
                c = a(8),
                i = a(0),
                s = a.n(i),
                u = function(e) {
                    function t() {
                        return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement(s.a.Fragment, null, "true" === localStorage.getItem("useSimpleSpinner") ? s.a.createElement("div", {
                                className: "height-100 overlay-loading ongoing-payment-spin"
                            }, s.a.createElement("div", {
                                className: "spin-load"
                            })) : s.a.createElement("div", {
                                className: "height-100 overlay-loading"
                            }, s.a.createElement("div", null, s.a.createElement("img", {
                                src: "/assets/img/loading-food.gif",
                                alt: localStorage.getItem("pleaseWaitText")
                            }))))
                        }
                    }]), t
                }(i.Component);
            t.a = u
        },
        136: function(e, t, a) {
            e.exports = a(191)
        },
        15: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return n
            }), a.d(t, "c", function() {
                return r
            }), a.d(t, "e", function() {
                return o
            }), a.d(t, "h", function() {
                return l
            }), a.d(t, "g", function() {
                return c
            }), a.d(t, "k", function() {
                return i
            }), a.d(t, "f", function() {
                return s
            }), a.d(t, "i", function() {
                return u
            }), a.d(t, "a", function() {
                return d
            }), a.d(t, "j", function() {
                return g
            }), a.d(t, "d", function() {
                return m
            });
            var n = "GET_RESTAURANT_INFO",
                r = "GET_RESTAURANT_INFO_BY_ID",
                o = "GET_RESTAURANT_ITEMS",
                l = "RESET_ITEMS",
                c = "RESET_INFO",
                i = "SINGLE_ITEM",
                s = "RESET_BACKUP",
                u = "SEARCH_ITEM",
                d = "CLEAR_SEARCH",
                g = "SET_FAVORITE_REST",
                m = "GET_RESTAURANT_INFO_FOR_LOGGED_IN_USER"
        },
        191: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(345),
                r = a(170),
                o = a(355),
                l = a(3),
                c = a(4),
                i = a(7),
                s = a(6),
                u = a(8),
                d = a(0),
                g = a.n(d),
                m = a(103),
                p = a(49),
                f = a(18),
                h = a.n(f),
                S = a(43),
                E = a(317),
                v = a(113),
                b = a.n(v),
                y = a(356),
                I = a(16),
                _ = a(33),
                O = a(27),
                w = function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).state = {
                            splashVersion: 1
                        }, a.removeSplashScreen = function() {
                            document.getElementById("firstScreenSplash") && document.getElementById("firstScreenSplash").remove(), document.getElementById("firstScreenMain") && document.getElementById("firstScreenMain").classList.remove("hidden")
                        }, a.handleOnChange = function(e) {
                            a.props.getSingleLanguageData(e.target.value), localStorage.setItem("userPreferedLanguage", e.target.value)
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            localStorage.getItem("storeColor") && setTimeout(function() {
                                e.removeSplashScreen()
                            }, 1e3);
                            var t = Math.random() * Math.floor(9999999);
                            localStorage.setItem("splashVersion", t), this.setState({
                                splashVersion: t
                            })
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            var t = this;
                            if (this.props.settings !== e.settings && setTimeout(function() {
                                    t.removeSplashScreen()
                                }, 1e3), this.props.languages !== e.languages)
                                if (localStorage.getItem("userPreferedLanguage")) this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));
                                else if (e.languages.length) {
                                var a = e.languages.filter(function(e) {
                                    return 1 === e.is_default
                                })[0].id;
                                this.props.getSingleLanguageData(a)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.user;
                            return null !== localStorage.getItem("userSetAddress") ? g.a.createElement(y.a, {
                                to: "/stores"
                            }) : g.a.createElement(g.a.Fragment, null, g.a.createElement(S.a, {
                                seotitle: localStorage.getItem("seoMetaTitle"),
                                seodescription: localStorage.getItem("seoMetaDescription"),
                                ogtype: "website",
                                ogtitle: localStorage.getItem("seoOgTitle"),
                                ogdescription: localStorage.getItem("seoOgDescription"),
                                ogurl: window.location.href,
                                twittertitle: localStorage.getItem("seoTwitterTitle"),
                                twitterdescription: localStorage.getItem("seoTwitterDescription")
                            }), g.a.createElement("div", null, g.a.createElement("div", {
                                className: "col-12 p-0",
                                id: "firstScreenSplash"
                            }, g.a.createElement("div", {
                                className: "block m-0"
                            }, g.a.createElement("div", {
                                className: "block-content p-0"
                            }, g.a.createElement("img", {
                                src: "/assets/img/splash/splash.jpg?v=".concat(this.state.splashVersion),
                                className: "img-fluid",
                                alt: localStorage.getItem("storeName"),
                                style: {
                                    width: "100%"
                                }
                            })))), g.a.createElement("div", {
                                className: "col-12 p-0 hidden",
                                id: "firstScreenMain",
                                style: {
                                    height: "".concat(window.innerHeight, "px")
                                }
                            }, g.a.createElement("div", {
                                className: "block m-0 "
                            }, g.a.createElement("div", {
                                className: "block-content p-0"
                            }, localStorage.getItem("firstScreenHeroImage") && g.a.createElement(b.a, {
                                delay: 100,
                                src: localStorage.getItem("firstScreenHeroImage"),
                                placeholder: localStorage.getItem("firstScreenHeroImageSm")
                            }, function(e, t) {
                                return g.a.createElement("img", {
                                    src: e,
                                    alt: localStorage.getItem("storeName"),
                                    className: "img-fluid",
                                    style: {
                                        filter: t ? "blur(1.2px) brightness(0.9)" : "none",
                                        width: "".concat(window.innerWidth, "px")
                                    }
                                })
                            }))), g.a.createElement("div", {
                                className: "block m-0"
                            }, g.a.createElement("div", {
                                className: "block-content pt-10"
                            }, g.a.createElement("h1", {
                                className: "welcome-heading mt-10"
                            }, localStorage.getItem("firstScreenHeading")), g.a.createElement("h2", {
                                className: "welcome-subheading text-center mt-10 mb-10"
                            }, localStorage.getItem("firstScreenSubHeading")), g.a.createElement(p.a, {
                                to: "/search-location",
                                delay: 200,
                                className: "btn btn-lg btn-setup-location",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor"),
                                    position: "relative"
                                }
                            }, localStorage.getItem("firstScreenSetupLocation"), g.a.createElement(h.a, {
                                duration: "500",
                                hasTouch: "true"
                            })), e.success ? g.a.createElement("p", {
                                className: "login-block font-w500 mb-0"
                            }, localStorage.getItem("firstScreenWelcomeMessage"), " ", e.data.name) : g.a.createElement("p", {
                                className: "login-block mb-0"
                            }, localStorage.getItem("firstScreenLoginText"), " ", g.a.createElement(E.a, {
                                to: "/login",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("firstScreenLoginBtn"))), this.props.languages && this.props.languages.length > 1 && g.a.createElement("div", {
                                className: "mt-4 d-flex align-items-center justify-content-center mb-100"
                            }, g.a.createElement("div", {
                                className: "mr-2"
                            }, localStorage.getItem("changeLanguageText")), g.a.createElement("select", {
                                onChange: this.handleOnChange,
                                defaultValue: localStorage.getItem("userPreferedLanguage") ? localStorage.getItem("userPreferedLanguage") : this.props.languages.filter(function(e) {
                                    return 1 === e.is_default
                                })[0].id,
                                className: "form-control language-select"
                            }, this.props.languages.map(function(e) {
                                return g.a.createElement("option", {
                                    value: e.id,
                                    key: e.id
                                }, e.language_name)
                            }))))))))
                        }
                    }]), t
                }(d.Component),
                N = Object(I.b)(function(e) {
                    return {
                        settings: e.settings.settings,
                        user: e.user.user,
                        languages: e.languages.languages,
                        language: e.languages.language
                    }
                }, {
                    getSettings: _.a,
                    getSingleLanguageData: O.b
                })(w),
                k = a(28),
                T = a.n(k),
                j = a(40),
                A = a(34),
                x = a(97),
                C = a(114),
                R = a(60),
                P = a(9),
                L = a(42),
                D = a(44),
                F = a.n(D),
                G = a(354),
                U = a(5),
                M = a.n(U),
                V = a(52),
                W = a.n(V),
                H = a(83),
                B = function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).state = {
                            total: null,
                            restaurants: [],
                            loading: !1,
                            loading_more: !0,
                            selfpickup: !1,
                            userPreferredSelectionDelivery: !0,
                            userPreferredSelectionSelfPickup: !1,
                            no_restaurants: !1,
                            data: [],
                            review_data: [],
                            isHomeDelivery: !0
                        }, a.__getDeliveryRestaurants = function() {
                            if (localStorage.getItem("userSetAddress")) {
                                a.setState({
                                    loading: !0
                                });
                                var e = JSON.parse(localStorage.getItem("userSetAddress"));
                                a.props.getDeliveryRestaurants(e.lat, e.lng).then(function(e) {
                                    e && e.payload.length ? a.setState({
                                        total: e.payload.length,
                                        no_restaurants: !1,
                                        loading: !1,
                                        loading_more: !1
                                    }) : a.setState({
                                        total: null,
                                        no_restaurants: !0
                                    })
                                })
                            }
                        }, a.__getSelfPickupRestaurants = function() {
                            if (localStorage.getItem("userSetAddress")) {
                                a.setState({
                                    loading: !0
                                });
                                var e = JSON.parse(localStorage.getItem("userSetAddress"));
                                a.props.getSelfpickupRestaurants(e.lat, e.lng).then(function(e) {
                                    e && e.payload.length ? a.setState({
                                        total: e.payload.length,
                                        no_restaurants: !1,
                                        loading: !1,
                                        loading_more: !1
                                    }) : a.setState({
                                        total: null,
                                        loading: !1,
                                        loading_more: !1,
                                        no_restaurants: !0
                                    })
                                })
                            }
                        }, a.filterDelivery = function() {
                            a.setState(function() {
                                return {
                                    selfpickup: !1,
                                    restaurants: [],
                                    userPreferredSelectionDelivery: !0,
                                    userPreferredSelectionSelfPickup: !1
                                }
                            }, function() {
                                a.__getDeliveryRestaurants()
                            }), localStorage.setItem("userPreferredSelection", "DELIVERY"), localStorage.getItem("showPromoSlider")
                        }, a.filterSelfPickup = function() {
                            a.setState(function() {
                                return {
                                    selfpickup: !0,
                                    restaurants: [],
                                    userPreferredSelectionSelfPickup: !0,
                                    userPreferredSelectionDelivery: !1
                                }
                            }, function() {
                                a.__getSelfPickupRestaurants()
                            }), localStorage.setItem("userPreferredSelection", "SELFPICKUP"), localStorage.getItem("showPromoSlider")
                        }, a.getAllRestaurantSliders = function() {
                            M.a.post(P.E).then(function(e) {
                                e.data && a.setState({
                                    data: e.data
                                })
                            })
                        }, a.changeRouteToRestaurantsCategories = function(e) {
                            e.categories_ids && new Promise(function(t) {
                                localStorage.setItem("categorySelectOptions", JSON.stringify(e.categories_ids)), t("categorySelectOptions Saved")
                            }).then(function() {
                                a.props.history.push("categories/stores")
                            })
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.getAllRestaurantSliders(), localStorage.getItem("enRAR"), "DELIVERY" === localStorage.getItem("userPreferredSelection") && (this.setState({
                                userPreferredSelectionDelivery: !0,
                                isHomeDelivery: !0
                            }), this.filterDelivery()), "SELFPICKUP" === localStorage.getItem("userPreferredSelection") && "true" === localStorage.getItem("enSPU") ? (this.setState({
                                userPreferredSelectionSelfPickup: !0,
                                isHomeDelivery: !1
                            }), this.filterSelfPickup()) : (localStorage.setItem("userPreferredSelection", "DELIVERY"), localStorage.setItem("userSelected", "DELIVERY"), this.setState({
                                userPreferredSelectionDelivery: !0,
                                isHomeDelivery: !0
                            }), this.__getDeliveryRestaurants())
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return g.a.createElement(g.a.Fragment, null, g.a.createElement("div", {
                                className: "bg-white mb-100"
                            }, this.state.no_restaurants && g.a.createElement("div", {
                                className: "bg-light " + ("true" === localStorage.getItem("enSPU") ? "sticky-top" : "pt-3")
                            }, "true" === localStorage.getItem("enSPU") ? g.a.createElement(g.a.Fragment, null, g.a.createElement("div", {
                                className: "px-15 py-3 d-flex justify-content-between align-items-center"
                            }, g.a.createElement("h1", {
                                className: "restaurant-count mb-0 mr-2"
                            }, localStorage.getItem("noRestaurantMessage")), g.a.createElement("div", {
                                className: "d-flex btn-group btn-preference-group"
                            }, g.a.createElement("button", {
                                onClick: this.filterDelivery,
                                className: "btn btn-preference " + (this.state.userPreferredSelectionDelivery ? "user-preferred" : "")
                            }, localStorage.getItem("deliveryTypeDelivery")), g.a.createElement("button", {
                                onClick: this.filterSelfPickup,
                                className: "btn btn-preference " + (this.state.userPreferredSelectionSelfPickup ? "user-preferred" : "")
                            }, localStorage.getItem("deliveryTypeSelfPickup")))), g.a.createElement("hr", null)) : g.a.createElement("h1", {
                                className: "restaurant-count mb-0 mr-2 px-15"
                            }, localStorage.getItem("noRestaurantMessage")), g.a.createElement("hr", null)), this.state.total ? g.a.createElement(g.a.Fragment, null, g.a.createElement("div", {
                                className: "bg-light " + ("true" === localStorage.getItem("enSPU") ? "sticky-top" : "pt-3")
                            }, "true" === localStorage.getItem("enSPU") && g.a.createElement(g.a.Fragment, null, g.a.createElement("div", {
                                className: "px-15 py-3 d-flex justify-content-between align-items-center"
                            }, g.a.createElement("h1", {
                                className: "restaurant-count mb-0 mr-2"
                            }, !this.state.loading && this.state.total, " ", localStorage.getItem("restaurantCountText")), g.a.createElement("div", {
                                className: "d-flex btn-group btn-preference-group"
                            }, g.a.createElement("button", {
                                onClick: this.filterDelivery,
                                className: "btn btn-preference " + (this.state.userPreferredSelectionDelivery ? "user-preferred" : "")
                            }, localStorage.getItem("deliveryTypeDelivery")), g.a.createElement("button", {
                                onClick: this.filterSelfPickup,
                                className: "btn btn-preference " + (this.state.userPreferredSelectionSelfPickup ? "user-preferred" : "")
                            }, localStorage.getItem("deliveryTypeSelfPickup"))))))) : null, "0" === localStorage.getItem("restaurantCategorySliderPosition") && g.a.createElement(g.a.Fragment, null, this.state.data.length > 0 && g.a.createElement("div", {
                                className: "slider-wrapper secondary-slider-wrapper my-0 pb-20"
                            }, this.state.data.map(function(t) {
                                return g.a.createElement("div", {
                                    className: "slider-wrapper__img-wrapper",
                                    key: t.id
                                }, g.a.createElement("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    onClick: function() {
                                        e.changeRouteToRestaurantsCategories(t)
                                    }
                                }, g.a.createElement("img", {
                                    src: t.image,
                                    alt: t.name,
                                    className: "slider-wrapper__img slider-cust-img",
                                    style: {
                                        height: 2.4 * parseInt(localStorage.getItem("restaurantCategorySliderSize")) + "rem",
                                        width: 2.4 * parseInt(localStorage.getItem("restaurantCategorySliderSize")) + "rem",
                                        borderRadius: parseFloat(localStorage.getItem("restaurantCategorySliderStyle")) + "rem"
                                    }
                                }), "true" === localStorage.getItem("showRestaurantCategorySliderLabel") && g.a.createElement("span", {
                                    className: "category-slider-name"
                                }, t.name), g.a.createElement(h.a, {
                                    duration: "500",
                                    hasTouch: !0
                                })))
                            }))), this.state.loading ? g.a.createElement(L.a, {
                                height: 378,
                                width: 400,
                                speed: 1.2,
                                primaryColor: "#f3f3f3",
                                secondaryColor: "#ecebeb"
                            }, g.a.createElement("rect", {
                                x: "20",
                                y: "20",
                                rx: "4",
                                ry: "4",
                                width: "80",
                                height: "78"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "30",
                                rx: "0",
                                ry: "0",
                                width: "115",
                                height: "18"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "60",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "16"
                            }), g.a.createElement("rect", {
                                x: "20",
                                y: "145",
                                rx: "4",
                                ry: "4",
                                width: "80",
                                height: "78"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "155",
                                rx: "0",
                                ry: "0",
                                width: "115",
                                height: "18"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "185",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "16"
                            }), g.a.createElement("rect", {
                                x: "20",
                                y: "270",
                                rx: "4",
                                ry: "4",
                                width: "80",
                                height: "78"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "280",
                                rx: "0",
                                ry: "0",
                                width: "115",
                                height: "18"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "310",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "16"
                            })) : g.a.createElement(g.a.Fragment, null, 0 === this.props.restaurants.length ? g.a.createElement(L.a, {
                                height: 378,
                                width: 400,
                                speed: 1.2,
                                primaryColor: "#f3f3f3",
                                secondaryColor: "#ecebeb"
                            }, g.a.createElement("rect", {
                                x: "20",
                                y: "20",
                                rx: "4",
                                ry: "4",
                                width: "80",
                                height: "78"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "30",
                                rx: "0",
                                ry: "0",
                                width: "115",
                                height: "18"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "60",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "16"
                            }), g.a.createElement("rect", {
                                x: "20",
                                y: "145",
                                rx: "4",
                                ry: "4",
                                width: "80",
                                height: "78"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "155",
                                rx: "0",
                                ry: "0",
                                width: "115",
                                height: "18"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "185",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "16"
                            }), g.a.createElement("rect", {
                                x: "20",
                                y: "270",
                                rx: "4",
                                ry: "4",
                                width: "80",
                                height: "78"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "280",
                                rx: "0",
                                ry: "0",
                                width: "115",
                                height: "18"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "310",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "16"
                            })) : this.props.restaurants.map(function(t, a) {
                                return g.a.createElement(g.a.Fragment, {
                                    key: t.id
                                }, g.a.createElement(F.a, null, g.a.createElement("div", {
                                    className: "col-xs-12 col-sm-12 restaurant-block"
                                }, g.a.createElement(p.a, {
                                    to: "../stores/" + t.slug,
                                    delay: 200,
                                    className: "block text-center mb-3",
                                    clickAction: function() {
                                        "DELIVERY" === localStorage.getItem("userPreferredSelection") && 1 === t.delivery_type && localStorage.setItem("userSelected", "DELIVERY"), "SELFPICKUP" === localStorage.getItem("userPreferredSelection") && 2 === t.delivery_type && localStorage.setItem("userSelected", "SELFPICKUP"), "DELIVERY" === localStorage.getItem("userPreferredSelection") && 3 === t.delivery_type && localStorage.setItem("userSelected", "DELIVERY"), "SELFPICKUP" === localStorage.getItem("userPreferredSelection") && 3 === t.delivery_type && localStorage.setItem("userSelected", "SELFPICKUP")
                                    }
                                }, g.a.createElement("div", {
                                    className: "block-content block-content-full ".concat(t.is_featured && t.is_active ? "ribbon ribbon-bookmark ribbon-warning pt-2" : "pt-2", " ")
                                }, t.is_featured ? g.a.createElement("div", {
                                    className: "ribbon-box"
                                }, localStorage.getItem("restaurantFeaturedText")) : null, g.a.createElement(W.a, {
                                    duration: 500
                                }, g.a.createElement("img", {
                                    src: t.image,
                                    alt: t.name,
                                    className: "restaurant-image ".concat(!t.is_active && "restaurant-not-active")
                                }))), g.a.createElement("div", {
                                    className: "block-content block-content-full restaurant-info"
                                }, g.a.createElement("div", {
                                    className: "font-w600 mb-5 text-dark"
                                }, t.name), g.a.createElement("div", {
                                    className: "font-size-sm text-muted truncate-text text-muted"
                                }, t.description), !t.is_active && g.a.createElement("span", {
                                    className: "restaurant-not-active-msg"
                                }, localStorage.getItem("restaurantNotActiveMsg")), g.a.createElement("hr", {
                                    className: "my-10"
                                }), g.a.createElement("div", {
                                    className: "text-center restaurant-meta mt-5 d-flex align-items-center justify-content-between text-muted"
                                }, g.a.createElement("div", {
                                    className: "col-2 p-0 text-left"
                                }, g.a.createElement("i", {
                                    className: "fa fa-star pr-1 ".concat(!t.is_active && "restaurant-not-active"),
                                    style: {
                                        color: localStorage.getItem("storeColor")
                                    }
                                }), " ", "0" === t.avgRating ? t.rating : t.avgRating), g.a.createElement("div", {
                                    className: "col-4 p-0 text-center"
                                }, e.state.selfpickup ? g.a.createElement("span", null, g.a.createElement("i", {
                                    className: "si si-pointer pr-1"
                                }), t.distance && t.distance.toFixed(1), " ", "Km") : g.a.createElement("span", null, g.a.createElement("i", {
                                    className: "si si-clock pr-1"
                                }), " ", t.delivery_time, " ", localStorage.getItem("homePageMinsText"))), g.a.createElement("div", {
                                    className: "col-6 p-0 text-center"
                                }, g.a.createElement("i", {
                                    className: "si si-wallet"
                                }), " ", "left" === localStorage.getItem("currencySymbolAlign") && g.a.createElement(g.a.Fragment, null, localStorage.getItem("currencyFormat"), t.price_range, " "), "right" === localStorage.getItem("currencySymbolAlign") && g.a.createElement(g.a.Fragment, null, t.price_range, localStorage.getItem("currencyFormat"), " "), localStorage.getItem("homePageForTwoText")))), g.a.createElement(h.a, {
                                    duration: "500",
                                    hasTouch: !1
                                })))), "true" === localStorage.getItem("showPromoSlider") && g.a.createElement(g.a.Fragment, null, e.props.slides && e.props.slides.length > 0 && g.a.createElement(g.a.Fragment, null, a === e.props.slides[0].promo_slider.position_id - 1 && g.a.createElement(R.a, {
                                    slides: e.props.slides,
                                    size: e.props.slides[0].promo_slider.size,
                                    secondarySlider: !0
                                }))), "true" === localStorage.getItem("enRestaurantCategorySlider") && g.a.createElement(g.a.Fragment, null, a === parseInt(localStorage.getItem("restaurantCategorySliderPosition")) - 1 && g.a.createElement(g.a.Fragment, null, e.state.data.length > 0 && g.a.createElement("div", {
                                    className: "slider-wrapper secondary-slider-wrapper my-20",
                                    id: "secondaryBannerx"
                                }, e.state.data.map(function(t) {
                                    return g.a.createElement("div", {
                                        className: "slider-wrapper__img-wrapper",
                                        key: t.id
                                    }, g.a.createElement("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        onClick: function() {
                                            e.changeRouteToRestaurantsCategories(t)
                                        }
                                    }, g.a.createElement("img", {
                                        src: t.image,
                                        alt: t.name,
                                        className: "slider-wrapper__img slider-cust-img",
                                        style: {
                                            height: 2.4 * parseInt(localStorage.getItem("restaurantCategorySliderSize")) + "rem",
                                            width: 1.2 * parseInt(localStorage.getItem("restaurantCategorySliderSize")) + "rem",
                                            borderRadius: parseFloat(localStorage.getItem("restaurantCategorySliderStyle")) + "rem"
                                        }
                                    }), "true" === localStorage.getItem("showRestaurantCategorySliderLabel") && g.a.createElement("span", {
                                        className: "category-slider-name"
                                    }, t.name), g.a.createElement(h.a, {
                                        duration: "500",
                                        hasTouch: !0
                                    })))
                                })))), e.state.review_data.ratable && "true" === localStorage.getItem("enRAR") && "true" === localStorage.getItem("rarModEnHomeBanner") && !1)
                            })), this.state.loading_more ? g.a.createElement("div", {
                                className: ""
                            }, g.a.createElement(L.a, {
                                height: 120,
                                width: 400,
                                speed: 1.2,
                                primaryColor: "#f3f3f3",
                                secondaryColor: "#ecebeb"
                            }, g.a.createElement("rect", {
                                x: "20",
                                y: "20",
                                rx: "4",
                                ry: "4",
                                width: "80",
                                height: "78"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "35",
                                rx: "0",
                                ry: "0",
                                width: "115",
                                height: "18"
                            }), g.a.createElement("rect", {
                                x: "144",
                                y: "65",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "16"
                            }))) : null))
                        }
                    }]), t
                }(d.Component),
                Y = Object(G.a)(Object(I.b)(function(e) {
                    return {
                        restaurants: e.restaurant.restaurants
                    }
                }, {
                    getDeliveryRestaurants: H.a,
                    getSelfpickupRestaurants: H.e
                })(B)),
                z = a(86),
                J = a(115),
                K = a(116),
                q = a(58),
                X = a(168),
                Q = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(j.a)(T.a.mark(function e() {
                                var t, a, n, r;
                                return T.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            this.props.resetItems(), this.props.resetInfo(), this.props.resetBackup(), t = this.props.user, null !== localStorage.getItem("userSetAddress") && ("true" === localStorage.getItem("showPromoSlider") && (a = JSON.parse(localStorage.getItem("userSetAddress")), this.props.getPromoSlides(a.lat, a.lng)), (n = this.props.user).success && this.props.getUserNotifications(n.data.id, n.data.auth_token)), t.success && "true" === localStorage.getItem("enablePushNotification") && A.messaging.isSupported() && (r = this.props.saveNotificationToken, z.a.requestPermission().then(Object(j.a)(T.a.mark(function e() {
                                                var a;
                                                return T.a.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, z.a.getToken();
                                                        case 2:
                                                            a = e.sent, r(a, t.data.id, t.data.auth_token);
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, this)
                                            }))).catch(function(e) {
                                                console.log("Unable to get permission to notify.", e)
                                            }));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            if (this.props.languages !== e.languages)
                                if (localStorage.getItem("userPreferedLanguage")) this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));
                                else if (e.languages.length) {
                                var t = e.languages.filter(function(e) {
                                    return 1 === e.is_default
                                })[0].id;
                                this.props.getSingleLanguageData(t)
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            if (window.innerWidth > 768) return g.a.createElement(y.a, {
                                to: "/"
                            });
                            if (null === localStorage.getItem("userSetAddress")) return g.a.createElement(y.a, {
                                to: "/search-location"
                            });
                            var e = JSON.parse(localStorage.getItem("userSetAddress"));
                            if (0 === Object.keys(e).length && e.constructor === Object) return g.a.createElement(y.a, {
                                to: "/search-location"
                            });
                            var t = this.props,
                                a = t.history,
                                n = t.user,
                                r = t.promo_slides;
                            return g.a.createElement(g.a.Fragment, null, g.a.createElement(S.a, {
                                seotitle: localStorage.getItem("seoMetaTitle"),
                                seodescription: localStorage.getItem("seoMetaDescription"),
                                ogtype: "website",
                                ogtitle: localStorage.getItem("seoOgTitle"),
                                ogdescription: localStorage.getItem("seoOgDescription"),
                                ogurl: window.location.href,
                                twittertitle: localStorage.getItem("seoTwitterTitle"),
                                twitterdescription: localStorage.getItem("seoTwitterDescription")
                            }), g.a.createElement("div", {
                                className: "height-100-percent bg-white mb-50"
                            }, g.a.createElement(C.a, {
                                logo: !0,
                                active_nearme: !0,
                                disable_back_button: !0,
                                history: a,
                                loggedin: n.success
                            }), "true" === localStorage.getItem("showPromoSlider") && g.a.createElement(g.a.Fragment, null, r && r.mainSlides && r.mainSlides.length > 0 && g.a.createElement(R.a, {
                                slides: r.mainSlides,
                                size: r.mainSlides[0].promo_slider.size
                            })), "true" === localStorage.getItem("mockSearchOnHomepage") && g.a.createElement(X.a, {
                                to: "explore"
                            }, g.a.createElement("div", {
                                className: "mock-search-block px-15 pb-10 ".concat("false" === localStorage.getItem("showPromoSlider") ? "pt-15" : "" + r.mainSlides === "null" ? "pt-15" : "")
                            }, g.a.createElement("div", {
                                className: "px-15 d-flex justify-content-between"
                            }, g.a.createElement("div", null, g.a.createElement("span", null, localStorage.getItem("mockSearchPlaceholder"))), g.a.createElement("div", null, g.a.createElement("i", {
                                className: "si si-magnifier"
                            }))))), "<p><br></p>" !== localStorage.getItem("customHomeMessage") && "null" !== localStorage.getItem("customHomeMessage") && "" !== localStorage.getItem("customHomeMessage") && g.a.createElement("div", {
                                style: {
                                    position: "relative",
                                    background: "#f8f9fa"
                                },
                                dangerouslySetInnerHTML: {
                                    __html: localStorage.getItem("customHomeMessage")
                                }
                            }), g.a.createElement(Y, {
                                user: n,
                                slides: r.otherSlides
                            }), g.a.createElement(x.a, {
                                active_nearme: !0
                            })))
                        }
                    }]), t
                }(d.Component);
            Q.contextTypes = {
                router: function() {
                    return null
                }
            };
            var Z = Object(I.b)(function(e) {
                    return {
                        promo_slides: e.promo_slides.promo_slides,
                        user: e.user.user,
                        locations: e.locations.locations,
                        languages: e.languages.languages
                    }
                }, {
                    getPromoSlides: function(e, t) {
                        return function(a) {
                            M.a.post(P.B, {
                                latitude: e,
                                longitude: t
                            }).then(function(e) {
                                var t = e.data;
                                return a({
                                    type: "GET_PROMO_SLIDER",
                                    payload: t
                                })
                            }).catch(function(e) {
                                console.log(e)
                            })
                        }
                    },
                    saveNotificationToken: J.a,
                    getSingleLanguageData: O.b,
                    getUserNotifications: K.a,
                    resetInfo: q.i,
                    resetItems: q.j,
                    resetBackup: q.h
                })(Q),
                $ = function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).state = {
                            showGdpr: !1
                        }, a.handleGdprClick = function() {
                            localStorage.setItem("gdprAccepted", "true"), a.setState({
                                showGdpr: !1
                            })
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            setTimeout(function() {
                                document.getElementsByClassName("popup-content")[0] && (document.getElementsByClassName("popup-content")[0].style.backgroundColor = "transparent")
                            }, 100), localStorage.getItem("gdprAccepted") || (localStorage.setItem("gdprAccepted", "false"), "true" === localStorage.getItem("showGdpr") && this.setState({
                                showGdpr: !0
                            })), "true" === localStorage.getItem("showGdpr") && "false" === localStorage.getItem("gdprAccepted") && this.setState({
                                showGdpr: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return g.a.createElement(g.a.Fragment, null, this.state.showGdpr && g.a.createElement("div", {
                                className: "fixed-gdpr-mobile"
                            }, g.a.createElement("span", {
                                dangerouslySetInnerHTML: {
                                    __html: localStorage.getItem("gdprMessage")
                                }
                            }), g.a.createElement("span", null, g.a.createElement("button", {
                                className: "btn btn-sm ml-2",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor")
                                },
                                onClick: this.handleGdprClick
                            }, localStorage.getItem("gdprConfirmButton")))), localStorage.getItem("userSetAddress") ? g.a.createElement("div", null, g.a.createElement(Z, null)) : g.a.createElement(N, {
                                languages: this.props.languages
                            }))
                        }
                    }]), t
                }(d.Component),
                ee = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.getSettings(), this.props.getAllLanguages()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return g.a.createElement(g.a.Fragment, null, window.innerWidth <= 768 ? g.a.createElement($, {
                                languages: this.props.languages
                            }) : g.a.createElement(m.a, {
                                languages: this.props.languages
                            }))
                        }
                    }]), t
                }(d.Component),
                te = Object(I.b)(function(e) {
                    return {
                        settings: e.settings.settings,
                        user: e.user.user,
                        notification_token: e.notification_token.notification_token,
                        languages: e.languages.languages
                    }
                }, {
                    getSettings: _.a,
                    getAllLanguages: O.a
                })(ee),
                ae = a(14),
                ne = a.n(ae),
                re = a(13),
                oe = a(19),
                le = a.n(oe),
                ce = Boolean("[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function ie(e, t) {
                navigator.serviceWorker.register(e).then(function(e) {
                    e.onupdatefound = function() {
                        var a = e.installing;
                        null != a && (a.onstatechange = function() {
                            "installed" === a.state && (navigator.serviceWorker.controller ? (console.log("Skiping wait.."), a.postMessage({
                                action: "skipWaiting"
                            }), window.location.reload(), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                        })
                    }
                }).catch(function(e) {
                    console.error("Error during service worker registration:", e)
                })
            }
            var se = a(36),
                ue = a(127),
                de = a(1),
                ge = a(66),
                me = {
                    settings: []
                },
                pe = {
                    locations: []
                },
                fe = a(117),
                he = {
                    popular_locations: []
                },
                Se = {
                    promo_slides: []
                },
                Ee = a(15),
                ve = {
                    restaurant_info: [],
                    restaurant_items: [],
                    single_item: [],
                    restaurant_backup_items: []
                },
                be = a(61),
                ye = {
                    products: []
                },
                Ie = a(98),
                _e = {
                    data: {
                        productQuantity: 0,
                        totalPrice: 0
                    }
                },
                Oe = a(80),
                we = {
                    coupon: [],
                    coupon_error: ""
                },
                Ne = a(12),
                ke = {
                    user: [],
                    running_order: !1,
                    wallet: [],
                    reset_mail: [],
                    validate_email_otp: [],
                    change_password: [],
                    vat_number: null
                },
                Te = a(62),
                je = {
                    pages: [],
                    single_page: []
                },
                Ae = a(87),
                xe = {
                    restaurants: []
                },
                Ce = a(41),
                Re = {
                    addresses: []
                },
                Pe = a(100),
                Le = {
                    checkout: []
                },
                De = a(101),
                Fe = {
                    confirmCart: !1
                },
                Ge = a(88),
                Ue = {
                    orders: [],
                    cancel: null
                },
                Me = a(118),
                Ve = {
                    paymentgateways: []
                },
                We = a(70),
                He = {
                    notification_token: []
                },
                Be = a(23),
                Ye = {
                    restaurants: [],
                    is_operational: "",
                    filtered_restaurants: [],
                    restaurants_categories: [],
                    favoriteRestaurants: []
                },
                ze = a(63),
                Je = {
                    done_rating: [],
                    order: [],
                    reviews: []
                },
                Ke = a(30),
                qe = {
                    alerts: [],
                    alertUnreadTotal: 0
                },
                Xe = a(48),
                Qe = {
                    languages: [],
                    language: []
                },
                Ze = a(53),
                $e = {
                    delivery_user: [],
                    order_history: []
                },
                et = a(119),
                tt = {
                    delivery_orders: []
                },
                at = a(102),
                nt = {
                    single_delivery_order: []
                },
                rt = a(81),
                ot = {
                    set_delivery_guy_gps_location: [],
                    get_delivery_guy_gps_location: []
                },
                lt = a(89),
                ct = {
                    accepted_order: [],
                    pickedup_order: []
                },
                it = a(71),
                st = {
                    force_reload: !1
                },
                ut = Object(se.c)({
                    settings: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case ge.a:
                                return Object(de.a)({}, e, {
                                    settings: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    locations: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case "SEARCH_LOCATIONS":
                                return Object(de.a)({}, e, {
                                    locations: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    popular_locations: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case fe.a:
                                return Object(de.a)({}, e, {
                                    popular_locations: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    promo_slides: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case "GET_PROMO_SLIDER":
                                return Object(de.a)({}, e, {
                                    promo_slides: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    items: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ee.b:
                            case Ee.c:
                                return Object(de.a)({}, e, {
                                    restaurant_info: t.payload
                                });
                            case Ee.e:
                                return Object(de.a)({}, e, {
                                    restaurant_items: t.payload,
                                    restaurant_backup_items: t.payload
                                });
                            case Ee.h:
                                return Object(de.a)({}, e, {
                                    restaurant_items: t.payload
                                });
                            case Ee.f:
                                return Object(de.a)({}, e, {
                                    restaurant_backup_items: t.payload
                                });
                            case Ee.g:
                                return Object(de.a)({}, e, {
                                    restaurant_info: t.payload
                                });
                            case Ee.k:
                                return Object(de.a)({}, e, {
                                    single_item: t.payload
                                });
                            case Ee.i:
                            case Ee.a:
                                return Object(de.a)({}, e, {
                                    restaurant_items: t.payload
                                });
                            case Ee.j:
                            case Ee.d:
                                return Object(de.a)({}, e, {
                                    restaurant_info: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    total: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ie.a:
                                return Object(de.a)({}, e, {
                                    data: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    cart: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case be.b:
                                return Object(de.a)({}, e, {
                                    products: t.payload
                                });
                            case be.a:
                                return Object(de.a)({}, e, {
                                    productToAdd: Object.assign({}, t.payload)
                                });
                            case be.c:
                                return Object(de.a)({}, e, {
                                    productToRemove: Object.assign({}, t.payload)
                                });
                            default:
                                return e
                        }
                    },
                    coupon: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Oe.a:
                                return Object(de.a)({}, e, {
                                    coupon: t.payload
                                });
                            case Oe.b:
                                return Object(de.a)({}, e, {
                                    coupon_error: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    user: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ne.c:
                            case Ne.e:
                            case Ne.d:
                            case Ne.j:
                            case Ne.h:
                            case Ne.k:
                                return Object(de.a)({}, e, {
                                    user: t.payload
                                });
                            case Ne.f:
                                return Object(de.a)({}, e, {
                                    running_order: t.payload
                                });
                            case Ne.b:
                                return Object(de.a)({}, e, {
                                    wallet: t.payload
                                });
                            case Ne.i:
                                return Object(de.a)({}, e, {
                                    reset_mail: t.payload
                                });
                            case Ne.l:
                                return Object(de.a)({}, e, {
                                    validate_email_otp: t.payload
                                });
                            case Ne.a:
                                return Object(de.a)({}, e, {
                                    change_password: t.payload
                                });
                            case Ne.g:
                                return Object(de.a)({}, e, {
                                    vat_number: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    pages: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : je,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Te.b:
                                return Object(de.a)({}, e, {
                                    pages: t.payload
                                });
                            case Te.c:
                            case Te.a:
                                return Object(de.a)({}, e, {
                                    single_page: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    restaurants: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ae.b:
                            case Ae.a:
                                return Object(de.a)({}, e, {
                                    restaurants: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    addresses: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ce.b:
                            case Ce.c:
                            case Ce.a:
                            case Ce.d:
                                return Object(de.a)({}, e, {
                                    addresses: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    checkout: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Pe.a:
                                return Object(de.a)({}, e, {
                                    checkout: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    confirmCart: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case De.a:
                                return Object(de.a)({}, e, {
                                    confirmCart: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    orders: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ge.b:
                                return Object(de.a)({}, e, {
                                    orders: t.payload
                                });
                            case Ge.a:
                                return Object(de.a)({}, e, {
                                    cancel: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    paymentgateways: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Me.a:
                                return Object(de.a)({}, e, {
                                    paymentgateways: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    delivery_user: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ze.a:
                            case Ze.b:
                                return Object(de.a)({}, e, {
                                    delivery_user: t.payload
                                });
                            case Ze.d:
                                return Object(de.a)({}, e, {
                                    delivery_user: t.payload.delivery_user,
                                    order_history: t.payload.order_history
                                });
                            case Ze.c:
                                return Object(de.a)({}, e, {
                                    order_history: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    delivery_orders: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case et.a:
                                return Object(de.a)({}, e, {
                                    delivery_orders: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    single_delivery_order: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case at.a:
                                return Object(de.a)({}, e, {
                                    single_delivery_order: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    gps_location: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case rt.b:
                                return Object(de.a)({}, e, {
                                    set_delivery_guy_gps_location: t.payload
                                });
                            case rt.a:
                                return Object(de.a)({}, e, {
                                    get_delivery_guy_gps_location: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    accepted_order: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ct,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case lt.a:
                                return Object(de.a)({}, e, {
                                    accepted_order: t.payload
                                });
                            case lt.c:
                                return Object(de.a)({}, e, {
                                    pickedup_order: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    notification_token: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case We.a:
                                return Object(de.a)({}, e, {
                                    notification_token: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    restaurant: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ye,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Be.a:
                                return Object(de.a)({}, e, {
                                    is_operational: t.payload
                                });
                            case Be.d:
                                return Object(de.a)({}, e, {
                                    filtered_restaurants: t.payload
                                });
                            case Be.e:
                                return Object(de.a)({}, e, {
                                    restaurants_categories: t.payload
                                });
                            case Be.b:
                            case Be.f:
                                return Object(de.a)({}, e, {
                                    restaurants: t.payload
                                });
                            case Be.c:
                                return Object(de.a)({}, e, {
                                    favoriteRestaurants: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    languages: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qe,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Xe.a:
                                return Object(de.a)({}, e, {
                                    languages: t.payload
                                });
                            case Xe.b:
                                return Object(de.a)({}, e, {
                                    language: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    rating: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case ze.a:
                                return Object(de.a)({}, e, {
                                    done_rating: t.payload
                                });
                            case ze.b:
                                return Object(de.a)({}, e, {
                                    order: t.payload
                                });
                            case ze.c:
                                return Object(de.a)({}, e, {
                                    reviews: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    alert: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qe,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ke.a:
                                return Object(de.a)({}, e, {
                                    alerts: t.payload
                                });
                            case Ke.b:
                                return Object(de.a)({}, e, {
                                    alertUnreadTotal: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    helper: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case it.a:
                                return Object(de.a)({}, e, {
                                    force_reload: t.payload
                                });
                            default:
                                return e
                        }
                    }
                }),
                dt = function(e) {
                    e = JSON.parse(window.localStorage.getItem("state")) || e;
                    var t = [ue.a],
                        a = Object(se.e)(ut, e, Object(se.d)(se.a.apply(void 0, t)));
                    return a.subscribe(function() {
                        var e = a.getState();
                        for (var t in e.settings.settings)
                            if (e.settings.settings.hasOwnProperty(t)) {
                                var n = e.settings.settings[t];
                                localStorage.setItem(n.key, n.value)
                            } for (var r in e.languages.language)
                            if (e.languages.language.hasOwnProperty(r)) {
                                var o = e.languages.language[r];
                                localStorage.setItem(r, o)
                            } var l = {
                            cart: e.cart,
                            total: e.total,
                            items: e.items,
                            pages: e.pages,
                            user: e.user,
                            addresses: e.addresses,
                            delivery_user: e.delivery_user,
                            languages: e.languages.languages,
                            settings: e.settings
                        };
                        localStorage.setItem("state", JSON.stringify(l))
                    }), a
                },
                gt = a(95),
                mt = function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).state = {
                            updating: !1
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            M.a.get("/version.json").then(function(t) {
                                var a = t.data.forceNewSettingsVersion,
                                    n = t.data.forceCacheClearVersion;
                                if (null === localStorage.getItem("forceNewSettingsVersion") && null === localStorage.getItem("forceCacheClearVersion")) localStorage.setItem("forceNewSettingsVersion", a), localStorage.setItem("forceCacheClearVersion", n);
                                else if (localStorage.getItem("forceNewSettingsVersion") !== a && (console.warn("Getting New Settings"), e.props.getSettings(), localStorage.setItem("forceNewSettingsVersion", a)), localStorage.getItem("forceCacheClearVersion") !== n) {
                                    var r = function() {
                                            var e = Object(j.a)(T.a.mark(function e() {
                                                return T.a.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, o();
                                                        case 2:
                                                            return e.next = 4, l();
                                                        case 4:
                                                            return e.next = 6, c();
                                                        case 6:
                                                            return e.next = 8, i();
                                                        case 8:
                                                            return e.next = 10, s();
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, this)
                                            }));
                                            return function() {
                                                return e.apply(this, arguments)
                                            }
                                        }(),
                                        o = function() {
                                            return new Promise(function(e) {
                                                console.warn("Clear Local Storage");
                                                var t = localStorage.getItem("geoLocation"),
                                                    a = localStorage.getItem("userSetAddress"),
                                                    n = localStorage.getItem("storeColor"),
                                                    r = localStorage.getItem("storeLogo"),
                                                    o = localStorage.getItem("updatingMessage"),
                                                    l = localStorage.getItem("userPreferedLanguage"),
                                                    c = null !== localStorage.getItem("activeRestaurant") ? localStorage.getItem("activeRestaurant") : 1;
                                                localStorage.clear(), null !== t && localStorage.setItem("geoLocation", t), null !== a && localStorage.setItem("userSetAddress", a), localStorage.setItem("storeColor", n), localStorage.setItem("storeLogo", r), localStorage.setItem("updatingMessage", o), localStorage.setItem("activeRestaurant", c), null !== l && localStorage.setItem("userPreferedLanguage", l), e("Completed clearLocalStorage")
                                            })
                                        },
                                        l = function() {
                                            return new Promise(function(e) {
                                                console.warn("Clear Cache Storage"), navigator.serviceWorker.getRegistrations().then(function(e) {
                                                    var t = !0,
                                                        a = !1,
                                                        n = void 0;
                                                    try {
                                                        for (var r, o = e[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                                                            r.value.unregister()
                                                        }
                                                    } catch (l) {
                                                        a = !0, n = l
                                                    } finally {
                                                        try {
                                                            t || null == o.return || o.return()
                                                        } finally {
                                                            if (a) throw n
                                                        }
                                                    }
                                                }), caches && caches.keys().then(function(e) {
                                                    var t = !0,
                                                        a = !1,
                                                        n = void 0;
                                                    try {
                                                        for (var r, o = e[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                                                            var l = r.value;
                                                            caches.delete(l)
                                                        }
                                                    } catch (c) {
                                                        a = !0, n = c
                                                    } finally {
                                                        try {
                                                            t || null == o.return || o.return()
                                                        } finally {
                                                            if (a) throw n
                                                        }
                                                    }
                                                }), e("Completed clearCacheStorage")
                                            })
                                        },
                                        c = function() {
                                            return new Promise(function(t) {
                                                console.warn("Fetch Settings and Translations"), e.props.getSettings(), null !== localStorage.getItem("userPreferedLanguage") ? (e.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage")), t("Completed fetchSettingsAndLanguage")) : e.props.getAllLanguages().then(function(a) {
                                                    console.log(a), console.log("Fetching Translation Data...");
                                                    var n = a.payload.filter(function(e) {
                                                        return 1 === e.is_default
                                                    })[0].id;
                                                    e.props.getSingleLanguageData(n).then(function() {
                                                        t("Completed fetchSettingsAndLanguage")
                                                    })
                                                })
                                            })
                                        },
                                        i = function() {
                                            return new Promise(function(e) {
                                                console.warn("Update Client Version"), localStorage.setItem("forceNewSettingsVersion", a), localStorage.setItem("forceCacheClearVersion", n), e("Completed updateClientVersion")
                                            })
                                        },
                                        s = function() {
                                            return new Promise(function(t) {
                                                setTimeout(function() {
                                                    e.setState({
                                                        updating: !1
                                                    }, function() {
                                                        window.location.reload(!0), t("Completed reloadBrowser")
                                                    })
                                                }, 3e3)
                                            })
                                        };
                                    e.setState({
                                        updating: !0
                                    }), r()
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.updating;
                            return g.a.createElement(g.a.Fragment, null, e && g.a.createElement(g.a.Fragment, null, g.a.createElement("div", {
                                className: "update-full-notification"
                            }, g.a.createElement("span", {
                                className: "spin-load"
                            })), g.a.createElement("div", {
                                className: "update-full-notification",
                                style: {
                                    zIndex: 9999999999
                                }
                            }, g.a.createElement("h1", {
                                className: "d-flex",
                                style: {
                                    marginTop: "8rem"
                                }
                            }, localStorage.getItem("updatingMessage")))))
                        }
                    }]), t
                }(d.Component),
                pt = Object(I.b)(function(e) {
                    return {
                        settings: e.settings.settings
                    }
                }, {
                    getSettings: _.a,
                    getSingleLanguageData: O.b,
                    getAllLanguages: O.a,
                    logoutUser: gt.g
                })(mt),
                ft = a(346),
                ht = a(357),
                St = a(321),
                Et = function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).state = {
                            open: !1,
                            inAppNotificationData: []
                        }, a.audio = new Audio("/assets/audio/customer-notification.mp3"), a.handleClose = function() {
                            a.setState({
                                open: !1
                            })
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            A.messaging.isSupported() && navigator.serviceWorker.addEventListener("message", function(t) {
                                console.log(t.data["firebase-messaging-msg-data"]), t.data["firebase-messaging-msg-data"] && t.data["firebase-messaging-msg-data"].data && (e.audio.play(), "vibrate" in navigator && (console.log("Vibrating"), navigator.vibrate(["100", "150", "100", "100", "150", "100"])), e.setState({
                                    open: !0,
                                    inAppNotificationData: t.data["firebase-messaging-msg-data"].data
                                }))
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.inAppNotificationData,
                                n = t.open;
                            return g.a.createElement(g.a.Fragment, null, g.a.createElement(ft.a, {
                                maxWidth: !1,
                                fullWidth: !0,
                                fullScreen: !1,
                                open: n,
                                onClose: this.handleClose,
                                disableBackdropClick: !0
                            }, g.a.createElement(ht.a, {
                                id: "responsive-dialog-title"
                            }, a.title), g.a.createElement(St.a, {
                                dividers: !0
                            }, g.a.createElement("p", {
                                className: "mb-2"
                            }, a.message), a.image && g.a.createElement("img", {
                                src: a.image,
                                className: "img-fluid",
                                alt: a.title
                            }), g.a.createElement("div", {
                                className: "inAppNotificationActions mt-3"
                            }, g.a.createElement("button", {
                                className: "btn inANClose ".concat(a.click_action && "mr-2"),
                                onClick: function() {
                                    return e.setState({
                                        open: !1
                                    })
                                }
                            }, localStorage.getItem("inAppCloseButton")), a.click_action && g.a.createElement("a", {
                                className: "btn inANLink",
                                href: a.click_action
                            }, localStorage.getItem("inAppOpenLinkButton"))), g.a.createElement("div", {
                                className: "alert-notify-bell",
                                style: {
                                    top: "20px",
                                    bottom: "auto"
                                }
                            }, g.a.createElement("i", {
                                className: "si si-bell",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            })))))
                        }
                    }]), t
                }(d.Component),
                vt = a(129),
                bt = a.n(vt),
                yt = a(94),
                It = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return g.a.createElement(g.a.Fragment, null, g.a.createElement("div", {
                                className: "bg-white"
                            }, g.a.createElement("div", {
                                className: "d-flex justify-content-center mt-100 mb-20"
                            }, g.a.createElement("img", {
                                className: "offline-mode-img text-center",
                                src: "/assets/img/various/offline.png",
                                alt: localStorage.getItem("offlineTitleMessage")
                            })), g.a.createElement("h2", {
                                className: "text-center font-w700 mb-3"
                            }, localStorage.getItem("offlineTitleMessage")), g.a.createElement("h2", {
                                className: "text-muted text-center font-size-md"
                            }, localStorage.getItem("offlineSubTitleMessage"))))
                        }
                    }]), t
                }(d.Component),
                _t = a(59),
                Ot = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return g.a.createElement(g.a.Fragment, null, null !== localStorage.getItem("customCSS") && g.a.createElement(_t.Helmet, null, "true" === localStorage.getItem("deliveryAppLightMode") && g.a.createElement("link", {
                                rel: "stylesheet",
                                type: "text/css",
                                href: "/assets/css/delivery-app-light.css"
                            }), g.a.createElement("style", {
                                type: "text/css"
                            }, localStorage.getItem("customCSS"))))
                        }
                    }]), t
                }(d.Component),
                wt = Object(I.b)(function(e) {
                    return {
                        settings: e.settings.settings
                    }
                }, {})(Ot),
                Nt = a(46),
                kt = {
                    enabled: !1
                };
            ! function(e) {
                if ("serviceWorker" in navigator) {
                    if (new URL("", window.location.href).origin !== window.location.origin) return;
                    window.addEventListener("load", function() {
                        var t = "".concat("", "/service-worker.js");
                        ce ? (function(e, t) {
                            fetch(e).then(function(a) {
                                var n = a.headers.get("content-type");
                                404 === a.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then(function(e) {
                                    e.unregister().then(function() {
                                        window.location.reload()
                                    })
                                }) : ie(e, t)
                            }).catch(function() {
                                console.log("No internet connection found. App is running in offline mode.")
                            })
                        }(t, e), navigator.serviceWorker.ready.then(function() {
                            console.log("PWA Activated")
                        })) : ie(t, e), navigator.serviceWorker.ready.then(function() {
                            console.log("SW & event listener registered")
                        })
                    })
                }
            }();
            var Tt = function(e) {
                    var t = e.children,
                        a = e.initialState,
                        n = void 0 === a ? {} : a;
                    return g.a.createElement(g.a.Fragment, null, g.a.createElement(I.a, {
                        store: dt(n)
                    }, g.a.createElement(wt, null), g.a.createElement(yt.Online, {
                        polling: kt
                    }, t, g.a.createElement("img", {
                        className: "cart-empty-img hidden",
                        src: "/assets/img/various/offline.png",
                        alt: "offline"
                    }), g.a.createElement(pt, null), g.a.createElement(Et, null), g.a.createElement(Nt.a, null), "true" === localStorage.getItem("enIOSPWAPopup") && g.a.createElement(bt.a, {
                        delay: 2500,
                        copyTitle: localStorage.getItem("iOSPWAPopupTitle"),
                        copyBody: localStorage.getItem("iOSPWAPopupBody"),
                        copyShareButtonLabel: localStorage.getItem("iOSPWAPopupShareButtonLabel"),
                        copyAddHomeButtonLabel: localStorage.getItem("iOSPWAPopupAddButtonLabel"),
                        copyClosePrompt: localStorage.getItem("iOSPWAPopupCloseButtonLabel")
                    })), g.a.createElement(yt.Offline, {
                        polling: kt
                    }, g.a.createElement(It, null))))
                },
                jt = a(75),
                At = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = function(e) {
                            "true" === localStorage.getItem("enableGoogleAnalytics") && (jt.a.initialize(localStorage.getItem("googleAnalyticsId")), jt.a.set(Object(de.a)({
                                page: e
                            }, t)), jt.a.pageview(e))
                        };
                    return function(t) {
                        function n() {
                            return Object(l.a)(this, n), Object(i.a)(this, Object(s.a)(n).apply(this, arguments))
                        }
                        return Object(u.a)(n, t), Object(c.a)(n, [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this.props.location.pathname;
                                a(e)
                            }
                        }, {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = this.props.location.pathname,
                                    n = e.location.pathname;
                                t !== n && a(n)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return g.a.createElement(e, this.props)
                            }
                        }]), n
                    }(d.Component)
                },
                xt = ne()({
                    loader: function() {
                        return a.e(9).then(a.bind(null, 322))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Ct = ne()({
                    loader: function() {
                        return Promise.all([a.e(6), a.e(10)]).then(a.bind(null, 341))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Rt = ne()({
                    loader: function() {
                        return Promise.all([a.e(5), a.e(11)]).then(a.bind(null, 348))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Pt = ne()({
                    loader: function() {
                        return Promise.all([a.e(5), a.e(12)]).then(a.bind(null, 324))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Lt = ne()({
                    loader: function() {
                        return Promise.all([a.e(1), a.e(13)]).then(a.bind(null, 333))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Dt = ne()({
                    loader: function() {
                        return Promise.all([a.e(2), a.e(14)]).then(a.bind(null, 334))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Ft = ne()({
                    loader: function() {
                        return a.e(15).then(a.bind(null, 338))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Gt = ne()({
                    loader: function() {
                        return Promise.all([a.e(6), a.e(16)]).then(a.bind(null, 325))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Ut = ne()({
                    loader: function() {
                        return Promise.all([a.e(1), a.e(35), a.e(17)]).then(a.bind(null, 335))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Mt = ne()({
                    loader: function() {
                        return Promise.all([a.e(1), a.e(18)]).then(a.bind(null, 344))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Vt = ne()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(2), a.e(19)]).then(a.bind(null, 342))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Wt = ne()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(20)]).then(a.bind(null, 349))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Ht = ne()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(4), a.e(3), a.e(21)]).then(a.bind(null, 350))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Bt = ne()({
                    loader: function() {
                        return a.e(22).then(a.bind(null, 326))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Yt = ne()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(4), a.e(3)]).then(a.bind(null, 219))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                zt = ne()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(23)]).then(a.bind(null, 339))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Jt = ne()({
                    loader: function() {
                        return Promise.all([a.e(1), a.e(24)]).then(a.bind(null, 351))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Kt = ne()({
                    loader: function() {
                        return Promise.all([a.e(2), a.e(36), a.e(7), a.e(25)]).then(a.bind(null, 343))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                qt = ne()({
                    loader: function() {
                        return Promise.all([a.e(2), a.e(7), a.e(26)]).then(a.bind(null, 352))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Xt = ne()({
                    loader: function() {
                        return a.e(27).then(a.bind(null, 327))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Qt = ne()({
                    loader: function() {
                        return a.e(28).then(a.bind(null, 328))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                Zt = ne()({
                    loader: function() {
                        return a.e(29).then(a.bind(null, 340))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                $t = ne()({
                    loader: function() {
                        return a.e(30).then(a.bind(null, 329))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                ea = ne()({
                    loader: function() {
                        return a.e(31).then(a.bind(null, 330))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                ta = ne()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(32)]).then(a.bind(null, 353))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                }),
                aa = ne()({
                    loader: function() {
                        return a.e(33).then(a.bind(null, 331))
                    },
                    loading: function() {
                        return g.a.createElement(re.a, null)
                    }
                });
            le.a.render(g.a.createElement(Tt, null, g.a.createElement(n.a, null, g.a.createElement(g.a.Fragment, null, g.a.createElement(r.a, {
                component: function() {
                    return window.scrollTo(0, 0), null
                }
            }), g.a.createElement(o.a, null, g.a.createElement(r.a, {
                path: "/",
                exact: !0,
                component: At(te)
            }), g.a.createElement(r.a, {
                path: "/search-location",
                exact: !0,
                component: At(Ct)
            }), g.a.createElement(r.a, {
                path: "/my-location",
                exact: !0,
                component: At(Jt)
            }), g.a.createElement(r.a, {
                path: "/categories/stores",
                exact: !0,
                component: At(Zt)
            }), g.a.createElement(r.a, {
                path: "/stores/:restaurant",
                exact: !0,
                component: At(Kt)
            }), g.a.createElement(r.a, {
                path: "/stores/:restaurant/:id",
                exact: !0,
                component: At(qt)
            }), g.a.createElement(r.a, {
                path: "/explore",
                exact: !0,
                component: At(Ft)
            }), g.a.createElement(r.a, {
                path: "/login",
                exact: !0,
                component: At(Rt)
            }), g.a.createElement(r.a, {
                path: "/login/forgot-password",
                exact: !0,
                component: At(Qt)
            }), g.a.createElement(r.a, {
                path: "/register",
                exact: !0,
                component: At(Pt)
            }), g.a.createElement(r.a, {
                path: "/my-account",
                exact: !0,
                component: At(Dt)
            }), g.a.createElement(r.a, {
                path: "/alerts",
                exact: !0,
                component: At(ta)
            }), g.a.createElement(r.a, {
                path: "/my-addresses",
                exact: !0,
                component: At(Gt)
            }), g.a.createElement(r.a, {
                path: "/my-wallet",
                exact: !0,
                component: At(Wt)
            }), g.a.createElement(r.a, {
                path: "/my-orders",
                exact: !0,
                component: At(Vt)
            }), g.a.createElement(r.a, {
                path: "/rate-order/:id",
                exact: !0,
                component: At($t)
            }), g.a.createElement(r.a, {
                path: "/reviews/:slug",
                exact: !0,
                component: At(ea)
            }), g.a.createElement(r.a, {
                path: "/checkout",
                exact: !0,
                component: At(Ut)
            }), g.a.createElement(r.a, {
                path: "/running-order/:unique_order_id",
                exact: !0,
                component: At(Mt)
            }), g.a.createElement(r.a, {
                path: "/cart",
                exact: !0,
                component: At(Lt)
            }), g.a.createElement(r.a, {
                path: "/pages/:slug",
                exact: !0,
                component: At(Xt)
            }), g.a.createElement(r.a, {
                path: "/my-favorite-stores",
                exact: !0,
                component: At(aa)
            }), g.a.createElement(r.a, {
                path: "/delivery",
                exact: !0,
                component: Ht
            }), g.a.createElement(r.a, {
                path: "/delivery/login",
                exact: !0,
                component: Bt
            }), g.a.createElement(r.a, {
                path: "/delivery/orders",
                exact: !0,
                component: Yt
            }), g.a.createElement(r.a, {
                path: "/delivery/orders/:unique_order_id",
                exact: !0,
                component: zt
            }), g.a.createElement(r.a, {
                path: "/delivery/completed-orders",
                exact: !0,
                component: Ht
            }), g.a.createElement(r.a, {
                component: xt
            }))))), document.getElementById("root"))
        },
        23: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "d", function() {
                return r
            }), a.d(t, "e", function() {
                return o
            }), a.d(t, "b", function() {
                return l
            }), a.d(t, "f", function() {
                return c
            }), a.d(t, "c", function() {
                return i
            });
            var n = "CHECK_RESTAURANT_OPERATION_SERVICE",
                r = "GET_RESTAURANTS_BASED_ON_CATEGORY",
                o = "GET_RESTAURANTS_CATEGORIES",
                l = "GET_DELIVERY_RESTAURANTS",
                c = "GET_SELFPICKUP_RESTAURANTS",
                i = "GET_FAVORITE_RESTAURANTS"
        },
        27: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return c
            }), a.d(t, "b", function() {
                return i
            });
            var n = a(48),
                r = a(5),
                o = a.n(r),
                l = a(9),
                c = function() {
                    return function(e) {
                        return o.a.post(l.p).then(function(t) {
                            var a = t.data;
                            return e({
                                type: n.a,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                i = function(e) {
                    return function(t) {
                        return o.a.post(l.O, {
                            id: e
                        }).then(function(e) {
                            var a = e.data;
                            return t({
                                type: n.b,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }
        },
        30: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return r
            });
            var n = "GET_ALERTS",
                r = "SET_ALERT_UNREAD_TOTAL"
        },
        33: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return c
            });
            var n = a(66),
                r = a(9),
                o = a(5),
                l = a.n(o),
                c = function() {
                    return function(e) {
                        l.a.post(r.L).then(function(t) {
                            var a = t.data;
                            return e({
                                type: n.a,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }
        },
        41: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return n
            }), a.d(t, "c", function() {
                return r
            }), a.d(t, "a", function() {
                return o
            }), a.d(t, "d", function() {
                return l
            });
            var n = "GET_ADDRESSES",
                r = "SAVE_ADDRESS",
                o = "DELETE_ADDRESS",
                l = "SET_DEFAULT"
        },
        43: function(e, t, a) {
            "use strict";
            var n = a(3),
                r = a(4),
                o = a(7),
                l = a(6),
                c = a(8),
                i = a(0),
                s = a.n(i),
                u = a(59),
                d = function(e) {
                    function t() {
                        return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement(u.Helmet, null, s.a.createElement("title", null, this.props.seotitle), s.a.createElement("meta", {
                                name: "description",
                                content: this.props.seodescription
                            }), s.a.createElement("meta", {
                                property: "og:type",
                                content: this.props.ogtype
                            }), s.a.createElement("meta", {
                                property: "og:title",
                                content: this.props.ogtitle
                            }), s.a.createElement("meta", {
                                property: "og:description",
                                content: this.props.ogdescription
                            }), s.a.createElement("meta", {
                                property: "og:url",
                                content: this.props.ogurl
                            }), s.a.createElement("meta", {
                                property: "og:site_name",
                                content: localStorage.getItem("storeName")
                            }), s.a.createElement("meta", {
                                property: "og:image",
                                content: "/assets/img/social/ogimage.png"
                            }), s.a.createElement("meta", {
                                name: "twitter:card",
                                content: "summary"
                            }), s.a.createElement("meta", {
                                name: "twitter:title",
                                content: this.props.twittertitle
                            }), s.a.createElement("meta", {
                                name: "twitter:description",
                                content: this.props.twitterdescription
                            }), s.a.createElement("meta", {
                                name: "twitter:site",
                                content: "@".concat(localStorage.getItem("twitterUsername"))
                            }), s.a.createElement("meta", {
                                name: "twitter:image",
                                content: "/assets/img/social/twitterimage.png"
                            })))
                        }
                    }]), t
                }(i.Component);
            t.a = d
        },
        46: function(e, t, a) {
            "use strict";
            var n, r = a(28),
                o = a.n(r),
                l = a(40),
                c = a(3),
                i = a(4),
                s = a(7),
                u = a(6),
                d = a(8),
                g = a(0),
                m = a.n(g),
                p = a(171),
                f = a(172),
                h = a.n(f),
                S = a(18),
                E = a.n(S),
                v = function(e) {
                    function t() {
                        var e, a;
                        Object(c.a)(this, t);
                        for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l];
                        return (a = Object(s.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            installable: !1
                        }, a.handleInstallClick = function(e) {
                            a.setState({
                                installable: !1
                            }), n && (n.prompt(), n.userChoice.then(function(e) {
                                "accepted" === e.outcome ? console.log("User accepted the install prompt") : console.log("User dismissed the install prompt")
                            }))
                        }, a
                    }
                    return Object(d.a)(t, e), Object(i.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(l.a)(o.a.mark(function e() {
                                var t = this;
                                return o.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            window.addEventListener("beforeinstallprompt", function(e) {
                                                e.preventDefault(), n = e, t.setState({
                                                    installable: !0
                                                })
                                            }), window.addEventListener("appinstalled", function() {
                                                n = null, t.setState({
                                                    installable: !1
                                                }), console.log("INSTALL: Success")
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            return "footer" === this.props.type ? m.a.createElement(m.a.Fragment, null, this.state.installable && p.isAndroid && m.a.createElement("div", {
                                className: "d-flex justify-content-center footer-pwa"
                            }, m.a.createElement("div", {
                                className: "d-flex fixed-pwa-install ".concat("FLOAT" === localStorage.getItem("footerStyleType") ? "footer-float" : "footer-fixed")
                            }, m.a.createElement("div", null, m.a.createElement("p", {
                                className: "mb-0 mr-3"
                            }, localStorage.getItem("pwaInstallFooterMessage"))), m.a.createElement("div", null, m.a.createElement("button", {
                                className: "btn btn-success btn-md position-relative",
                                onClick: this.handleInstallClick
                            }, localStorage.getItem("pwaInstallFooterInstallText"), m.a.createElement(E.a, {
                                duration: 250
                            })))))) : "header" === this.props.type ? m.a.createElement(m.a.Fragment, null, this.state.installable && p.isAndroid && m.a.createElement(h.a, null, m.a.createElement("div", {
                                className: "d-flex align-items-center nav-pwa",
                                onClick: this.handleInstallClick
                            }, m.a.createElement("i", {
                                className: "si si-screen-smartphone pwa-phone-icon"
                            })))) : null
                        }
                    }]), t
                }(g.Component);
            t.a = v
        },
        48: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return r
            });
            var n = "GET_ALL_LANGUAGES",
                r = "GET_SINGLE_LANGUAGE_DATA"
        },
        49: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return d
            });
            var n = a(3),
                r = a(4),
                o = a(7),
                l = a(6),
                c = a(8),
                i = a(168),
                s = a(0),
                u = a.n(s),
                d = function(e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(l.a)(t).call(this, e))).handleClick = function(e) {
                            var t = a.props,
                                n = t.replace,
                                r = t.to,
                                o = t.delay,
                                l = t.onDelayStart,
                                c = t.onDelayEnd,
                                i = a.context.router.history;
                            a.props.clickAction && a.props.clickAction(), l(e, r), e.defaultPrevented || (e.preventDefault(), a.timeout = setTimeout(function() {
                                n ? i.replace(r) : i.push(r), c(e, r)
                            }, o))
                        }, a.timeout = null, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "componentWillUnmount",
                        value: function() {
                            this.timeout && clearTimeout(this.timeout)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = Object.assign({}, this.props);
                            return delete e.delay, delete e.onDelayStart, delete e.onDelayEnd, delete e.clickAction, u.a.createElement(i.a, Object.assign({}, e, {
                                onClick: this.handleClick
                            }))
                        }
                    }]), t
                }(u.a.Component);
            d.defaultProps = {
                delay: 0,
                onDelayStart: function() {},
                onDelayEnd: function() {}
            }, d.contextTypes = i.a.contextTypes
        },
        53: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return r
            }), a.d(t, "d", function() {
                return o
            }), a.d(t, "c", function() {
                return l
            });
            var n = "LOGIN_DELIVERY_USER",
                r = "LOGOUT_DELIVERY_USER",
                o = "UPDATE_DELIVERY_USER_INFO",
                l = "UPDATE_DELIVERY_ORDER_HISTORY"
        },
        58: function(e, t, a) {
            "use strict";
            a.d(t, "c", function() {
                return u
            }), a.d(t, "b", function() {
                return d
            }), a.d(t, "e", function() {
                return g
            }), a.d(t, "d", function() {
                return m
            }), a.d(t, "f", function() {
                return p
            }), a.d(t, "g", function() {
                return f
            }), a.d(t, "j", function() {
                return h
            }), a.d(t, "h", function() {
                return S
            }), a.d(t, "i", function() {
                return E
            }), a.d(t, "k", function() {
                return v
            }), a.d(t, "a", function() {
                return b
            }), a.d(t, "l", function() {
                return y
            });
            var n = a(50),
                r = a(15),
                o = a(71),
                l = a(9),
                c = a(5),
                i = a.n(c),
                s = a(130),
                u = function(e, t, a) {
                    return function(n) {
                        return i.a.post(l.F, {
                            id: e,
                            latitude: t,
                            longitude: a
                        }).then(function(e) {
                            var t = e.data;
                            return n({
                                type: r.b,
                                payload: t
                            })
                        }).catch(function(e) {
                            if (console.log(e), 400 === e.response.status) {
                                return n({
                                    type: o.a,
                                    payload: !0
                                })
                            }
                        })
                    }
                },
                d = function(e) {
                    return function(t, a) {
                        return i.a.post(l.H + "/" + e).then(function(e) {
                            var a = e.data;
                            return t({
                                type: r.b,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                g = function(e) {
                    return function(t, a) {
                        return i.a.post(l.u + "/" + e, {
                            token: a().user.user.data.auth_token
                        }).then(function(e) {
                            var a = e.data;
                            return t({
                                type: r.d,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                m = function(e) {
                    return function(t) {
                        return i.a.post(l.G + "/" + e).then(function(e) {
                            var a = e.data;
                            return t({
                                type: r.c,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                p = function(e) {
                    return function(t) {
                        i.a.post(l.I + "/" + e).then(function(e) {
                            var a = e.data;
                            return t({
                                type: r.e,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                f = function(e) {
                    return function(t) {
                        return i.a.post(l.N, {
                            id: e
                        }).then(function(e) {
                            var a = e.data;
                            return t({
                                type: r.k,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                h = function() {
                    return function(e) {
                        return e({
                            type: r.h,
                            payload: []
                        })
                    }
                },
                S = function() {
                    return function(e) {
                        return e({
                            type: r.f,
                            payload: []
                        })
                    }
                },
                E = function() {
                    return function(e) {
                        return e({
                            type: r.g,
                            payload: []
                        })
                    }
                },
                v = function(e, t, a, o) {
                    return function(l, c) {
                        var i, u = a + t,
                            d = o + t;
                        return (i = new s.a(e, ["name"], {
                            caseSensitive: !1
                        }).search(t)).length > 0 ? l({
                            type: r.i,
                            payload: {
                                items: Object(n.a)({}, u, i)
                            }
                        }) : i.length <= 0 ? l({
                            type: r.i,
                            payload: {
                                items: Object(n.a)({}, d, i)
                            }
                        }) : void 0
                    }
                },
                b = function(e) {
                    return function(t) {
                        return t({
                            type: r.a,
                            payload: e
                        })
                    }
                },
                y = function(e, t) {
                    return function(a) {
                        return i.a.post(l.c, {
                            token: e,
                            id: t
                        }).then(function(e) {
                            var t = e.data;
                            return a({
                                type: r.j,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }
        },
        60: function(e, t, a) {
            "use strict";
            var n = a(3),
                r = a(4),
                o = a(7),
                l = a(6),
                c = a(8),
                i = a(0),
                s = a.n(i),
                u = a(42),
                d = a(44),
                g = a.n(d),
                m = a(317),
                p = a(18),
                f = a.n(p),
                h = function(e) {
                    function t() {
                        return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.slides,
                                a = e.size,
                                n = e.secondarySlider;
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                                className: n ? "slider-wrapper secondary-slider-wrapper my-20 secondaryBannerx1" : "slider-wrapper bg-light py-20 my-0 primaryBannerx1"
                            }, 0 === t.length ? s.a.createElement(u.a, {
                                height: 170,
                                width: 400,
                                speed: 1.2,
                                primaryColor: "#f3f3f3",
                                secondaryColor: "#ecebeb"
                            }, s.a.createElement("rect", {
                                x: "20",
                                y: "0",
                                rx: "4",
                                ry: "4",
                                width: "168",
                                height: "168"
                            }), s.a.createElement("rect", {
                                x: "228",
                                y: "0",
                                rx: "4",
                                ry: "4",
                                width: "168",
                                height: "168"
                            })) : t.map(function(e) {
                                return "3" === e.data.model ? s.a.createElement("a", {
                                    href: e.url,
                                    className: "slider-wrapper__img-wrapper",
                                    key: e.data.id,
                                    style: {
                                        position: "relative"
                                    }
                                }, s.a.createElement(g.a, null, s.a.createElement("img", {
                                    src: e.data.image,
                                    alt: e.data.name,
                                    className: "slider-wrapper__img slider-cust-img ".concat(!n && "slider-wrapper__img-shadow", " custom-promo-img"),
                                    style: {
                                        height: 2.4 * a + "rem",
                                        width: 2.4 * a + "rem"
                                    }
                                })), s.a.createElement(f.a, {
                                    duration: "500",
                                    hasTouch: !0
                                })) : s.a.createElement(m.a, {
                                    to: "../" + e.url,
                                    className: "slider-wrapper__img-wrapper",
                                    key: e.data.id,
                                    style: {
                                        position: "relative"
                                    }
                                }, s.a.createElement(g.a, null, s.a.createElement("img", {
                                    src: e.data.image,
                                    alt: e.data.name,
                                    className: "slider-wrapper__img slider-cust-img ".concat(!n && "slider-wrapper__img-shadow", " custom-promo-img"),
                                    style: {
                                        height: 2.4 * a + "rem",
                                        width: 2.4 * a + "rem"
                                    }
                                })), s.a.createElement(f.a, {
                                    duration: "500",
                                    hasTouch: !0
                                }))
                            })))
                        }
                    }]), t
                }(i.Component);
            t.a = h
        },
        61: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return n
            }), a.d(t, "a", function() {
                return r
            }), a.d(t, "c", function() {
                return o
            });
            var n = "LOAD_CART",
                r = "ADD_PRODUCT",
                o = "REMOVE_PRODUCT"
        },
        62: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return n
            }), a.d(t, "c", function() {
                return r
            }), a.d(t, "a", function() {
                return o
            });
            var n = "GET_PAGES",
                r = "GET_SINGLE_PAGE",
                o = "CLEAR_SINGLE_PAGE"
        },
        63: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return r
            }), a.d(t, "c", function() {
                return o
            });
            var n = "ADD_RATING_FOR_ORDER",
                r = "GET_RATABLE_ORDER_DETAILS",
                o = "GET_REVIEWS_OF_STORE"
        },
        66: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = "GET_SETTINGS"
        },
        70: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = "NOTIFICATION_TOKEN"
        },
        71: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = "FORCE_RELOAD"
        },
        80: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return r
            });
            var n = "APPLY_COUPON",
                r = "COUPON_ERROR"
        },
        81: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return n
            }), a.d(t, "a", function() {
                return r
            });
            var n = "SEND_DELIVERY_GUY_GPS_LOCATION",
                r = "GET_DELIVERY_GUY_GPS_LOCATION"
        },
        83: function(e, t, a) {
            "use strict";
            a.d(t, "c", function() {
                return c
            }), a.d(t, "d", function() {
                return i
            }), a.d(t, "a", function() {
                return s
            }), a.d(t, "e", function() {
                return u
            }), a.d(t, "b", function() {
                return d
            });
            var n = a(23),
                r = a(9),
                o = a(5),
                l = a.n(o),
                c = function(e, t, a) {
                    return function(o) {
                        l.a.post(r.v, {
                            latitude: e,
                            longitude: t,
                            category_ids: a
                        }).then(function(e) {
                            var t = e.data;
                            return o({
                                type: n.d,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                i = function(e) {
                    return function(e) {
                        l.a.post(r.D).then(function(t) {
                            var a = t.data;
                            return e({
                                type: n.e,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                s = function(e, t) {
                    return function(a) {
                        return l.a.post(r.s, {
                            latitude: e,
                            longitude: t
                        }).then(function(e) {
                            var t = e.data;
                            return a({
                                type: n.b,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                u = function(e, t) {
                    return function(a) {
                        return l.a.post(r.K, {
                            latitude: e,
                            longitude: t
                        }).then(function(e) {
                            var t = e.data;
                            return a({
                                type: n.f,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                d = function(e, t) {
                    return function(a, o) {
                        return l.a.post(r.t, {
                            token: o().user.user.data.auth_token,
                            latitude: e,
                            longitude: t
                        }).then(function(e) {
                            var t = e.data;
                            return a({
                                type: n.c,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }
        },
        86: function(e, t, a) {
            "use strict";
            a(220);
            var n, r = a(34);
            r.messaging.isSupported() && ("null" !== localStorage.getItem("firebasePublic") && "null" !== localStorage.getItem("firebaseSenderId") && null !== localStorage.getItem("firebasePublic") && null !== localStorage.getItem("firebaseSenderId") ? (n = r.initializeApp({
                messagingSenderId: localStorage.getItem("firebaseSenderId")
            }).messaging()).usePublicVapidKey(localStorage.getItem("firebasePublic")) : (n = r.initializeApp({
                messagingSenderId: "587656068333"
            }).messaging()).usePublicVapidKey("BH5L8XrGsNpki5uF1008FbZzgKKZN-NmhOwdWL5Lxh5r3nsgZ6N_Dged1IYXXCCJwpnrXzs52G_v3vM_naO0hxY"));
            t.a = n
        },
        87: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return n
            }), a.d(t, "a", function() {
                return r
            });
            var n = "SEARCH_RESTAURANTS",
                r = "CLEAR_SEARCH"
        },
        88: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return n
            }), a.d(t, "a", function() {
                return r
            });
            var n = "GET_ORDERS",
                r = "CANCEL_ORDER"
        },
        89: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "c", function() {
                return r
            }), a.d(t, "b", function() {
                return o
            });
            var n = "ACCEPT_TO_DELIVER",
                r = "PICKEDUP_ORDER",
                o = "DELIVER_ORDER"
        },
        9: function(e, t, a) {
            "use strict";
            var n = "https://" + window.location.hostname;
            a.d(t, "L", function() {
                return r
            }), a.d(t, "A", function() {
                return o
            }), a.d(t, "B", function() {
                return l
            }), a.d(t, "s", function() {
                return c
            }), a.d(t, "K", function() {
                return i
            }), a.d(t, "H", function() {
                return s
            }), a.d(t, "G", function() {
                return u
            }), a.d(t, "F", function() {
                return d
            }), a.d(t, "I", function() {
                return g
            }), a.d(t, "d", function() {
                return m
            }), a.d(t, "S", function() {
                return p
            }), a.d(t, "cb", function() {
                return f
            }), a.d(t, "y", function() {
                return h
            }), a.d(t, "P", function() {
                return S
            }), a.d(t, "fb", function() {
                return E
            }), a.d(t, "m", function() {
                return v
            }), a.d(t, "db", function() {
                return b
            }), a.d(t, "k", function() {
                return y
            }), a.d(t, "nb", function() {
                return I
            }), a.d(t, "e", function() {
                return _
            }), a.d(t, "g", function() {
                return O
            }), a.d(t, "ab", function() {
                return w
            }), a.d(t, "jb", function() {
                return N
            }), a.d(t, "w", function() {
                return k
            }), a.d(t, "z", function() {
                return T
            }), a.d(t, "W", function() {
                return j
            }), a.d(t, "hb", function() {
                return A
            }), a.d(t, "ob", function() {
                return x
            }), a.d(t, "bb", function() {
                return C
            }), a.d(t, "Y", function() {
                return R
            }), a.d(t, "j", function() {
                return P
            }), a.d(t, "x", function() {
                return L
            }), a.d(t, "Q", function() {
                return D
            }), a.d(t, "i", function() {
                return F
            }), a.d(t, "N", function() {
                return G
            }), a.d(t, "p", function() {
                return U
            }), a.d(t, "O", function() {
                return M
            }), a.d(t, "n", function() {
                return V
            }), a.d(t, "ib", function() {
                return W
            }), a.d(t, "pb", function() {
                return H
            }), a.d(t, "f", function() {
                return B
            }), a.d(t, "D", function() {
                return Y
            }), a.d(t, "v", function() {
                return z
            }), a.d(t, "E", function() {
                return J
            }), a.d(t, "o", function() {
                return K
            }), a.d(t, "T", function() {
                return q
            }), a.d(t, "U", function() {
                return X
            }), a.d(t, "h", function() {
                return Q
            }), a.d(t, "kb", function() {
                return Z
            }), a.d(t, "lb", function() {
                return $
            }), a.d(t, "X", function() {
                return ee
            }), a.d(t, "V", function() {
                return te
            }), a.d(t, "J", function() {
                return ae
            }), a.d(t, "C", function() {
                return ne
            }), a.d(t, "b", function() {
                return re
            }), a.d(t, "c", function() {
                return oe
            }), a.d(t, "t", function() {
                return le
            }), a.d(t, "u", function() {
                return ce
            }), a.d(t, "eb", function() {
                return ie
            }), a.d(t, "R", function() {
                return se
            }), a.d(t, "mb", function() {
                return ue
            }), a.d(t, "r", function() {
                return de
            }), a.d(t, "M", function() {
                return ge
            }), a.d(t, "gb", function() {
                return me
            }), a.d(t, "q", function() {
                return pe
            }), a.d(t, "a", function() {
                return fe
            }), a.d(t, "Z", function() {
                return he
            }), a.d(t, "l", function() {
                return Se
            });
            var r = n + "/public/api/get-settings",
                o = n + "/public/api/popular-geo-locations",
                l = n + "/public/api/promo-slider",
                c = n + "/public/api/get-delivery-restaurants",
                i = n + "/public/api/get-selfpickup-restaurants",
                s = n + "/public/api/get-restaurant-info",
                u = n + "/public/api/get-restaurant-info-by-id",
                d = n + "/public/api/get-restaurant-info-and-operational-status",
                g = n + "/public/api/get-restaurant-items",
                m = n + "/public/api/apply-coupon",
                p = n + "/public/api/login",
                f = n + "/public/api/register",
                h = n + "/public/api/get-pages",
                S = n + "/public/api/get-single-page",
                E = n + "/public/api/search-restaurants",
                v = n + "/public/api/get-addresses",
                b = n + "/public/api/save-address",
                y = n + "/public/api/delete-address",
                I = n + "/public/api/update-user-info",
                _ = n + "/public/api/change-avatar",
                O = n + "/public/api/check-ban",
                w = n + "/public/api/place-order",
                N = n + "/public/api/set-default-address",
                k = n + "/public/api/get-orders",
                T = n + "/public/api/get-payment-gateways",
                j = n + "/public/api/save-notification-token",
                A = n + "/public/api/send-otp",
                x = n + "/public/api/verify-otp",
                C = n + "/public/api/payment/process-razor-pay",
                R = n + "/public/api/payment/paytm",
                P = n + "/public/api/check-running-order",
                L = n + "/public/api/cancel-order",
                D = n + "/public/api/get-wallet-transactions",
                F = n + "/public/api/check-restaurant-operation-service",
                G = n + "/public/api/get-single-item",
                U = n + "/public/api/get-all-languages",
                M = n + "/public/api/get-single-language",
                V = n + "/public/api/coordinate-to-address",
                W = n + "/public/api/send-password-reset-mail",
                H = n + "/public/api/verify-password-reset-otp",
                B = n + "/public/api/change-user-password",
                Y = n + "/public/api/get-all-restaurants-categories",
                z = n + "/public/api/get-filtered-restaurants",
                J = n + "/public/api/get-restaurant-category-slides",
                K = n + "/public/api/get-user-notifications",
                q = n + "/public/api/mark-all-notifications-read",
                X = n + "/public/api/mark-one-notification-read",
                Q = n + "/public/api/check-cart-items-availability",
                Z = n + "/public/api/accept-stripe-payment",
                $ = n + "/public/api/stripe-redirect-capture",
                ee = n + "/public/api/payment/process-paymongo",
                te = n + "/public/api/payment/process-mercado-pago",
                ae = n + "/public/api/get-store-reviews",
                ne = n + "/public/api/get-ratable-order",
                re = n + "/public/api/rate-order",
                oe = n + "/public/api/toggle-favorite",
                le = n + "/public/api/get-favorite-stores",
                ce = n + "/public/api/get-restaurant-info-with-favourite",
                ie = n + "/public/api/update-tax-number",
                se = n + "/public/api/delivery/login",
                ue = n + "/public/api/delivery/update-user-info",
                de = n + "/public/api/delivery/get-delivery-orders",
                ge = n + "/public/api/delivery/get-single-delivery-order",
                me = n + "/public/api/delivery/set-delivery-guy-gps-location",
                pe = n + "/public/api/delivery/get-delivery-guy-gps-location",
                fe = n + "/public/api/delivery/accept-to-deliver",
                he = n + "/public/api/delivery/pickedup-order",
                Se = n + "/public/api/delivery/deliver-order"
        },
        95: function(e, t, a) {
            "use strict";
            a.d(t, "f", function() {
                return i
            }), a.d(t, "h", function() {
                return s
            }), a.d(t, "g", function() {
                return u
            }), a.d(t, "l", function() {
                return d
            }), a.d(t, "d", function() {
                return g
            }), a.d(t, "j", function() {
                return m
            }), a.d(t, "m", function() {
                return p
            }), a.d(t, "e", function() {
                return f
            }), a.d(t, "k", function() {
                return h
            }), a.d(t, "n", function() {
                return S
            }), a.d(t, "b", function() {
                return E
            }), a.d(t, "a", function() {
                return v
            }), a.d(t, "c", function() {
                return b
            }), a.d(t, "i", function() {
                return y
            });
            var n = a(12),
                r = a(9),
                o = a(41),
                l = a(5),
                c = a.n(l),
                i = function(e, t, a, o, l, i, s) {
                    return function(u) {
                        c.a.post(r.S, {
                            name: e,
                            email: t,
                            password: a,
                            accessToken: o,
                            phone: l,
                            provider: i,
                            address: s
                        }).then(function(e) {
                            var t = e.data;
                            return u({
                                type: n.c,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                s = function(e, t, a, o, l) {
                    return function(i) {
                        c.a.post(r.cb, {
                            name: e,
                            email: t,
                            phone: a,
                            password: o,
                            address: l
                        }).then(function(e) {
                            var t = e.data;
                            return i({
                                type: n.e,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                u = function() {
                    return function(e) {
                        return localStorage.removeItem("userSetAddress"), localStorage.removeItem("geoLocation"), localStorage.removeItem("lastSavedNotificationToken"), [e({
                            type: n.d,
                            payload: []
                        }), e({
                            type: n.f,
                            payload: !1
                        }), e({
                            type: n.b,
                            payload: []
                        }), e({
                            type: o.b,
                            payload: []
                        })]
                    }
                },
                d = function(e, t, a) {
                    return function(o) {
                        return c.a.post(r.nb, {
                            token: t,
                            user_id: e,
                            unique_order_id: a
                        }).then(function(e) {
                            var t = e.data;
                            return o({
                                type: n.j,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                g = function(e, t) {
                    return function(a) {
                        c.a.post(r.j, {
                            token: t,
                            user_id: e
                        }).then(function(e) {
                            var t = e.data;
                            return a({
                                type: n.f,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                m = function(e, t, a, o) {
                    return function(l) {
                        return c.a.post(r.hb, {
                            email: e,
                            phone: t,
                            accessToken: a,
                            provider: o
                        }).then(function(e) {
                            var t = e.data;
                            return l({
                                type: n.h,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                p = function(e, t) {
                    return function(a) {
                        c.a.post(r.ob, {
                            phone: e,
                            otp: t
                        }).then(function(e) {
                            var t = e.data;
                            return a({
                                type: n.k,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                f = function(e, t) {
                    return function(a) {
                        c.a.post(r.Q, {
                            token: e,
                            user_id: t
                        }).then(function(e) {
                            var t = e.data;
                            return a({
                                type: n.b,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                h = function(e) {
                    return function(t) {
                        c.a.post(r.ib, {
                            email: e
                        }).then(function(e) {
                            var a = e.data;
                            return t({
                                type: n.i,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                S = function(e, t) {
                    return function(a) {
                        c.a.post(r.pb, {
                            email: e,
                            code: t
                        }).then(function(e) {
                            var t = e.data;
                            return a({
                                type: n.l,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                E = function(e, t, a) {
                    return function(o) {
                        c.a.post(r.f, {
                            email: e,
                            code: t,
                            password: a
                        }).then(function(e) {
                            var t = e.data;
                            return o({
                                type: n.a,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                v = function(e, t) {
                    return function() {
                        return c.a.post(r.e, {
                            token: e,
                            avatar: t
                        }).then(function(e) {
                            return e.data
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                b = function(e) {
                    return function() {
                        return c.a.post(r.g, {
                            token: e
                        }).then(function(e) {
                            return e.data
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                y = function(e, t) {
                    return function(a) {
                        return c.a.post(r.eb, {
                            token: e,
                            tax_number: t
                        }).then(function(e) {
                            var t = e.data;
                            return a({
                                type: n.g,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }
        },
        97: function(e, t, a) {
            "use strict";
            var n = a(3),
                r = a(4),
                o = a(7),
                l = a(6),
                c = a(8),
                i = a(0),
                s = a.n(i),
                u = a(317),
                d = a(16),
                g = a(46),
                m = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++) c[i] = arguments[i];
                        return (a = Object(o.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            active_nearme: !1,
                            active_explore: !1,
                            active_cart: !1,
                            active_account: !1,
                            active_alerts: !1,
                            unread_alerts_count: null
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            !0 === this.props.active_nearme && this.setState({
                                active_nearme: !0
                            }), !0 === this.props.active_explore && this.setState({
                                active_explore: !0
                            }), !0 === this.props.active_cart && this.setState({
                                active_cart: !0
                            }), !0 === this.props.active_account && this.setState({
                                active_account: !0
                            }), !0 === this.props.active_alerts && this.setState({
                                active_alerts: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.cartTotal,
                                a = e.alertUnreadTotal;
                            return s.a.createElement(s.a.Fragment, null, "true" === localStorage.getItem("showPwaInstallPromptFooter") && s.a.createElement(g.a, {
                                type: "footer"
                            }), s.a.createElement("div", {
                                className: "d-flex justify-content-center"
                            }, s.a.createElement("div", {
                                className: "content pt-10 py-5 font-size-xs clearfix ".concat("FLOAT" === localStorage.getItem("footerStyleType") ? "footer-float" : "footer-fixed")
                            }, s.a.createElement(u.a, {
                                to: "/",
                                className: "col footer-links px-2 py-1"
                            }, s.a.createElement("i", {
                                className: "si si-pointer fa-2x"
                            }), " ", s.a.createElement("br", null), s.a.createElement("span", {
                                className: this.state.active_nearme ? "active-footer-tab" : ""
                            }, this.state.active_nearme ? localStorage.getItem("footerNearme") : s.a.createElement("span", null, " ", localStorage.getItem("footerNearme")))), s.a.createElement(u.a, {
                                to: "/alerts",
                                className: "col footer-links px-2 py-1"
                            }, s.a.createElement("span", {
                                className: "cart-quantity-badge",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor")
                                }
                            }, a), s.a.createElement("i", {
                                className: "si si-bell fa-2x"
                            }), " ", s.a.createElement("br", null), s.a.createElement("span", {
                                className: this.state.active_alerts ? "active-footer-tab" : ""
                            }, this.state.active_alerts ? localStorage.getItem("footerAlerts") : s.a.createElement("span", null, " ", localStorage.getItem("footerAlerts")))), s.a.createElement(u.a, {
                                to: "/explore",
                                className: "col footer-links px-2 py-1"
                            }, s.a.createElement("i", {
                                className: "si si-magnifier fa-2x"
                            }), " ", s.a.createElement("br", null), s.a.createElement("span", {
                                className: this.state.active_explore ? "active-footer-tab" : ""
                            }, (this.state.active_explore, localStorage.getItem("footerExplore")))), s.a.createElement(u.a, {
                                to: "/cart",
                                className: "col footer-links px-2 py-1"
                            }, s.a.createElement("i", {
                                className: "si si-bag fa-2x"
                            }), " ", s.a.createElement("br", null), s.a.createElement("span", {
                                className: this.state.active_cart ? "active-footer-tab" : ""
                            }, (this.state.active_cart, localStorage.getItem("footerCart")), s.a.createElement("span", {
                                className: "cart-quantity-badge",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor")
                                }
                            }, t.productQuantity))), s.a.createElement(u.a, {
                                to: "/my-account",
                                className: "col footer-links px-2 py-1"
                            }, s.a.createElement("i", {
                                className: "si si-user fa-2x"
                            }), " ", s.a.createElement("br", null), s.a.createElement("span", {
                                className: this.state.active_account ? "active-footer-tab" : ""
                            }, (this.state.active_account, localStorage.getItem("footerAccount")))))))
                        }
                    }]), t
                }(i.Component);
            t.a = Object(d.b)(function(e) {
                return {
                    cartTotal: e.total.data,
                    alertUnreadTotal: e.alert.alertUnreadTotal
                }
            }, {})(m)
        },
        98: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var n = "UPDATE_CART"
        }
    },
    [
        [136, 37, 34]
    ]
]);