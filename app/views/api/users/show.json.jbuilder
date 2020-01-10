
json.partial! "api/users/user", user: @user

json.activities do
  @user.activities.each do |act|
    json.set! act.id do
      json.extract! act, :id, :title, :sport, :distance, :elevation, :route_id, :personal_record, :start_time
    end
  end
end
