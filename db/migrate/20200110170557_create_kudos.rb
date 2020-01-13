class CreateKudos < ActiveRecord::Migration[5.2]
  def change
    create_table :kudos do |t|
      t.integer :user_id, null: false
      t.integer :activity_id, null: false
      t.timestamps
    end
    
    add_index :kudos, :user_id
    add_index :kudos, [:activity_id, :user_id], unique: true
  end
end
