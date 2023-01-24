DELIMITER $$
CREATE TRIGGER tr_produtos_delete
BEFORE DELETE ON produtos
FOR EACH ROW
BEGIN
    DECLARE msg VARCHAR(255);
    SELECT COUNT(*) INTO @count FROM clientes_produtos WHERE id_produto = OLD.id;
    IF @count > 0 THEN
        SET msg = CONCAT('Não é possível excluir o produto de ID ', OLD.id, ' pois ele está vinculado a um cliente.');
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = msg;
    END IF;
END$$
DELIMITER ;
