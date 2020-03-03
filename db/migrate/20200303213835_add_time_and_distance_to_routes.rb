class AddTimeAndDistanceToRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :est_time, :integer
    add_column :routes, :distance, :float
  end
end
