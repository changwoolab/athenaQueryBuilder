export class SimpleAthenaQueryBuilder {
  protected selects: string[] = [];
  protected wheres: string[] = [];
  protected limit: number;

  getQuery(): string {
    let sql = "";
    sql += this.createSelectExp();
    sql += this.createWhereExp();
    sql += this.createLimitExp();
    sql = sql.trim();
    return sql;
  }

  protected createSelectExp() {}

  protected createWhereExp() {}

  protected createLimitExp() {}
}

const Athena = new SimpleAthenaQueryBuilder();
