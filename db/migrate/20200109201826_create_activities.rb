class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.integer :user_id, null: false
      t.integer :type, null: false
      t.string :title, null: false
      t.float :distance, null: false, default: 0
      t.float :elevation, null: false, default: 0
      t.integer :elapsed_time, null: false, default: 0
      t.integer :route_id
      t.boolean :personal_record, default: false
      t.timestamp :start_time, null: false
      t.timestamps
    end

    add_index :activities, :type
    add_index :activities, :user_id
  end
end
