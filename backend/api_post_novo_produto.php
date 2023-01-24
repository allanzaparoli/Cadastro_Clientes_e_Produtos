<?php
require_once('preflight.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once 'db_connect.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $requestData = json_decode(file_get_contents('php://input'), true);
    $nome = $requestData['nome'];
    $descricao = $requestData['descricao'];
    $versao = $requestData['versao'];

    $query = 'INSERT INTO produtos (nome, descricao, versao) VALUES (:nome, :descricao, :versao)';
    $stmt = $pdo->prepare($query);
    $stmt->bindValue(':nome', $nome);
    $stmt->bindValue(':descricao', $descricao);
    $stmt->bindValue(':versao', $versao);
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
