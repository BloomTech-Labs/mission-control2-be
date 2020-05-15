const db = require("../../data/db-config.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  findTagsOfProject,
  addTagToProject,
  // removeTagsOfProject,
};

function find() {
  return db("tags");
}

function findById(id) {
  return db("tags").where({ id }).first();
}

function add(tag) {
  return db("tags")
    .insert(tag, "id")
    .then(([id]) => {
      return this.findById(id);
    });
}

function update(id, changes) {
  return db("tags")
    .where({ id })
    .update(changes)
    .then((count) => (count > 0 ? this.findById(id) : null));
}

function remove(id) {
  return db("tags").where({ id }).del();
}

function findTagsOfProject(projectKey) {
  return db("projects as p")
    .where("p.id", projectKey)
    .join("project_tag as pt", "p.id", "pt.projectKey")
    .join("tags as t", "pt.tagKey", "t.id")
    .select("p.name as Project Name", "t.name as Tag Name");
}

function addTagToProject(tagData, projectKey) {
  return db("tags")
    .insert(tagData)
    .then(([tagId]) => {
      return db("project_tag").insert({
        projectKey: projectKey,
        tagKey: tagId,
      });
    });
}
