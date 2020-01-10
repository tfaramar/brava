json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :activity_ids
end

json.activities do
    @user.activities.each do |act|
      json.set! act.id do
        json.extract! act, :id, :title, :distance, :elevation, :route_id, :personal_record, :start_time
      end
  end
end