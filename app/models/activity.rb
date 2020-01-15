class Activity < ApplicationRecord

    validates :personal_record, inclusion: { in: [true, false] }
    validates :user_id, :sport, :title, :distance, :elevation, :elapsed_time, :start_time, presence: true

    belongs_to :user
    has_many :kudos, dependent: :destroy
    has_many :kudoers,
        through: :kudos,
        source: :user

    def time
        total_seconds = self.elapsed_time
        hours = (total_seconds / 3600).floor()
        total_seconds = total_seconds % 3600
        minutes = (total_seconds / 60).floor()
        seconds = total_seconds % 60
        "#{hours}:#{minutes}:#{seconds}"
    end

    def avg_speed_mph
        distance = self.distance
        total_time = self.elapsed_time
        hours = (total_time.to_f/3600.to_f)
        (distance/hours).round(1)
    end

end
