'use strict';
angular.module('agentDashboardApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'luegg.directives',
        'ngToast'
]).config(['$routeProvider',
    function (a) {
        a.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).when('/chat/:roomId?', {
            templateUrl: 'views/chat.html',
            controller: 'ChatCtrl'
        }).otherwise({
            redirectTo: '/'
        })
    }
]).run(['$rootScope',
    '$timeout',
    '$window',
    function (a, b, c) {
        a.$on('$routeChangeSuccess', function () {
            b(function () {
                c.scrollTo(0, 0)
            }, 500)
        })
    }
]),
    angular.module('agentDashboardApp').controller('HomeCtrl', [
            '$scope',
            '$http',
            '$q',
            '$location',
            '$timeout',
            '$rootScope',
            '$window',
            'Rooms',
            function (a, b, c, d, e, f, g, h) {
                a.rooms = h.rooms,
                a.setSelectedIndex = function (a) {
                    h.changeSelectedRoom(a),
                    console.log(a, h.selectedRoomIndex),
                    d.path('/chat')
                },
                a.getMessage = function (a) {
                    return 'string' == typeof a ? a : 'Search results'
                },
                a.deleteRoom = function (a) {
                    h.deleteRoom(a)
                }
            }
]),
    angular.module('agentDashboardApp').controller('ChatCtrl', [
            '$scope',
            '$http',
            '$q',
            '$location',
            '$timeout',
            '$rootScope',
            '$window',
            '$routeParams',
            'Rooms',
            'ngToast',
            function (a, b, c, d, e, f, g, h, i, j) {
                var k = 'http://staging.supergenie.co',
                l = '',
                m = '/api/v1/incomingmsg';
                a.showThinkingText = !1,
            a.thinkingText = 'IVA is thinking...',
            a.glued = !0,
            a.showFirstMessage = !1,
            a.room_index = i.selectedRoomIndex,
            console.log(i.selectedRoomIndex, a.room_index),
            a.inputMessage = '',
            a.inputError = '',
            a.room = {
            },
            null != a.room_index && (console.log(i.rooms), a.room = i.rooms[a.room_index]),
            a.sendMessage = function () {
                if ('' == a.inputMessage.trim()) return void (a.inputError = !0);
                var b = {
                    app_id: 2,
                    uid: 2,
                    room_id: a.room.room_id || null,
                    guid: a.room.guid || null,
                    category: a.room.category || 'travel',
                    msg: a.inputMessage
                };
                console.log(b),
                a.room.room_id ? i.addMessageToRoom(a.room_index, b.msg, 1, 'user')  : (a.showFirstMessage = !0, a.firstMessage = b.msg),
                a.inputMessage = '',
                n(!0),
                o(b).then(function (c) {
                    if (n(!1), !a.room.room_id) {
                        console.log('CAME HERE');
                        var d = i.createRoom(c.room_id, c.guid, 2, 2, 'travel', c.avatar_name, c.avatar_image_url);
                        a.room_index = i.getRoomIndexByRoomId(d),
                        a.room = i.rooms[a.room_index]
                    }
                    a.showFirstMessage && i.addMessageToRoom(a.room_index, b.msg, 1, 'user'),
                    a.showFirstMessage = !1,
                    'string' == typeof c.generated_msg ? i.addMessageToRoom(a.room_index, c.generated_msg, 1, 'agent')  : i.addMessageToRoom(a.room_index, c.generated_msg, 2, 'agent')
                }, function (a) {
                    n(!1),
                    console.log('Failed to get Reply, the result is: ', a);
                    var b = j.create({
                        className: 'danger',
                        content: '<p>No Match Found. Can you please repharse?</p>'
                    });
                    console.log(b)
                })
            },
            a.getArrDate = function (a) {
                var b = a.indexOf('t');
                return a.substring(0, b)
            };
                var n = function (b) {
                    a.showThinkingText = b
                },
                o = function (a) {
                    var d = c.defer(),
                    e = k + l + m;
                    return b({
                        method: 'post',
                        url: e,
                        data: a
                    }).success(function (a, b, c, e) {
                        console.log(a),
                        d.resolve(a)
                    }).error(function (a, b, c, e) {
                        d.reject(a)
                    }),
                    d.promise
                };
                e(function () {
                    angular.element('.inputMessage').trigger('focus')
                }, 0)
            }
]),
    angular.module('agentDashboardApp').factory('Rooms', function () {
        var a = [
        ],
        b = null,
        c = function (b, c, d, e, f, g, h) {
            c += 1;
            var i = {
                messages: [
                ],
                guid: c,
                room_id: b,
                app_id: d,
                uid: e,
                category: f,
                avatar_name: g,
                avatar_image_url: h,
                created_at: (new Date).getTime()
            };
            return a.unshift(i),
            console.log(a, 'FROM MODEL'),
            i.room_id
        },
        d = function (a) {
            room.splice(a, 1)
        },
        e = function (b) {
            var c = - 1;
            return angular.forEach(a, function (a, d) {
                console.log(a, d),
                a.room_id == b && (console.log('Came here'), c = d)
            }),
            c
        },
        f = function (b, c, d, e) {
            console.log(b, 'AddMessage to Room');
            var f = {
                msg: c,
                category: d,
                sender: e,
                created_at: (new Date).getTime()
            };
            a[b].messages.push(f)
        },
        g = function (a) {
            this.selectedRoomIndex = a,
            console.log('came here')
        };
        return {
            rooms: a,
            selectedRoomIndex: b,
            createRoom: c,
            deleteRoom: d,
            getRoomIndexByRoomId: e,
            addMessageToRoom: f,
            changeSelectedRoom: g
        }
    }),
    angular.module('agentDashboardApp').directive('ngEnter', function () {
        return function (a, b, c) {
            b.bind('keydown keypress', function (b) {
                13 === b.which && (a.$apply(function () {
                    a.$eval(c.ngEnter)
                }), b.preventDefault())
            })
        }
    }),
    angular.module('agentDashboardApp').directive('scrollBottom', function () {
        return {
            link: function (a, b, c) {
                var d = $('#' + c.scrollBottom);
                $(b).on('click', function () {
                    d.scrollTop(d[0].scrollHeight)
                })
            }
        }
    });
