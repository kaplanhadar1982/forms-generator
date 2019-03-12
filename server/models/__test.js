const TestItemDb = require('../data/test');

module.exports = class TestItem {
  constructor(f1,f2) {
    this.id = null;
    this.field1 = f1;
    this.field2 = f2;
  };

  async save() {
    const testItemDb = new TestItemDb({'field1':this.field1,'field2':this.field2});
    let newTestItemDb = await testItemDb.save();
    this.id = newTestItemDb._id;
    return this;
  };

  static async fetchAll() {
    return await TestItemDb.find();
  };

  static async findById(id) {
    return await TestItemDb.findById(id);
  };

  static async findByIdAndRemove(id) {
    return await TestItemDb.findByIdAndRemove(id);
  };
};