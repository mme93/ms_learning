package de.mameie.databasemanager.sql.server.database.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SqlLoginTable {

    private String serverName;
    private String databaseName;
    private String tableName;

}
