class Route < ApplicationRecord
    validates :title, :user_id, :sport, :coordinates, :est_time, :distance, presence: true
    validates :sport, inclusion: { in: [1, 2, 3] }

    belongs_to :user
    has_many :activities

    def time
        total_seconds = self.est_time
        hours = (total_seconds / 3600).floor()
        total_seconds = total_seconds % 3600
        minutes = (total_seconds / 60).floor()
        seconds = total_seconds % 60
        "#{hours}:#{minutes}:#{seconds}"
    end

end
