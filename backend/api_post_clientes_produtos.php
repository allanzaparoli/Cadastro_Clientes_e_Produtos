<?php
require_once('preflight.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once 'db_connect.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $requestData = json_decode(file_get_contents('php://input'), true);
    $id_cliente = $requestData['id_cliente'];
    $id_produto = $requestData['id_produto'];
    $validade = $requestData['validade'];

    $query = 'INSERT INTO clientes_produtos (id_cliente, id_produto, validade) VALUES (:id_cliente, :id_produto, :validade)';
    $stmt = $pdo->prepare($query);
    $stmt->bindValue(':id_cliente', $id_cliente);
    $stmt->bindValue(':id_produto', $id_produto);
    $stmt->bindValue(':validade', $validade);
    $stmt->execute();

    if($stmt->rowCount() > 0) {
        http_response_code(201);
        echo json_encode(['message' => 'Data inserted successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Error inserting data']);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
}
?>
