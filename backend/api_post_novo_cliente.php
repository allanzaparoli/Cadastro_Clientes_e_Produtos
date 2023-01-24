<?php
require_once('preflight.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once 'db_connect.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $requestData = json_decode(file_get_contents('php://input'), true);
    $cnpj = $requestData['cnpj'];
    $endereco = $requestData['endereco'];
    $razao_social = $requestData['razao_social'];
    $nome_fantasia = $requestData['nome_fantasia'];
    $cep = $requestData['cep'];
    $email = $requestData['email'];
    $telefone = $requestData['telefone'];

    $query = 'INSERT INTO clientes (cnpj, endereco, razao_social, nome_fantasia, cep, email, telefone) VALUES (:cnpj, :endereco, :razao_social, :nome_fantasia, :cep, :email, :telefone)';
    $stmt = $pdo->prepare($query);
    $stmt->bindValue(':cnpj', $cnpj);
    $stmt->bindValue(':endereco', $endereco);
    $stmt->bindValue(':razao_social', $razao_social);
    $stmt->bindValue(':nome_fantasia', $nome_fantasia);
    $stmt->bindValue(':cep', $cep);
    $stmt->bindValue(':email', $email);
    $stmt->bindValue(':telefone', $telefone);
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
