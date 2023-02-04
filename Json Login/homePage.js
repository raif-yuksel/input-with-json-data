$(function () {
    var cardItems = {
        "items": [
            { 
                name: "Ürün-1", 
                Image: "/img/dashboard.jpg"
            },
            { 
                name: "Ürün-2", 
                Image: "/img/dashboard.jpg"
            },
            { 
                name: "Ürün-3", 
                Image: "/img/dashboard.jpg"
            },
            { 
                name: "Ürün-4", 
                Image: "/img/dashboard.jpg"
            },
            { 
                name: "Ürün-5", 
                Image: "/img/dashboard.jpg"
            },
            { 
                name: "Ürün-6", 
                Image: "/img/dashboard.jpg"
            }
        ]
    };
    $.each(cardItems.items, function(index, object) {
        $("#result").append('<div class="card"><h2 class="card__title">' + object.name + '</h2><div class="card__image"><img src="' + object.Image + '" alt="" /></div></div>');
    });
});

$(function () {
    var cardItemss = {
        "itemss": [
            { 
                name: "Raif-Yüksel-1", 
            },
            { 
                name: "Raif-Yüksel-2", 
            },
            { 
                name: "Raif-Yüksel-4", 
            },
            { 
                name: "Raif-Yüksel-5", 
            },
            { 
                name: "Raif-Yüksel-6", 
            },
            { 
                name: "Raif-Yüksel-7", 
            },
            { 
                name: "Raif-Yüksel-8", 
            },
            { 
                name: "Raif-Yüksel-9", 
            }
        ]
    };
    $.each(cardItemss.itemss, function(index, object) {
        $("#caption").append('<li>' + object.name + '</li>');
    });
});


$(function() {
    var repeat = 1;
    var ch = 0;
    var item = 0;
    var items = $('#caption li').length;
    var time = 2000;
    var delay = 100;
    var wait = 3500
    $('#showCaption').css('width', ($('#caption').width() + 20));
    function tickInterval() {
        if(item < items) {
            var text = $('#caption li:eq('+item+')').text();
            type(text);
            text = null;
            var tick = setTimeout(tickInterval, time);
        } else {
            if(repeat == 1) {
                ch = 0;
                item = 0;
                tickInterval();
            } else {
                clearTimeout(tick);
            }
        }
    }
    function type(text) {
        time = delay;
        $('#showCaption').html(text.substr(0, ch++));
        if(ch > text.length) {
            item++;
            ch = 0;
            time = wait;
        }
    }
    var tick = setTimeout(tickInterval, time);
});
