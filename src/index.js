import Base from 'magnet-core/dist/base';
import DBMigrate from 'db-migrate';
import defaultConfig from './config/migration';

export default class Migrate extends Base {
  async setup() {
    let config = Object.assign(defaultConfig, this.config.migration);
    this.app.dbmigrate = DBMigrate.getInstance(true, config);
  }

  async start() {
    try {
      await this.app.dbmigrate.up( Number.MAX_VALUE, null);

      // await this.app.dbmigrate.down( Number.MAX_VALUE, null);
    } catch (err) {
      this.log.error(err);
      throw err;
    }
  }
}
