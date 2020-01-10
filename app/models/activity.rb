class Activity < ApplicationRecord

    validates :personal_record, inclusion: { in: [true, false] }
    validates :user_id, :type, :title, :distance, :elevation, :elapsed_time, :personal_record, :start_time, presence: true

    belongs_to :user
end
