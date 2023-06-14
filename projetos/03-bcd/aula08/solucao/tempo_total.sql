CREATE VIEW vw_estacionamento AS
SELECT *, 
    TIMESTAMPDIFF(HOUR, entrada, saida) AS tempo_total_em_horas
FROM estacionamento;
SELECT * FROM vw_estacionamento;
