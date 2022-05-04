var DataTypes = require("sequelize").DataTypes;
var _adresses = require("./adresses");
var _asociations = require("./asociations");
var _collecte_transaction_lignes = require("./collecte_transaction_lignes");
var _collecte_transactions = require("./collecte_transactions");
var _collectes = require("./collectes");
var _color_products = require("./color_products");
var _colors = require("./colors");
var _dons = require("./dons");
var _employee = require("./employee");
var _images = require("./images");
var _marques = require("./marques");
var _messages = require("./messages");
var _partenaires = require("./partenaires");
var _plastic-types = require("./plastic-types");
var _product_images = require("./product_images");
var _products = require("./products");
var _quartiers = require("./quartiers");
var _recyclable_product_plastic_type = require("./recyclable_product_plastic_type");
var _recyclable_products = require("./recyclable_products");
var _revendeur_products = require("./revendeur_products");
var _revendeurs = require("./revendeurs");
var _super_troc_images = require("./super_troc_images");
var _super_troc_transactions = require("./super_troc_transactions");
var _super_trocs = require("./super_trocs");
var _troc_categories = require("./troc_categories");
var _troc_images = require("./troc_images");
var _troc_transactions = require("./troc_transactions");
var _trocs = require("./trocs");
var _users = require("./users");
var _villes = require("./villes");

function initModels(sequelize) {
  var adresses = _adresses(sequelize, DataTypes);
  var asociations = _asociations(sequelize, DataTypes);
  var collecte_transaction_lignes = _collecte_transaction_lignes(sequelize, DataTypes);
  var collecte_transactions = _collecte_transactions(sequelize, DataTypes);
  var collectes = _collectes(sequelize, DataTypes);
  var color_products = _color_products(sequelize, DataTypes);
  var colors = _colors(sequelize, DataTypes);
  var dons = _dons(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var images = _images(sequelize, DataTypes);
  var marques = _marques(sequelize, DataTypes);
  var messages = _messages(sequelize, DataTypes);
  var partenaires = _partenaires(sequelize, DataTypes);
  var plastic-types = _plastic-types(sequelize, DataTypes);
  var product_images = _product_images(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var quartiers = _quartiers(sequelize, DataTypes);
  var recyclable_product_plastic_type = _recyclable_product_plastic_type(sequelize, DataTypes);
  var recyclable_products = _recyclable_products(sequelize, DataTypes);
  var revendeur_products = _revendeur_products(sequelize, DataTypes);
  var revendeurs = _revendeurs(sequelize, DataTypes);
  var super_troc_images = _super_troc_images(sequelize, DataTypes);
  var super_troc_transactions = _super_troc_transactions(sequelize, DataTypes);
  var super_trocs = _super_trocs(sequelize, DataTypes);
  var troc_categories = _troc_categories(sequelize, DataTypes);
  var troc_images = _troc_images(sequelize, DataTypes);
  var troc_transactions = _troc_transactions(sequelize, DataTypes);
  var trocs = _trocs(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var villes = _villes(sequelize, DataTypes);

  asociations.belongsTo(adresses, { as: "adresse", foreignKey: "adresse_id"});
  adresses.hasMany(asociations, { as: "asociations", foreignKey: "adresse_id"});
  users.belongsTo(adresses, { as: "adresse", foreignKey: "adresse_id"});
  adresses.hasMany(users, { as: "users", foreignKey: "adresse_id"});
  dons.belongsTo(asociations, { as: "association", foreignKey: "association_id"});
  asociations.hasMany(dons, { as: "dons", foreignKey: "association_id"});
  collecte_transactions.belongsTo(collecte_transaction_lignes, { as: "transaction_ligne_collecte_transaction_ligne", foreignKey: "transaction_ligne"});
  collecte_transaction_lignes.hasMany(collecte_transactions, { as: "collecte_transactions", foreignKey: "transaction_ligne"});
  collecte_transactions.belongsTo(collectes, { as: "collecte", foreignKey: "collecte_id"});
  collectes.hasMany(collecte_transactions, { as: "collecte_transactions", foreignKey: "collecte_id"});
  color_products.belongsTo(colors, { as: "color", foreignKey: "color_id"});
  colors.hasMany(color_products, { as: "color_products", foreignKey: "color_id"});
  collectes.belongsTo(employee, { as: "employe", foreignKey: "employe_id"});
  employee.hasMany(collectes, { as: "collectes", foreignKey: "employe_id"});
  product_images.belongsTo(images, { as: "image", foreignKey: "image_id"});
  images.hasMany(product_images, { as: "product_images", foreignKey: "image_id"});
  super_troc_images.belongsTo(images, { as: "image", foreignKey: "image_id"});
  images.hasMany(super_troc_images, { as: "super_troc_images", foreignKey: "image_id"});
  troc_images.belongsTo(images, { as: "image", foreignKey: "image_id"});
  images.hasMany(troc_images, { as: "troc_images", foreignKey: "image_id"});
  recyclable_products.belongsTo(marques, { as: "marque", foreignKey: "marque_id"});
  marques.hasMany(recyclable_products, { as: "recyclable_products", foreignKey: "marque_id"});
  super_trocs.belongsTo(partenaires, { as: "author_partenaire", foreignKey: "author"});
  partenaires.hasMany(super_trocs, { as: "super_trocs", foreignKey: "author"});
  products.belongsTo(plastic-types, { as: "plastic_type", foreignKey: "plastic_type_id"});
  plastic-types.hasMany(products, { as: "products", foreignKey: "plastic_type_id"});
  recyclable_product_plastic_type.belongsTo(plastic-types, { as: "plastic_type", foreignKey: "plastic_type_id"});
  plastic-types.hasMany(recyclable_product_plastic_type, { as: "recyclable_product_plastic_types", foreignKey: "plastic_type_id"});
  color_products.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(color_products, { as: "color_products", foreignKey: "product_id"});
  product_images.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(product_images, { as: "product_images", foreignKey: "product_id"});
  revendeur_products.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(revendeur_products, { as: "revendeur_products", foreignKey: "product_id"});
  recyclable_product_plastic_type.belongsTo(recyclable_products, { as: "recyclable_product", foreignKey: "recyclable_product_id"});
  recyclable_products.hasMany(recyclable_product_plastic_type, { as: "recyclable_product_plastic_types", foreignKey: "recyclable_product_id"});
  revendeur_products.belongsTo(revendeurs, { as: "revendeur", foreignKey: "revendeur_id"});
  revendeurs.hasMany(revendeur_products, { as: "revendeur_products", foreignKey: "revendeur_id"});
  super_troc_images.belongsTo(super_trocs, { as: "super_troc", foreignKey: "super_troc_id"});
  super_trocs.hasMany(super_troc_images, { as: "super_troc_images", foreignKey: "super_troc_id"});
  super_troc_transactions.belongsTo(super_trocs, { as: "super_troc", foreignKey: "super_troc_id"});
  super_trocs.hasMany(super_troc_transactions, { as: "super_troc_transactions", foreignKey: "super_troc_id"});
  trocs.belongsTo(troc_categories, { as: "category_troc_category", foreignKey: "category"});
  troc_categories.hasMany(trocs, { as: "trocs", foreignKey: "category"});
  troc_images.belongsTo(trocs, { as: "troc", foreignKey: "troc_id"});
  trocs.hasMany(troc_images, { as: "troc_images", foreignKey: "troc_id"});
  troc_transactions.belongsTo(trocs, { as: "crediteur_troc", foreignKey: "crediteur"});
  trocs.hasMany(troc_transactions, { as: "troc_transactions", foreignKey: "crediteur"});
  collectes.belongsTo(users, { as: "demande_par_user", foreignKey: "demande_par"});
  users.hasMany(collectes, { as: "collectes", foreignKey: "demande_par"});
  dons.belongsTo(users, { as: "donnateur_user", foreignKey: "donnateur"});
  users.hasMany(dons, { as: "dons", foreignKey: "donnateur"});
  messages.belongsTo(users, { as: "author_user", foreignKey: "author"});
  users.hasMany(messages, { as: "messages", foreignKey: "author"});
  messages.belongsTo(users, { as: "to_user", foreignKey: "to"});
  users.hasMany(messages, { as: "to_messages", foreignKey: "to"});
  super_troc_transactions.belongsTo(users, { as: "debiteur_user", foreignKey: "debiteur"});
  users.hasMany(super_troc_transactions, { as: "super_troc_transactions", foreignKey: "debiteur"});
  troc_transactions.belongsTo(users, { as: "debiteur_user", foreignKey: "debiteur"});
  users.hasMany(troc_transactions, { as: "troc_transactions", foreignKey: "debiteur"});
  trocs.belongsTo(users, { as: "author", foreignKey: "author_id"});
  users.hasMany(trocs, { as: "trocs", foreignKey: "author_id"});
  adresses.belongsTo(villes, { as: "ville", foreignKey: "ville_id"});
  villes.hasMany(adresses, { as: "adresses", foreignKey: "ville_id"});
  quartiers.belongsTo(villes, { as: "ville", foreignKey: "ville_id"});
  villes.hasMany(quartiers, { as: "quartiers", foreignKey: "ville_id"});

  return {
    adresses,
    asociations,
    collecte_transaction_lignes,
    collecte_transactions,
    collectes,
    color_products,
    colors,
    dons,
    employee,
    images,
    marques,
    messages,
    partenaires,
    plastic-types,
    product_images,
    products,
    quartiers,
    recyclable_product_plastic_type,
    recyclable_products,
    revendeur_products,
    revendeurs,
    super_troc_images,
    super_troc_transactions,
    super_trocs,
    troc_categories,
    troc_images,
    troc_transactions,
    trocs,
    users,
    villes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
