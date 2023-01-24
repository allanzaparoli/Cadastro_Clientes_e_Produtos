DELIMITER $$
CREATE PROCEDURE atualizar_validade_produtos_cliente (IN id_cliente INT, IN nova_validade INT)
BEGIN
    UPDATE clientes_produtos
    SET validade = validade + nova_validade
    WHERE id_cliente = id_cliente;
END$$
DELIMITER ;
