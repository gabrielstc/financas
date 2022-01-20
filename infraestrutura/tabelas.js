class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarDespesas()
        this.criarReceitas()
    }

    criarDespesas() {
        const sql = "CREATE TABLE IF NOT EXISTS `despesas` (`iddespesas` int NOT NULL AUTO_INCREMENT, `descricao` varchar(45) NOT NULL, `valor` float NOT NULL, `data` date NOT NULL, PRIMARY KEY (`iddespesas`), UNIQUE KEY `iddespesas_UNIQUE` (`iddespesas`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Despesas criada com sucesso')
            }
        })
    }

    criarReceitas() {
        const sql = "CREATE TABLE IF NOT EXISTS `receitas` ( `idreceitas` int unsigned NOT NULL AUTO_INCREMENT, `descricao` varchar(45) NOT NULL, `valor` float NOT NULL, `data` date NOT NULL, PRIMARY KEY (`idreceitas`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci; "

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Receitas criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas