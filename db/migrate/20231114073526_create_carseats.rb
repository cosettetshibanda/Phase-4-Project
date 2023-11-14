class CreateCarseats < ActiveRecord::Migration[6.1]
  def change
    create_table :carseats do |t|
      t.string :name
      t.string :mode
      t.integer :expiration
      t.integer :price
      t.string :features
      t.string :img

      t.timestamps
    end
  end
end
