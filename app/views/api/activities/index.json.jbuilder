@activities.each do |act|
  json.set! act.id do 
    json.partial! "api/activities/activity", activity: act
  end
end