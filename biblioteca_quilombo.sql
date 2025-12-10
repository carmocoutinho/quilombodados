-- Arquivo: biblioteca_quilombo.sql

CREATE DATABASE QuilomboDadosDB;
USE QuilomboDadosDB;

CREATE TABLE obras (
    id_obra INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(150),
    ano_publicacao INT,
    tipo_obra ENUM('Tese', 'Dissertação', 'Artigo', 'Livro') NOT NULL,
    resumo TEXT,
    palavras_chave VARCHAR(255),
    instituicao VARCHAR(100), -- Ex: UFPA, UEPA
    link_acesso VARCHAR(255),
    comunidade_foco VARCHAR(100) -- Ex: Abacatal, Erepecuru
);

-- Exemplo de inserção
INSERT INTO obras (titulo, autor, ano_publicacao, tipo_obra, instituicao, comunidade_foco) 
VALUES ('Territorialidades em Conflito', 'Silva, Maria', 2021, 'Dissertação', 'UFPA', 'Quilombo do Abacatal');