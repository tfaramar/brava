class Follow < ApplicationRecord
    validates :user_id, :follower_id, presence: true

    belongs_to :followee,
        class_name: 'User',
        foreign_key: :user_id,
        primary_key: :id

    belongs_to :follower,
        class_name: 'User',
        foreign_key: :follower_id,
        primary_key: :id
end
