<?php
require_once('preflight.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once 'db_connect.php';

$query = 'SELECT * FROM clientes JOIN clientes_produtos ON clientes_produtos.id_cliente = clientes.id JOIN produtos ON clientes_produtos.id_produto = produtos.id';
$stmt = $pdo->prepare($query);
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

$json = json_encode($results);

echo $json;
?>
