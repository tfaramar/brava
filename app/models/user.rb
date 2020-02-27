class User < ApplicationRecord

    validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true 
    validates :password, length: { minimum: 8 }, allow_nil: true

    has_many :activities, dependent: :destroy
    has_many :kudos, dependent: :destroy
    has_many :routes

    has_many :following_users,
        class_name: 'Follow',
        foreign_key: :user_id,
        primary_key: :id

    has_many :followed_users,
        class_name: 'Follow',
        foreign_key: :follower_id,
        primary_key: :id

    has_many :followees,
        through: :followed_users

    has_many :followers,
        through: :following_users

    has_one_attached :photo

    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
