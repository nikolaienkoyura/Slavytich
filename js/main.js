$(document).ready(function () {
    renderGallery(1);
    $('.main-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.pagination').jqPagination({
        paged: renderGallery
    });
});

function renderGallery(page) {
    var galleryHtml = '<div class="gallery">';

    for (var i = 0; i < 9; i++) {
        galleryHtml += '' +
            '<div class="gallery-item">' +
                '<img class="gallery-item__img" src="img/gallery/' + (i + (page - 1) * 9) + '.jpg">' +
            '</div>';
    }

    galleryHtml += '</div>';

    $('.gallery-item').off('click', openImagePreview);

    $('.gallery').replaceWith(galleryHtml);

    $('.gallery-item').click(openImagePreview);
}

function openImagePreview(event) {
    var imgSrc = event.target.src;
    var $img = $('<div class="image-preview"></div>')
        .css('background-image', 'url(' + imgSrc + ')');
    var $overlay = $('<div class="image-overlay"></div>')
        .click(closeImagePreview);

    $overlay.append($img);

    $(document.body).append($overlay);
}

function closeImagePreview() {
    this.remove();
}
