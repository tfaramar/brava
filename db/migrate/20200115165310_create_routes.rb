class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.integer :sport, null: false
      t.text :coordinates, null: false
      t.timestamps
    end

    add_index :routes, :user_id
    add_index :routes, :sport
  end
end
