class Route < ApplicationRecord
    validates :title, :user_id, :sport, :coordinates, :est_time, :distance, presence: true
    validates :sport, inclusion: { in: [1, 2, 3] }

    belongs_to :user
    has_many :activities

end
