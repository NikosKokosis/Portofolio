// Accordion functionality
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;

        // If the panel is already open, close it
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            // Close all panels first
            var allPanels = document.querySelectorAll(".panel");
            for (var j = 0; j < allPanels.length; j++) {
                allPanels[j].style.maxHeight = null;
            }

            // Open the clicked panel
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}