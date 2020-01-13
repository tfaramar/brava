class Activity < ApplicationRecord

    validates :personal_record, inclusion: { in: [true, false] }
    validates :user_id, :sport, :title, :distance, :elevation, :elapsed_time, :start_time, presence: true

    belongs_to :user
    has_many :kudos, dependent: :destroy
    has_many :kudoers,
        through: :kudos,
        source: :user

end
