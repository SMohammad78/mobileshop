<?php

$products = file_get_contents(__DIR__ . DIRECTORY_SEPARATOR . 'db' . DIRECTORY_SEPARATOR . 'products.json');

if (!isset($_GET['id'])) {
    die($products);
}

$products = json_decode($products);

if (!isset($products->items[$_GET['id']])) {
    die(json_encode([
        'ok' => false,
        'message' => 'product not found'
    ]));
}

die(json_encode([
    'ok' => true,
    'details' => $products->items[$_GET['id']]
]));