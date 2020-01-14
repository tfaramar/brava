class Activity < ApplicationRecord

    validates :personal_record, inclusion: { in: [true, false] }
    validates :user_id, :sport, :title, :distance, :elevation, :elapsed_time, :start_time, presence: true

    belongs_to :user
    has_many :kudos, dependent: :destroy
    has_many :kudoers,
        through: :kudos,
        source: :user

    def time
        totalSeconds = self.elapsed_time
        hours = (totalSeconds / 3600).floor()
        totalSeconds = totalSeconds % 3600
        minutes = (totalSeconds / 60).floor()
        seconds = totalSeconds % 60
        "#{hours}:#{minutes}:#{seconds}"
    end

    # def average_speed
    # end

end
