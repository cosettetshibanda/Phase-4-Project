class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :stars
      t.text :summary
      t.integer :user_id
      t.integer :carseat_id

      t.timestamps
    end
  end
end
