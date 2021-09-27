const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "users", // Will use table name `category` as default behaviour.
  // tableName: "user", // Optional: Provide `tableName` property to override the default behaviour for table name.
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    first_name: {
      type: "varchar",
      nullable: false,
      default: "",
    },
    last_name: {
      type: "varchar",
      nullable: false,
      default: "",
    },
    email: {
      type: "varchar",
      nullable: false,
      default: "",
    },
    phone: {
      type: "varchar",
      nullable: false,
      default: "",
    },
    address: {
      type: "varchar",
      default: "",
    },
  },
});
