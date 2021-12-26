const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns

    /**
     * 
    * `id`

    * Integer.

    * Doesn't allow null values.

    * Set as primary key.

    * Uses auto increment.

  * `product_id`

    * Integer.

    * References the `Product` model's `id`.

  * `tag_id`

    * Integer.

    * References the `Tag` model's `id`.

     */
     id :{
      type :DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true
    
    },
    product_id: {
      type: Sequelize.INTEGER,
   
      references: {
        // This is a reference to another model
        model: Product,
   
        // This is the column name of the referenced model
        key: 'id',
   
        // This declares when to check the foreign key constraint. PostgreSQL only.
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },

    tag_id: {
      type: Sequelize.INTEGER,
   
      references: {
        // This is a reference to another model
        model: Tag,
   
        // This is the column name of the referenced model
        key: 'id',
   
        // This declares when to check the foreign key constraint. PostgreSQL only.
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
