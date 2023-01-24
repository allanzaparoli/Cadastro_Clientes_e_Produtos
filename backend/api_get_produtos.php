<?php
require_once('preflight.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once('db_connect.php');

$query = 'SELECT * FROM produtos';
$stmt = $pdo->prepare($query);
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

$json = json_encode($results);

echo $json;
?>