<?php
$output ='';

$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

$output .= 'Имя: '.$name.' ';
$output .= 'Телефон: '.$phone.' ';
$output .= 'Комментарий: '.$comment.' ';

echo $output;

