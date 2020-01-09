class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['The email or password did not match. Please try again.'], status: 401
        else
            login(@user)
            render 'api/users/show';
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render json: { message: 'Logout successful.' }
        else
            render json: ['No user is currently signed in.'], status: 404
        end
    end
end
