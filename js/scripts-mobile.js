$(document).ready(function () {
    $(window).on('load', function() {
        $('.preloader').delay(500).fadeToggle(500);
    });

    $('.btn-breathe').on('click', function() {
        $(this).parent().addClass('hide');
        $('.breathe').removeClass('hide');

        var audio = $("#breathe-song").get(0);
            audio.volume = 0.1;
            audio.playbackRate = 0.8;
            audio.play();

        setTimeout(function() {
            $('.breathe').addClass('animate');

            if(KeyshapeJS.version.indexOf('1.')!=0)throw Error('Expected KeyshapeJS v1.*.*');window.ks=document.ks=KeyshapeJS;(function(ks){
            ks.animate("#H_1_",[{p:'scaleX',t:[0,2000,4000],v:[0.9,1.08,0.9],e:[[1,0.5,0,0.5,1],[1,0.5,0,0.5,1],[0]]},{p:'scaleY',t:[0,2000,4000],v:[0.9,1.08,0.9],e:[[1,0.5,0,0.5,1],[1,0.5,0,0.5,1],[0]]},{p:'d',t:[0,2000,4000],v:["path('M156.202,124.125L280.326,0L404.451,124.125L331.929,124.125L331.929,239.881L211.988,239.881C221.751,227.329,227.329,211.988,227.329,196.647L227.329,124.125L156.202,124.125ZM436.528,404.451L560.652,280.326L436.528,156.202L436.528,404.451ZM333.323,436.528L333.323,357.032C333.323,344.48,336.113,333.323,341.691,322.166L343.086,319.377L227.329,319.377L227.329,435.133L154.807,435.133L278.932,559.258L403.056,435.133L333.323,435.133ZM124.125,156.202L0,280.326L124.125,404.451L124.125,156.202Z')","path('M156.202,114.125L280.326,-10L404.451,114.125L331.929,114.125L331.929,229.881L211.988,229.881C221.751,217.329,227.329,201.988,227.329,186.647L227.329,114.125L156.202,114.125ZM446.528,404.451L570.652,280.326L446.528,156.202L446.528,404.451ZM333.323,445.528L333.323,366.032C333.323,353.48,336.113,342.323,341.691,331.166L343.086,328.377L227.329,328.377L227.329,444.133L154.807,444.133L278.932,568.258L403.056,444.133L333.323,444.133ZM114.125,156.202L-10,280.326L114.125,404.451L114.125,156.202Z')","path('M156.202,124.125L280.326,0L404.451,124.125L331.929,124.125L331.929,239.881L211.988,239.881C221.751,227.329,227.329,211.988,227.329,196.647L227.329,124.125L156.202,124.125ZM436.528,404.451L560.652,280.326L436.528,156.202L436.528,404.451ZM333.323,436.528L333.323,357.032C333.323,344.48,336.113,333.323,341.691,322.166L343.086,319.377L227.329,319.377L227.329,435.133L154.807,435.133L278.932,559.258L403.056,435.133L333.323,435.133ZM124.125,156.202L0,280.326L124.125,404.451L124.125,156.202Z')"],e:[[1,0.5,0,0.5,1],[1,0.5,0,0.5,1],[0]]}],
            {autoremove:false}).range(0,4000).loop(true);
            if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause()})(KeyshapeJS);

            
        }, 5500);
        
        setTimeout(function() {
            audio.pause();
            $('.breathe').addClass('hide');
            $('.arrows-360').removeClass('hide');

            $('.block1 .video-js canvas').on('touchstart', function() {
                $('.arrows-360').addClass('hide');
            });

            setTimeout(function() {
                $('.go-to-block2').removeClass('hide');
            }, 6000);
        }, 14100);
    });

    $('.arrows-360').on('click', function() {
        $('.arrows-360').addClass('hide');
    });

    $('.arrows-360-2').on('click', function() {
        $('.arrows-360-2').addClass('hide');
    });

    $('.go-to-block2').click(function(e) {
        e.preventDefault();
        $('.block2').fadeIn();
        // таймер запуска видео2 после появления блока2
        setTimeout(function() {
            $('.block1').remove();
            var video2 = $('.video2').get(0);
            var video2_duration = video2.duration * 1000;
            video2.play();
            video2.volume = 0.1;
            video2.controls = false;
            // таймер работы видео2
            setTimeout(function() {
                video2.pause();
                $('.preloader2').fadeIn();
                $('.block2').remove();
                // $('.block2-5').delay(3000).fadeIn();
                $('.block2-5').delay(3000).removeClass('z1');
            }, video2_duration);
        }, 500);
        
    });

    function isMobile() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    (function(window, videojs) {

        var player = window.player = videojs('videojs-vr-player', {}, function () {
            window.addEventListener("resize", function () {
                var canvas = player.getChild('Canvas');
                if(canvas) canvas.handleResize();
            });
        });

        var width = window.innerWidth;
        var height = window.innerHeight;

        player.mediainfo = player.mediainfo || {};
        player.mediainfo.projection = '360';

        player.width(width), player.height(height);

        // AUTO is the default and looks at mediainfo
        var vr = window.vr = player.vr({
            projection: 'AUTO', 
            forceCardboard: false, 
            motionControls: true
        });

        $('.btn-breathe').on('click', function() {
            setTimeout(function() {
                player.play();
                player.volume = 0.1;
                vr.camera.position.setY(0);
            }, 14100);
        });

        $('.go-to-block2').one('click', function() {
            player.pause();
        });
    }(window, window.videojs));

    $('.play-video360-2').on('click', function() {
        $(this).addClass('hide');
        $('.arrows-360-2').removeClass('hide');

        $('.block2-5 .video-js canvas').on('touchstart', function() {
            $('.arrows-360-2').addClass('hide');
        });

        setTimeout(function() {
            $('.go-to-block3').removeClass('hide');
        }, 10000);
    });

    (function(window, videojs2) {

        var player2 = window.player2 = videojs('videojs-vr-player2', {}, function () {
            window.addEventListener("resize", function () {
                var canvas = player2.getChild('Canvas');
                if(canvas) canvas.handleResize();
            });
        });

        var width = window.innerWidth;
        var height = window.innerHeight;

        player2.mediainfo = player2.mediainfo || {};
        player2.mediainfo.projection = '360';

        player2.width(width), player2.height(height);

        // AUTO is the default and looks at mediainfo
        var vr2 = window.vr2 = player2.vr({
            projection: 'AUTO', 
            forceCardboard: false, 
            motionControls: true
        });

        $('.play-video360-2').on('click', function() {
            player2.play();
            player2.volume = 0.1;
            vr.camera.position.setY(0);
        });

        $('.go-to-block3').on('click', function() {
            player2.pause();

            $('.block3').fadeIn();
            var video3 = $('.video3').get(0);
            var video3_duration = video3.duration * 1000;
            video3.play();
            video3.volume = 0.1;
            video3.controls = false;

            document.getElementById('video3').addEventListener('ended', myHandler, false);
            function myHandler(e) {
                video3.pause();
                $('.block3').remove();
                $('.block2-5').remove();
                $('.block4').fadeIn();
            }
            // таймер работы видео3
            // setTimeout(function() {
            //     video3.pause();
            //     $('.block3').remove();
            //     $('.block2-5').remove();
            //     $('.block4').fadeIn();
            // }, video3_duration);
        });
    }(window, window.videojs2));

    $('.go-to-block5').click(function(e) {
        e.preventDefault();
        $('.block5').fadeIn();
        $('.block4').remove();

        $('.video-slider').slick({
            lazyLoad: 'ondemand',
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });

    if($('.video').length) {
        $('.video-overlay').click(function() {
            var overlay = $(this);
            var vid = overlay.next('.video').get(0);
            vid.volume = 0.1;
            vid.controls = false;

            play(overlay, vid);

            function play(overlay, vid) { 
                if (vid.paused){
                    vid.play(); 
                    overlay.addClass('o');
                } else {
                    vid.pause(); 
                    overlay.removeClass('o');
                }
            }
        });
    }
});