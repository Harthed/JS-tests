<!DOCTYPE html>
<html>
<head>
   <title> Try It Yourself </title>
</head>
<body>
   <img src="images/sunflower.png" id="image" />
   <button type="button" onclick="myFunc()"> Change Image </button>

   <script>
      function myFunc() {
         document.getElementById("image").src = "images/star.png";
      }
   </script>
</body>
</html>
