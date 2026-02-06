function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}





(() => {
    window.onload = function () {
        const loadingAnime = document.getElementById("loading");
        const albumTitle = document.querySelector('.album-title');
        const songTitle = document.querySelectorAll('.album-song--title');
        const albumContainer = document.querySelector('.album-flexbox');
        const linksFooter = document.querySelectorAll('.song-credit--link-streaming');
        const headerLogo = document.querySelector('.header-image');
        const header = document.querySelector('.header-container');
        const headerButton = document.querySelector('.button-toggle-dark');
        const songs = document.querySelector('.song-container');
        const footer = document.querySelector('.footer-container');
        const menuNav = document.querySelector('.menu-nav-container');
        const $songss = document.getElementById('js-songs');
        const $top = $songss.querySelectorAll('[data-top]');

        




        


        setTimeout(() => {
            // console.log("5 秒待ちました。");
            loadingAnime.classList.add("is-loaded--opening");

            header.classList.add("is-loaded-header");
            headerButton.classList.add("is-loaded-header");
            songs.classList.add("is-loaded-songs");
            footer.classList.add("is-loaded-footer");
            menuNav.classList.add("is-loaded-nav");

            albumTitle.classList.add("is-loaded-title");
            for (let i = 0; i < 10; i++) {
                songTitle[i].classList.add("is-loaded-songs");
            };
            for (let i = 0; i < 5; i++) {
                linksFooter[i].classList.add("is-loaded-links");
            }
            albumContainer.classList.add("is-loaded-album-contaier");
            headerLogo.classList.add('is-loaded-header');


            var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            ];
            var a = arr.length;

            //シャッフルアルゴリズム
            while (a) {
                var j = Math.floor(Math.random() * a);
                var t = arr[--a];
                arr[a] = arr[j];
                arr[j] = t;
            }
            let index_r = 0;
            let rand_temp = 0;
            let rand_temp_temp = 0;

            setTimeout(() => {
                window.setInterval(function () {
                    let index_k = 0;
                    while (index_k < $top.length) {
                        $top[index_k].classList.remove("is-color-red");
                        $top[index_k].classList.remove("is-color-blue");
                        $top[index_k].classList.remove("is-color-gray");
                        index_k++;
                    }


                    let rand = (arr[index_r % 10] + getRandomInt(3)) % 10;
                    rand_temp = rand;
                    if (rand == rand_temp_temp) {
                        rand = (rand + 1) % 10;
                    }
                    rand_temp_temp = rand_temp;

                    index_r++;

                    // console.log(rand);
                    let rand_color = getRandomInt(3);
                    if (rand_color == 0) {
                        $top[rand].classList.add("is-color-red");
                    } else if (rand_color == 1) {
                        $top[rand].classList.add("is-color-blue");
                    } else if (rand_color == 2) {
                        $top[rand].classList.add("is-color-gray");
                    }

                    // console.log('5 seconds!');
                }, 2000);
            }, "3000");




        }, 2000);


    };

    document.addEventListener("DOMContentLoaded", () => {
        const $thumb = document.getElementById('js-bottom-songs');
        const $title = $thumb.querySelectorAll('[data-title]');
        const $sideBar = $thumb.querySelectorAll('[data-side]');

        const $songss = document.getElementById('js-songs');
        const $page = $songss.querySelectorAll('[data-page]');
        const $top = $songss.querySelectorAll('[data-top]');

        const $doc = document;
        const $songs = $doc.getElementById('js-songs');
        const $credit = $songs.querySelectorAll('[data-credit]');
        const $lyrics = $songs.querySelectorAll('[data-lyrics]');
        const $number = $songs.querySelectorAll('[data-number]');

        const $linksSec = document.getElementById("js-footer-links");
        const $links = $linksSec.querySelectorAll('[data-links]');

        //リンク
        var AppleMusicLinks = new Array(
            "https://music.apple.com/jp/artist/rewindflash/1833133652",
            "https://music.apple.com/jp/artist/rewindflash/1833133652",
            "https://music.apple.com/jp/artist/rewindflash/1833133652",
            "https://music.apple.com/jp/artist/rewindflash/1833133652",
            "https://music.apple.com/jp/artist/rewindflash/1833133652",
            "https://music.apple.com/jp/artist/rewindflash/1833133652",
            "https://music.apple.com/jp/artist/rewindflash/1833133652",
            "https://music.apple.com/jp/artist/rewindflash/1833133652",
            "https://music.apple.com/jp/artist/rewindflash/1833133652,
            "https://music.apple.com/jp/artist/rewindflash/1833133652",
            "https://music.apple.com/jp/artist/rewindflash/1833133652",
        )
        var SpotifyLinks = new Array(
            "https://open.spotify.com/intl-ja/album/2vUuGV0Cj1ZSGoY12DCEpM",
            "https://open.spotify.com/intl-ja/track/4wysDnFYwU7onncyj7wCfu",
            "https://open.spotify.com/intl-ja/track/387MsQXGERnaSsODGC6pl2",
            "https://open.spotify.com/intl-ja/track/5p8UOtK2zW96dh2Ptkxbat",
            "https://open.spotify.com/intl-ja/track/5rnwFd9mK7UTOKtNE7200I?",
            "https://open.spotify.com/intl-ja/track/6WDXPOHh1yeFc13kqwrRey",
            "https://open.spotify.com/intl-ja/track/1iOEJlNJ3hMc6Q7ejuAjDi",
            "https://open.spotify.com/intl-ja/track/34h9VQamrrSANkXhbcxr7B",
            "https://open.spotify.com/intl-ja/track/0xAuks5AYhBKSVyd4UrXo0",
            "https://open.spotify.com/intl-ja/track/5ZLv08ZF648xvwi4PXgo85",
            "https://open.spotify.com/intl-ja/track/1IevDKgAwxXv4BEO8RgOKf",
            "#",
        )
        var YoutubeLinks = new Array(
            "https://www.youtube.com/@Rewind-Flash",
            "https://youtu.be/Wx_t2c6pTbY",
            "https://www.youtube.com/@Rewind-Flash",
            "https://www.youtube.com/@Rewind-Flash",
            "https://www.youtube.com/@Rewind-Flash",
            "https://www.youtube.com/@Rewind-Flash",
            "https://www.youtube.com/@Rewind-Flash",
            "https://www.youtube.com/@Rewind-Flash",
            "https://youtu.be/1dLvjjzC2zo",
            "https://www.youtube.com/@Rewind-Flash",
            "https://www.youtube.com/@Rewind-Flash",
        )
        var SoundCloudLinks = new Array(
            "https://soundcloud.com/rewindflash/sets/rewindmemory",
            "https://soundcloud.com/volta342/dopamine_vri",
            "https://soundcloud.com/icesawder/crossover",
            "https://soundcloud.com/volta342/resillixnce",
            "https://soundcloud.com/tanakano/dairou-tanaka-letsu-execution",
            "https://soundcloud.com/volta342/agene",
            "https://soundcloud.com/volta342/letsu_purple",
            "https://soundcloud.com/icesawder/luvmyself",
            "https://soundcloud.com/volta342/resett",
            "https://soundcloud.com/volta342/rf26",
            "https://soundcloud.com/mylta/repeat-again"
        )
        var BandCampLinks = new Array(
            "https://rewindflash.bandcamp.com/album/rewindmemory",
            "https://rewindflash.bandcamp.com/track/dopamine-2",
            "https://rewindflash.bandcamp.com/track/crossover",
            "https://rewindflash.bandcamp.com/track/resillixnce",
            "https://rewindflash.bandcamp.com/track/execution",
            "https://rewindflash.bandcamp.com/track/gene",
            "https://rewindflash.bandcamp.com/track/purple-2",
            "https://rewindflash.bandcamp.com/track/luvmyself",
            "https://rewindflash.bandcamp.com/track/resett",
            "https://rewindflash.bandcamp.com/track/26",
            "https://rewindflash.bandcamp.com/track/feat-letsu",
        )

        //initialize
        $links[0].setAttribute('href', AppleMusicLinks[0]);
        $links[1].setAttribute('href', SpotifyLinks[0]);
        $links[2].setAttribute('href', YoutubeLinks[0]);
        $links[3].setAttribute('href', SoundCloudLinks[0]);
        $links[4].setAttribute('href', BandCampLinks[0]);
        
        
        // console.log(SoundCloudLinks[0]);

        const titleClick = (e) => {
            const $this = e.currentTarget;
            const targetValue = $this.dataset.title;

            swiper.slideTo(targetValue);
            $links[0].setAttribute('href', AppleMusicLinks[targetValue]);
            $links[1].setAttribute('href', SpotifyLinks[targetValue]);
            $links[2].setAttribute('href', YoutubeLinks[targetValue]);
            $links[3].setAttribute('href', SoundCloudLinks[targetValue]);
            $links[4].setAttribute('href', BandCampLinks[targetValue]);

            let index_n = 0;
            while (index_n < $title.length) {
                $title[index_n].classList.remove('is-active');
                index_n++;
            }
            $title[targetValue].classList.add('is-active');
        }

        const topClick = (e) => {
            const $this = e.currentTarget;
            const targetValue = $this.dataset.top;

            swiper.slideTo(targetValue);

        }

        const swiper = new Swiper(".js-mvSlider", {
            speed: 400,
            spaceBetween: 100,
            loop: false,

            pagination: {
                el: ".js-mvSlider .swiper-pagination",
            },

            navigation: {
                nextEl: ".js-mvSlider .swiper-button-next",
                prevEl: ".js-mvSlider .swiper-button-prev",
            },




        });

        swiper.on('slideChange', function () {
            // console.log('slide changed');
            let index_n = 0;
            while (index_n < $title.length) {
                $title[index_n].classList.remove('is-active');
                index_n++;
            }
            let index_y = 0;
            while (index_y < $sideBar.length) {
                $sideBar[index_y].classList.remove('is-visible');
                index_y++;
            }
            let index_p = 0;
            while (index_p < $page.length) {
                $page[index_p].classList.remove('is-visible');
                index_p++;
            }
            let index = 0;
            while (index < $credit.length) {
                $credit[index].classList.add('is-visible');
                $lyrics[index].classList.remove('is-visible');
                index++;
            }
            let index_m = 0;
            while (index_m < $number.length) {
                $number[index_m].classList.add('is-visible');
                index_m++;
            }


            const sliderIndex = swiper.realIndex;
            $title[sliderIndex].classList.add('is-active');
            $page[sliderIndex].classList.add('is-visible');
            
            $links[0].setAttribute('href', AppleMusicLinks[swiper.realIndex]);
            $links[1].setAttribute('href', SpotifyLinks[swiper.realIndex]);
            $links[2].setAttribute('href', YoutubeLinks[swiper.realIndex]);
            $links[3].setAttribute('href', SoundCloudLinks[swiper.realIndex]);
            $links[4].setAttribute('href', BandCampLinks[swiper.realIndex]);

            if (sliderIndex != 0) {
                $sideBar[0].classList.add('is-visible');
                $sideBar[1].classList.add('is-visible');
                // console.log('aaaaa')
            }




        });

        let index_t = 0;
        while (index_t < $title.length) {
            $title[index_t].addEventListener('click', (e) => titleClick(e));
            index_t++;
        }

        let index_k = 0;
        while (index_k < $top.length) {
            $top[index_k].addEventListener('click', (e) => topClick(e));
            index_k++;
        }

    });


})();

(() => {

    // ヘッダーメニュー
    const menuButtonContainer = document.querySelector('.header-items');
    const menuListItems = document.querySelector('.menu-nav-container');
    const menuClose = document.querySelector('.menu-nav-close');

    menuButtonContainer.addEventListener('click', () => {
        menuListItems.classList.add('is-visible');
    });

    menuClose.addEventListener('click', () => {
        menuListItems.classList.remove('is-visible');
    })




    // クレジットと歌詞のトグル
    const $doc = document;
    const $songs = $doc.getElementById('js-songs');
    const $credit = $songs.querySelectorAll('[data-credit]');
    const $lyrics = $songs.querySelectorAll('[data-lyrics]');
    const $number = $songs.querySelectorAll('[data-number]');

    const init = () => {
        let index_f = 0;
        while (index_f < $credit.length) {
            $credit[index_f].classList.add('is-visible');
            index_f++;

        }
        let index_l = 0;
        while (index_l < $number.length) {
            $number[index_l].classList.add('is-visible');
            index_l++;
        }
    };
    init();
    // console.log($credit);

    const creditClick = (e) => {

        const $this = e.currentTarget;
        const targetValue = $this.dataset.credit;

        // console.log('a', targetValue);

        $credit[targetValue].classList.remove('is-visible');
        $lyrics[targetValue].classList.add('is-visible');
        $number[targetValue].classList.remove('is-visible');
    }

    const lyricsClick = (e) => {
        const $this = e.currentTarget;
        const targetValue = $this.dataset.lyrics;

        // console.log('b', targetValue);

        $lyrics[targetValue].classList.remove('is-visible');
        $credit[targetValue].classList.add('is-visible');
        $number[targetValue].classList.add('is-visible');


    }



    let index = 0;
    while (index < $credit.length) {
        $credit[index].addEventListener('click', (e) => creditClick(e));
        $lyrics[index].addEventListener('click', (e) => lyricsClick(e));
        index++;
    }





})();




