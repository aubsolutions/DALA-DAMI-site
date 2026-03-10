<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Метод не поддерживается.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/*
  Укажите email получателя заказов.
  Можно поставить несколько адресов через запятую.
*/
$recipientEmail = 'dala.dami.2023@gmail.com';

$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$company = trim($_POST['company'] ?? '');
$delivery = trim($_POST['delivery'] ?? '');
$comment = trim($_POST['comment'] ?? '');
$orderItems = trim($_POST['order_items'] ?? '');
$orderTotal = trim($_POST['order_total'] ?? '');
$language = trim($_POST['language'] ?? '');

if ($name === '' || $phone === '' || $orderItems === '' || $orderItems === 'Корзина пустая') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Заполните обязательные поля и добавьте товары в корзину.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$subject = 'Новый заказ с сайта DALA DAMI';

$bodyLines = [
    'Новый заказ DALA DAMI',
    '------------------------------',
    'Имя: ' . $name,
    'Телефон: ' . $phone,
    'Язык формы: ' . ($language !== '' ? $language : 'Не указан'),
    'Компания: ' . ($company !== '' ? $company : 'Не указана'),
    'Нужна доставка: ' . ($delivery !== '' ? $delivery : 'Не указано'),
    'Комментарий: ' . ($comment !== '' ? $comment : 'Нет'),
    '',
    'Состав заказа:',
    $orderItems,
    '',
    'Итого: ' . ($orderTotal !== '' ? $orderTotal : 'Не указано')
];

$body = implode("\n", $bodyLines);

$headers = [
    'From: DALA DAMI <no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost') . '>',
    'Reply-To: ' . $phone,
    'Content-Type: text/plain; charset=UTF-8'
];

$sent = @mail($recipientEmail, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Не удалось отправить письмо. Проверьте настройки почты на хостинге.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Заказ отправлен.'
], JSON_UNESCAPED_UNICODE);
