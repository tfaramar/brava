@activities.each do |act|
  json.set! act.id do
    json.extract! act, :id, :user_id, :title, :distance, :elevation, :route_id, :personal_record, :start_time
  end
end