let image = document.getElementById("image");
        let colors = document.getElementById("color-picker");
        let colorPicker = document.querySelectorAll(".clr");
        
        function imageShow(str) {
            image.src = str
        }

        function colorName(str) {
            colors.innerHTML = str;
        }
