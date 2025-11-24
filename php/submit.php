<?php
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$comment = $_POST['comment'] ?? '';
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>شكراً</title>

<style>
    body {
        font-family: "Tajawal", sans-serif;
        text-align: center;
        background: #ffffff;
        margin-top: 80px;
    }
    .thanks {
        background: #dbdbdb;
        padding: 20px;
        width: 300px;
        margin: auto;
        border-radius: 10px;
        font-size: 18px;
    }
</style>
</head>

<body>

<div class="thanks">
    شكراً لك يا <?php echo htmlspecialchars($name); ?> ♥<br>
    تم استلام رأيك بنجاح
</div>

</body>
</html>