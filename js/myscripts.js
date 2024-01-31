document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector('.carousel-testimony');
    var detailsContainer = document.getElementById('certificateDetails');
    var headingContainer = document.getElementById('certificateHeading');
    var currentIndex = 2;
    var carouselItems = document.querySelectorAll('.carousel-testimony .item');

    function showCertificateDetails(index) {
        var details = carouselItems[index].getAttribute('data-details');
        detailsContainer.innerHTML = '<p>' + details + '</p>';

        var heading = "Explore Certificate " + carouselItems[index].getAttribute('data-explore') + "";
        headingContainer.innerText = heading;
    }
    function hold(){
        
        showCertificateDetails(currentIndex);
    }
    function nextCertificate() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCertificateDetails(currentIndex);
    }

    function prevCertificate() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showCertificateDetails(currentIndex);
    }

    var hammertime = new Hammer(carousel);

    hammertime.on('swiperight', function () {
        prevCertificate();
    });

    hammertime.on('swipeleft', function () {
        nextCertificate();
    });
    hammertime.on('hold', function () {
        nextCertificate();
    });

    // Initial show
    showCertificateDetails(currentIndex);

    // Automatically change certificate details every 5 seconds
    setInterval(nextCertificate, 5000);
});
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }