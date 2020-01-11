@activities.each do |act|
  json.partial! "api/activities/activity", activity: act
end