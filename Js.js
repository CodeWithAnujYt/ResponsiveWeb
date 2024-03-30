       function showContent(sectionId) {
        var sections = document.getElementsByClassName("content-section");
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = "none";
        }
        document.getElementById(sectionId).style.display = "block";
    }
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.Introduction').classList.add('animate');
    });