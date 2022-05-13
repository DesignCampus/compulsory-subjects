
document.addEventListener("DOMContentLoaded", function () {

    // モーダルの表示
    const openTriggers = document.querySelectorAll('.js-modal-open');

    // 基本
    for (var i = 0; i < openTriggers.length; i++) {
        openTriggers[i].addEventListener('click', function (e) {
            e.preventDefault();
            openModal();
        });
    }

    /**
     * 基本の繰り返しを今っぽく書くと
     */
    // openTriggers.forEach(trigger => {
    //     trigger.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         openModal();
    //     });
    // });

    function openModal() {
        const modal = document.querySelector('#js-modal');
        let elem = document.createElement("div");
        elem.classList.add("overlay", "js-modal-close");
        modal.before(elem);
        modal.dataset.state = 'visible';
    }
    // モーダルの非表示
    const closeTrigger = document.querySelector('#js-modal-close');
    closeTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal();
    });

    function closeModal() {
        const modal = document.querySelector('#js-modal');
        const overlay = document.querySelector('.overlay');
        modal.dataset.state = 'hidden';
        overlay.remove();
    }
        

    /**
     * ページのトップに戻る
     */
    const pagetopBtn = document.querySelector('#js-backToTop');
    pagetopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            console.log('scrolled' + window.scrollY);
            pagetopBtn.classList.add('is-show');
        } else {
            console.log('not scrolled' + window.scrollY);
            pagetopBtn.classList.remove('is-show');
        }
    });


});


