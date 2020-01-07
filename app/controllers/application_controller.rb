class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    helper_method :current, :logged_in?, :require_logged_in

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        unless current_user
            render json: ['Invalid credentials.'], status: 401
        end
    end

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end
   
end
