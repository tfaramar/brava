class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            Follow.create!(
                user_id: 1,
                follower_id: @user.id
            )
            @user.photo.attach(io: File.open("/Users/tatianafaramarzi/Documents/strava_clone_userimages/default-avatar.jpg"), filename: "default-avatar.jpg")
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def index
        @users = User.all
        render :index
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :photo)
    end 
end
