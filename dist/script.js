   // Function to toggle dropdown
   function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');
}

// Add event listeners to dropdown toggles
document.querySelectorAll('[data-dropdown-toggle]').forEach(function (dropdownToggle) {
    dropdownToggle.addEventListener('click', function () {
        var dropdownId = this.getAttribute('data-dropdown-toggle');
        toggleDropdown(dropdownId);
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });
});


const mobileMenuToggle = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
const navbarDropdown = document.getElementById('navbar-dropdown');

mobileMenuToggle.addEventListener('click', () => {
    const isExpanded = navbarDropdown.getAttribute('aria-expanded') === 'true' || false;
    navbarDropdown.classList.toggle('hidden', !isExpanded);
    navbarDropdown.setAttribute('aria-expanded', String(!isExpanded));
});

var glide01 = new Glide('.glide-01', {
    type: 'carousel',
    focusAt: 'center',
    perView: 3,
    autoplay: 3000,
    animationDuration: 700,
    gap: 24,
    classes: {
        activeNav: '[&>*]:bg-slate-700',
    },
    breakpoints: {
        1024: {
            perView: 2
        },
        640: {
            perView: 1
        }
    },
});

glide01.mount();


// photo upload

function previewPhoto(event) {
    const photoPreview = document.getElementById('photoPreview');
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        photoPreview.style.backgroundImage = `url(${e.target.result})`;
        photoPreview.textContent = ''; // Clear the text content
    }
    reader.readAsDataURL(file);
}

function previewSignature(event) {
    const signaturePreview = document.getElementById('signaturePreview');
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        signaturePreview.style.backgroundImage = `url(${e.target.result})`;
        signaturePreview.textContent = ''; // Clear the text content
    }
    reader.readAsDataURL(file);
}

// zoome in image 
// JavaScript to handle image click and display zoomed image
var modal = document.getElementById("myModal");
var images = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var closeBtn = document.getElementsByClassName("close")[0];

for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

// Close the modal when the close button is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Function to open the modal and display the clicked image
function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
