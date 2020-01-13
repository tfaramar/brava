class Kudo < ApplicationRecord
    validates :user_id, :activity_id, presence: true

    belongs_to :user
    belongs_to :activity
end

